export const services = [
  { code: 'A1', name: 'Private Identity Architecture', description: 'Reduce unnecessary public exposure while preserving required legal, tax, banking, and regulatory disclosures.', includes: ['Exposure mapping','Public contact separation','Professional handoff map'], flagship: false },
  { code: 'A2', name: 'Entity Privacy Coordination', description: 'Coordinate registered-agent, business-address, formation, and maintenance workflows across approved jurisdictions.', includes: ['Entity intake','Partner routing','Renewal controls'], flagship: false },
  { code: 'A3', name: 'Secure Correspondence', description: 'Design business-mail and forwarding workflows that separate public-facing correspondence from personal residence details where lawful.', includes: ['Mail routing design','Address exposure review','Escalation rules'], flagship: false },
  { code: 'A4', name: 'The Nameless Landlord', description: 'A real-estate protection line for landlords and investors focused on public-record exposure mapping, title-chain review, and counsel-led trust or entity options.', includes: ['County record mapping','Title-partner coordination','Counsel-ready land-trust evaluation'], flagship: true }
] as const;

export const guardrails = [
  'No concealment from tax authorities, courts, regulators, lenders, title insurers, sanctions controls, or other legally entitled parties.',
  'No fraudulent-transfer, creditor-evasion, backdating, nominee deception, or false-record workflows.',
  'Jurisdiction-specific legal instruments are reviewed or produced by appropriately licensed counsel where required.',
  'The private portal records provenance, approvals, partner handoffs, renewal dates, and exceptions for auditability.'
] as const;
