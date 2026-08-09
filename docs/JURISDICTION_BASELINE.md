# Alias & Alibi — Jurisdiction Baseline

This document is a product-design baseline, not legal advice. Every jurisdiction-specific workflow must be re-verified against current official sources and qualified professional guidance before execution.

## Wyoming

Wyoming is supported as a candidate jurisdiction for entity-privacy coordination, not as a default recommendation.

Current product assumptions to model:

- A Wyoming business must continuously maintain a registered agent.
- A registered agent must maintain a physical Wyoming address where service of process can be received.
- Commercial registered agents are regulated and maintain records concerning the entities they represent.
- A registered-agent address is not a substitute for all business, tax, banking, licensing, or operational address requirements.

### Product implication

Alias & Alibi should treat Wyoming as a professional-routing path with three distinct records:

1. entity formation / maintenance requirements,
2. registered-agent requirements,
3. separate client operating and disclosure obligations.

The interface must never imply that appointing a registered agent eliminates the need to disclose ownership or contact information to legally entitled parties.

## New Mexico

New Mexico is supported as a candidate jurisdiction through the official state business filing system and approved professional partners.

### Product implication

The platform should maintain a versioned New Mexico workflow for:

- formation or registration status,
- registered-agent coordination,
- amendments and maintenance,
- evidence of completed filings,
- professional review where the client’s operating facts raise legal or tax questions.

Do not hard-code marketing claims about anonymity. The product should instead map which data is public, which data is provider-held, and which data remains subject to required disclosure.

## Federal beneficial-ownership baseline

As of the current 2026 product baseline, FinCEN’s Corporate Transparency Act implementation exempts entities created in the United States from BOI reporting to FinCEN under the current rule, while certain foreign entities registered to do business in a U.S. jurisdiction remain within the reporting framework.

### Product implication

This rule must be represented as a versioned federal requirement with:

- source date,
- effective date,
- entity-scope definition,
- superseded state,
- re-review trigger.

The system must not treat the current domestic-company exemption as permanent.

## Required re-review triggers

- change in client residence,
- change in operating state,
- change in property ownership,
- new lender or title relationship,
- new regulated license,
- change in registered agent,
- federal beneficial-ownership rule change,
- court order or legal dispute,
- professional partner flags a conflict with the current workflow.

## Product language rule

Preferred language:

- public-exposure reduction,
- privacy architecture,
- professional coordination,
- registered-agent workflow,
- county-record mapping,
- counsel-ready review.

Avoid language that promises invisibility, immunity from disclosure, or concealment from legally entitled parties.
