create extension if not exists pgcrypto;

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists matters (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  client_id uuid not null references clients(id) on delete cascade,
  service_line text not null,
  jurisdiction text not null,
  status text not null default 'intake',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists exposure_surfaces (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  matter_id uuid not null references matters(id) on delete cascade,
  surface_type text not null,
  source_ref text,
  classification text not null,
  requires_professional_review boolean not null default false,
  observed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  partner_type text not null,
  name text not null,
  jurisdiction_scope text[] not null default '{}',
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists handoffs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  matter_id uuid not null references matters(id) on delete cascade,
  partner_id uuid references partners(id),
  scope text not null,
  status text not null default 'pending',
  accepted_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  matter_id uuid references matters(id) on delete cascade,
  event_type text not null,
  actor_type text not null,
  actor_ref text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table clients enable row level security;
alter table matters enable row level security;
alter table exposure_surfaces enable row level security;
alter table partners enable row level security;
alter table handoffs enable row level security;
alter table audit_events enable row level security;

create policy tenant_clients on clients using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_matters on matters using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_exposure on exposure_surfaces using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_partners on partners using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_handoffs on handoffs using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_audit on audit_events using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);

create index if not exists matters_tenant_client_idx on matters(tenant_id, client_id);
create index if not exists exposure_tenant_matter_idx on exposure_surfaces(tenant_id, matter_id);
create index if not exists handoffs_tenant_matter_idx on handoffs(tenant_id, matter_id);
create index if not exists audit_tenant_created_idx on audit_events(tenant_id, created_at desc);
