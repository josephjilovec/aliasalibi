import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 10;

const allowedServices = new Set(['Personal / creator privacy','Entity privacy coordination','Mail and correspondence','The Nameless Landlord','Portfolio exposure review']);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const service = String(body.service || '').trim();
  const jurisdiction = String(body.jurisdiction || '').trim();
  const objective = String(body.objective || '').trim();
  const lawfulPurpose = String(body.lawfulPurpose || '');
  if (!name || !email.includes('@') || !allowedServices.has(service) || !jurisdiction || objective.length < 10 || lawfulPurpose !== 'yes') return NextResponse.json({ error: 'Please complete the required fields and lawful-use attestation.' }, { status: 422 });
  if (objective.length > 1800) return NextResponse.json({ error: 'Please keep the initial objective concise.' }, { status: 422 });

  const endpoint = process.env.LEAD_ROUTER_URL;
  const token = process.env.LEAD_ROUTER_TOKEN;
  if (!endpoint || !token) return NextResponse.json({ error: 'Private intake routing is not configured yet.' }, { status: 503 });

  const upstream = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ name, email, service, jurisdiction, objective, lawfulPurpose: true, source: 'alias-alibi' }), cache: 'no-store', signal: AbortSignal.timeout(8000) });
  if (!upstream.ok) return NextResponse.json({ error: 'Secure routing is temporarily unavailable.' }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 202 });
}
