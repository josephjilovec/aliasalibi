# Alias & Alibi — Operating Model 2026–2041

## Strategic thesis

Alias & Alibi is a premium privacy-concierge company with a private digital portal. It is designed for clients who want to reduce unnecessary public exposure without confusing privacy with concealment from legally entitled parties.

The company combines four service lines:

1. Private Identity Architecture.
2. Entity Privacy Coordination.
3. Secure Correspondence.
4. The Nameless Landlord, the flagship real-estate privacy line.

The product is software-assisted, but the service promise is coordination. The client should experience one controlled process while registered agents, attorneys, title professionals, fiduciaries, and other qualified partners perform jurisdiction-specific work.

## Customer segments

### High-value primary clients

- Founders and creators whose home address or personal contact information appears across public-facing business surfaces.
- Small business owners operating multiple legal entities.
- Landlords and real-estate investors with recurring county-record exposure.
- Executives and high-visibility professionals who want a deliberate separation between personal and commercial correspondence.
- Family-owned operating businesses that need recurring entity, mail, and property privacy maintenance.

### Psychographic fit

The ideal client values discretion, organization, continuity, and professional execution. They are willing to pay for a coordinated service because the cost of public exposure, missed renewals, fragmented professional relationships, and improvised structures is higher than the subscription or retainer.

## Value proposition

**Primary promise:** Privacy by architecture, not improvisation.

The product does not sell secrecy as an abstract concept. It sells a controlled operating system for identifying unnecessary exposure, distinguishing it from mandatory disclosure, routing the work to the correct professional, and maintaining the result over time.

## Revenue model

### Tier 1 — Exposure Review

One-time paid assessment that maps public-facing identity, entity, correspondence, and property surfaces. The deliverable is a structured exposure file and professional-routing plan.

### Tier 2 — Private Office Membership

Recurring subscription for maintenance, renewal monitoring, correspondence coordination, evidence tracking, and annual exposure review.

### Tier 3 — The Nameless Landlord

Property-focused package priced per portfolio size and jurisdiction complexity. The service includes county-record mapping, title-chain review preparation, partner coordination, and recurring change monitoring.

### Tier 4 — Concierge Retainer

High-touch service for multi-entity or multi-property clients. Includes dedicated coordination, partner scheduling, matter tracking, and priority review.

### Partner economics

Alias & Alibi should not mark up regulated professional work in a way that creates fee-sharing problems. Professional fees should be structured transparently and reviewed for applicable state rules. Commercial arrangements with registered agents, mail providers, and technology vendors should be documented separately from legal-service fees.

## Acquisition model

### High-intent search

Build content around lawful privacy questions such as:

- business address exposure
- registered-agent privacy
- public-record exposure for landlords
- how business mail reaches a home address
- what information appears in county records
- how to organize privacy across multiple entities

Content should educate, not promise invisibility.

### Referral network

Develop reciprocal relationships with:

- estate-planning and business attorneys
- real-estate attorneys
- title companies
- registered-agent firms
- CPA and tax advisory firms
- wealth managers
- executive security firms
- reputation-management firms

### Creator and founder channel

Offer a fixed-price public exposure review for creators, founders, and public-facing operators. This can become the self-contained entry product that feeds higher-value concierge work.

## Service workflow

### 1. Qualification

Collect high-level goals, jurisdiction, entity count, property count, and lawful-use attestation. Do not collect highly sensitive identity information through the public intake form.

### 2. Exposure map

Create an inventory of public-facing surfaces and classify each one:

- legally required
- provider-controlled
- client-controlled
- professional-review required
- unknown / unresolved

### 3. Matter design

Convert the exposure map into work packages. Each package has owner, jurisdiction, required professional type, dependencies, target state, and evidence requirements.

### 4. Professional routing

Route legal, title, filing, trust, or registered-agent work to appropriate partners. The software must record when a partner accepted the matter and what scope was assigned.

### 5. Verification

No task is complete until there is evidence: filing receipt, provider confirmation, recorded-document reference, signed agreement, or other approved artifact.

### 6. Maintenance

Track renewals, address changes, ownership changes, property acquisitions, provider changes, and regulatory changes that may require re-review.

## Partner architecture

Partner categories should be independent adapters rather than hard-coded providers:

- RegisteredAgentProvider
- MailProvider
- BusinessAttorney
- RealEstateAttorney
- TitlePartner
- FiduciaryPartner
- FilingProvider
- TaxAdvisor

Every partner record should store jurisdiction coverage, service category, licensing or authorization metadata where relevant, SLA, secure-delivery method, pricing model, and current status.

## Technical architecture

### Application layer

Next.js serves the public site and authenticated private portal. The private portal should be separated into tenant-scoped areas for matters, exposures, entities, properties, correspondence, handoffs, renewals, and evidence.

### Data layer

PostgreSQL with row-level security is the recommended system of record. Core tables:

- clients
- users
- matters
- exposure_surfaces
- entities
- properties
- correspondence_routes
- partners
- handoffs
- evidence_artifacts
- renewals
- audit_events

### Document layer

Sensitive records should use encrypted object storage with short-lived signed access. The application database stores metadata and content hashes, not unrestricted document payloads.

### Workflow layer

A queue handles partner routing, renewal reminders, source refresh, and exception escalation. Workflow steps must be idempotent so retries do not create duplicate external actions.

## Legal-risk controls

The product must never imply that an entity, trust, address, or nominee arrangement makes a person legally invisible.

Required controls:

- lawful-purpose attestation
- jurisdiction classification
- professional-review gate for legal instruments
- source provenance on public-record data
- partner authorization records
- immutable audit events
- explicit client confirmation before external execution
- no automatic backdating or alteration of historical facts
- no workflow that suppresses disclosure owed to a regulator, court, lender, title insurer, tax authority, or other legally entitled party

## Metrics

### Product metrics

- time from intake to completed exposure map
- percentage of exposures classified without manual escalation
- partner acceptance time
- evidence-completion rate
- renewal completion before deadline
- number of unresolved exposure surfaces per client

### Business metrics

- assessment-to-membership conversion
- annual recurring revenue per client
- concierge retainer renewal rate
- referral-source concentration
- gross margin by service line
- partner failure / reassignment rate

## 2026–2041 roadmap

### 2026–2028 — Concierge-first proof

Validate high-intent client segments, build repeatable exposure maps, establish partner networks, and refine the private portal around real service operations.

### 2029–2032 — Workflow standardization

Convert recurring professional coordination into reusable jurisdiction playbooks, structured partner adapters, renewal automation, and evidence standards.

### 2033–2036 — Enterprise and family-office layer

Add multi-user governance, delegated permissions, portfolio-wide exposure reports, vendor oversight, and more complex entity/property graphs.

### 2037–2041 — Privacy operations infrastructure

Position Alias & Alibi as an operating layer that professional firms and private-client organizations can use to coordinate lawful privacy work across many jurisdictions while preserving professional responsibility and auditability.
