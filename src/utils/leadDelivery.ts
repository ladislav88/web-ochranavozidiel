import type { EmailData } from './emailService';

const DRAFT_KEY = 'alco:quote-draft-sent:v1';
export function hasValidContact(data: Pick<EmailData, 'email' | 'phone'>) {
  const email = data.email.trim();
  const phone = data.phone.trim();
  const digits = phone.replace(/\D/g, '');
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    (/^\+?[\d\s()-]+$/.test(phone) && digits.length >= 9 && digits.length <= 15);
}

function readDraftFlag() {
  try { return sessionStorage.getItem(DRAFT_KEY) === 'sent'; } catch { return false; }
}
function writeDraftFlag(sent: boolean) {
  try {
    if (sent) sessionStorage.setItem(DRAFT_KEY, 'sent');
    else sessionStorage.removeItem(DRAFT_KEY);
  } catch { /* Delivery still works when browser storage is unavailable. */ }
}

// Keep draft and final delivery separate. One early notice per browser session;
// the completed enquiry is always sent, including after an early-notice failure.
export function createLeadDelivery(send: (data: EmailData) => Promise<unknown>, storage = { read: readDraftFlag, write: writeDraftFlag }) {
  let draftSent = false;
  let completed = false;
  let draftInFlight: Promise<unknown> | undefined;
  let finalInFlight: Promise<unknown> | undefined;
  return {
    sendDraft(data: EmailData): Promise<unknown> {
      if (!hasValidContact(data)) return Promise.reject(new Error('Contact missing'));
      if (completed || draftSent || storage.read()) return Promise.resolve();
      if (draftInFlight) return draftInFlight;
      draftInFlight = send({ ...data,
        name: data.name || 'Návštevník webu',
        subject: `ROZPRACOVANÝ DOPYT — ${data.subject || 'Ochrana vozidla'}`,
        message: `ROZPRACOVANÝ DOPYT — návštevník povolil kontaktovanie, ale dopyt ešte neodoslal.\n\n${data.message || ''}`,
      }).then(result => { draftSent = true; storage.write(true); return result; })
        .finally(() => { draftInFlight = undefined; });
      return draftInFlight;
    },
    sendFinal(data: EmailData): Promise<unknown> {
      if (finalInFlight) return finalInFlight;
      if (completed) return Promise.resolve();
      if (!hasValidContact(data) || !data.name.trim()) return Promise.reject(new Error('Contact missing'));
      completed = true;
      finalInFlight = (draftInFlight || Promise.resolve()).catch(() => undefined)
        .then(() => send({ ...data, subject: `NOVÝ DOPYT — ${data.subject || 'Ochrana vozidla'}` }))
        .catch(error => { completed = false; throw error; })
        .finally(() => { finalInFlight = undefined; });
      return finalInFlight;
    },
    reset() { draftSent = false; completed = false; storage.write(false); },
  };
}
