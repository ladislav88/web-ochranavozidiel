
import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  subject?: string;
  message?: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleMonth?: string;
  startMethod?: string;
  engineType?: string;
  customVehicleModel?: string;
  customEngineType?: string;
}

let sendQueue: Promise<unknown> = Promise.resolve();
let lastAttempt = 0;

export const sendEmail = (data: EmailData) => {
  const attempt = sendQueue.catch(() => undefined).then(async () => {
    // EmailJS accepts one request per second, including draft followed by submit.
    const delay = Math.max(0, 1200 - (Date.now() - lastAttempt));
    if (delay) await new Promise(resolve => setTimeout(resolve, delay));
    lastAttempt = Date.now();
    return deliver(data);
  });
  sendQueue = attempt;
  return attempt;
};

const deliver = async (data: EmailData) => {
  const templateParams = {
    subject: data.subject || 'Dopyt z webu',
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    city: data.city || '',
    message: [data.message || '', '', `Vozidlo: ${data.vehicleBrand || ''} ${data.vehicleModel || ''}`.trim(),
      `Rok / mesiac: ${data.vehicleYear || ''} ${data.vehicleMonth || ''}`.trim(),
      `Štartovanie: ${data.startMethod || 'neuvedené'}`, `Motorizácia: ${data.engineType || 'neuvedená'}`,
      `Mesto: ${data.city || 'neuvedené'}`, `Telefón: ${data.phone || 'neuvedený'}`, `E-mail: ${data.email || 'neuvedený'}`].join('\n'),
    vehicle_brand: data.vehicleBrand || '',
    vehicle_model: data.vehicleModel || '',
    vehicle_year: data.vehicleYear || '',
    vehicle_month: data.vehicleMonth || '',
    start_method: data.startMethod || '',
    engine_type: data.engineType || '',
    custom_vehicle_model: data.customVehicleModel || '',
    custom_engine_type: data.customEngineType || '',
  };

  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) throw new Error('EmailJS config missing');
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return response;
  } catch (error) {
    console.error('Email delivery failed');
    throw error;
  }
};
