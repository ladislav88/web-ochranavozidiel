import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../src/utils/leadDelivery.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { createLeadDelivery, hasValidContact } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const lead = { name: 'Test montáže', email: 'test@example.com', phone: '', subject: 'IGLA', vehicleBrand: 'Škoda', vehicleModel: 'Octavia', city: 'Trenčín' };
const memory = () => { let sent = false; return { read: () => sent, write: value => { sent = value; } }; };

test('requires an actual contact, not whitespace or punctuation', () => {
  for (const phone of ['', '         ', '---------', '+()', '123']) assert.equal(hasValidContact({ email: '', phone }), false);
  assert.equal(hasValidContact({ email: 'wrong@', phone: '' }), false);
  assert.equal(hasValidContact({ email: '', phone: '+421 911 123 456' }), true);
  assert.equal(hasValidContact(lead), true);
});
test('one early notice, retaining readable vehicle details and distinguishing unfinished enquiry', async () => {
  const calls = []; let finish;
  const delivery = createLeadDelivery(data => { calls.push(data); return new Promise(resolve => { finish = resolve; }); }, memory());
  const first = delivery.sendDraft(lead);
  assert.equal(delivery.sendDraft({ ...lead, message: 'Edited' }), first);
  assert.equal(calls.length, 1);
  assert.match(calls[0].subject, /ROZPRACOVANÝ/);
  assert.equal(calls[0].vehicleModel, 'Octavia');
  finish(); await first; await delivery.sendDraft(lead);
  assert.equal(calls.length, 1);
});
test('completed enquiry waits for draft, and double submit sends only once', async () => {
  const calls = []; let finish;
  const delivery = createLeadDelivery(data => { calls.push(data); return calls.length === 1 ? new Promise(resolve => { finish = resolve; }) : Promise.resolve(); }, memory());
  const draft = delivery.sendDraft(lead);
  const final = delivery.sendFinal({ ...lead, message: 'Final details' });
  assert.equal(delivery.sendFinal(lead), final);
  assert.equal(calls.length, 1);
  finish(); await draft; await final;
  assert.equal(calls.length, 2);
  assert.match(calls[1].subject, /NOVÝ DOPYT/);
  assert.equal(calls[1].message, 'Final details');
  await delivery.sendDraft(lead); await delivery.sendFinal(lead);
  assert.equal(calls.length, 2);
});
test('failed early notice does not block completed enquiry', async () => {
  let count = 0;
  const delivery = createLeadDelivery(() => ++count === 1 ? Promise.reject(new Error('Offline')) : Promise.resolve(), memory());
  await assert.rejects(delivery.sendDraft(lead));
  await delivery.sendFinal(lead); assert.equal(count, 2);
});
test('failed final submission can be retried with the same details', async () => {
  let count = 0;
  const delivery = createLeadDelivery(() => ++count === 1 ? Promise.reject(new Error('Offline')) : Promise.resolve(), memory());
  await assert.rejects(delivery.sendFinal(lead));
  await delivery.sendFinal(lead); assert.equal(count, 2);
});
test('navigation does not repeat early notice; explicit new enquiry resets it', async () => {
  const storage = memory(); let count = 0;
  await createLeadDelivery(async () => { count++; }, storage).sendDraft(lead);
  const nextPage = createLeadDelivery(async () => { count++; }, storage);
  await nextPage.sendDraft(lead); assert.equal(count, 1);
  await nextPage.sendFinal(lead); assert.equal(count, 2);
  nextPage.reset(); await nextPage.sendDraft(lead); assert.equal(count, 3);
});
