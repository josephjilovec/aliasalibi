# Alias & Alibi

**Positioning:** a premium privacy concierge and private digital portal for lawful public-exposure reduction across personal identity, entities, correspondence, and real estate.

## Brand architecture

The brand name is locked. Alternate naming work is intentionally omitted. The emotional promise is control: clients should feel that public exposure is mapped, deliberate, and professionally managed rather than improvised.

**Primary hook:** Privacy by architecture, not improvisation.

**Ideal client:** high-net-worth individuals, creators, digital entrepreneurs, landlords, and small portfolio operators who value discretion, understand that legal obligations still apply, and are willing to pay for coordinated professional execution rather than internet templates.

### Flagship real-estate line

**The Nameless Landlord** is integrated as the real-estate service line. It maps county-record exposure, ownership-chain visibility, address leakage, and renewal dependencies, then prepares a counsel-ready file for title companies and real-estate attorneys to evaluate lawful entity or trust structures.

## Visual system

**Direction:** Noir Private Office — a classic concierge environment translated into software.

- Ink: `#0C0D0F`
- Parchment: `#F3EEE4`
- Oxblood: `#7A263A`
- Aged brass: `#B5965A`
- Smoke: `#B9B3A9`
- Display type: Georgia / editorial serif
- Interface type: Arial / neutral grotesk fallback

The experience uses large editorial serif typography, restrained brass rules, paper-like intake surfaces, and deliberately sparse motion. It should feel like a private office, not a consumer utility.

## Product architecture

1. **Exposure Mapper** — maps public-facing entity, address, county, and contact surfaces.
2. **Private File** — stores non-sensitive status records, partner handoffs, approvals, renewal dates, and evidence references.
3. **Professional Router** — routes jurisdiction-specific tasks to registered agents, attorneys, title companies, fiduciaries, and other authorized partners.
4. **Correspondence Orchestrator** — tracks mail routing, address exposure, forwarding dependencies, and exceptions.
5. **Property Privacy Layer** — creates a counsel-ready real-estate exposure packet without automatically generating legal instruments.

### Recommended production stack

- Next.js App Router + TypeScript for public site and private portal shell.
- PostgreSQL with row-level security for tenant isolation.
- Object storage with envelope encryption for approved documents.
- Redis for short-lived workflow state and rate limiting.
- Python/FastAPI workers for registry normalization and public-record parsing.
- Stripe for subscription and concierge retainers.
- DocuSign or Dropbox Sign for partner-approved signature workflows.
- Partner-specific registered-agent, title, and counsel integrations behind server-side adapters.

## Data model

Core entities: `Client`, `Matter`, `ExposureSurface`, `EntityRecord`, `PropertyRecord`, `Partner`, `Handoff`, `EvidenceArtifact`, `Renewal`, and `AuditEvent`.

Sensitive identity information should be minimized, encrypted, segregated by purpose, and never placed in client-visible URLs or analytics payloads. Initial lead intake must not collect Social Security numbers, tax IDs, deeds, wallet credentials, or other high-risk records.

## Legal and compliance boundaries

Alias & Alibi coordinates software workflows and professional services. It does not promise anonymity from legally entitled parties and must not be used for tax evasion, sanctions evasion, fraudulent transfers, creditor concealment, false filings, court-order avoidance, or deceptive nominee arrangements.

Jurisdiction-specific legal instruments, land-trust decisions, title changes, and legal opinions require review or execution by appropriately licensed or authorized professionals. The product should maintain an immutable audit trail of source data, client attestations, professional approvals, filings, and renewal events.

## Delivery flow

`Lead → lawful-use attestation → exposure map → jurisdiction classification → professional routing → approval → execution evidence → renewal monitoring`

## Environment

Copy `.env.example` into your local environment and supply server-side values. Never expose partner credentials to the browser.

## Deployment

1. Install dependencies with `npm install`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Configure server-side environment variables in the deployment platform.
5. Deploy the Next.js project.

The current intake endpoint intentionally refuses to accept production leads until `LEAD_ROUTER_URL` and `LEAD_ROUTER_TOKEN` are configured.
