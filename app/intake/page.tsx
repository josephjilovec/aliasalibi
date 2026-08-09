'use client';

import { FormEvent, useState } from 'react';

export default function IntakePage() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setStatus('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/intake', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Request failed');
      form.reset(); setStatus('Request received. A secure follow-up is required before any sensitive information is collected.');
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Unable to send request.'); }
    finally { setBusy(false); }
  }

  return <main className="intake-page"><section><p className="kicker">PRIVATE INTAKE</p><h1>Describe the exposure.<br/><em>Not the secrets.</em></h1><p>Do not submit Social Security numbers, tax IDs, account credentials, deeds, wallet keys, confidential legal documents, or other sensitive records here.</p></section><form onSubmit={submit}><label>Name<input name="name" required maxLength={120}/></label><label>Email<input name="email" type="email" required maxLength={160}/></label><label>Primary need<select name="service" required defaultValue=""><option value="" disabled>Select one</option><option>Personal / creator privacy</option><option>Entity privacy coordination</option><option>Mail and correspondence</option><option>The Nameless Landlord</option><option>Portfolio exposure review</option></select></label><label>State or jurisdiction<input name="jurisdiction" required maxLength={100}/></label><label>High-level objective<textarea name="objective" rows={6} required maxLength={1800}/></label><label className="check"><input type="checkbox" name="lawfulPurpose" value="yes" required/><span>I am seeking lawful privacy and understand this service cannot be used to evade taxes, sanctions, creditors, court orders, required disclosures, or other legal obligations.</span></label><button className="button primary" disabled={busy}>{busy ? 'Sending…' : 'Request assessment'}</button><p className="status" role="status">{status}</p></form></main>;
}
