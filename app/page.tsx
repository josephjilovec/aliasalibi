import Image from 'next/image';
import Link from 'next/link';
import { guardrails, services } from '@/lib/brand';

export const revalidate = 3600;

const serviceImages = [
  '/media/alias-02-correspondence.svg',
  '/media/alias-03-entity-ledger.svg',
  '/media/alias-04-property-records.svg',
  '/media/alias-05-county-map.svg'
];

export default function Home() {
  return <main>
    <section className="hero editorial-hero">
      <Image className="hero-photo" src="/media/alias-01-private-residence.svg" alt="Discreet private residence representing lawful privacy architecture" fill priority unoptimized sizes="100vw" />
      <div className="hero-veil" />
      <div className="hero-copy"><p className="kicker">PRIVATE CONCIERGE / ENTITY & PROPERTY PRIVACY</p><h1>Privacy designed<br/><em>like a private office.</em></h1><p className="lede">Alias & Alibi coordinates lawful identity-exposure reduction across entities, correspondence, and real estate—then routes jurisdiction-specific legal work to vetted professionals.</p><div className="actions"><Link className="button primary" href="/intake">Request a private assessment</Link><a className="text-link" href="#services">Enter the private office ↓</a></div></div>
      <div className="hero-loop"><Image src="/media/alias-10-shutter-loop.svg" alt="Animated private-file privacy scan" fill unoptimized sizes="(max-width: 850px) 90vw, 34vw" /></div>
      <div className="hero-caption"><span>Alias & Alibi / 2026</span><span>Exposure reduction · professional routing · evidence</span></div>
    </section>

    <section className="editorial-intro deferred-section"><div><p className="kicker">A PRIVATE-CLIENT SYSTEM</p><h2>Not secrecy theater. A disciplined reduction of unnecessary public exposure.</h2></div><div className="intro-gallery"><figure><Image src="/media/alias-07-private-office.svg" alt="Private office environment" fill unoptimized sizes="50vw" /></figure><figure><Image src="/media/alias-09-archive.svg" alt="Organized private records archive" fill unoptimized sizes="30vw" /></figure></div></section>

    <section id="services" className="section deferred-section"><div className="section-head"><p>01 / SERVICE LINES</p><h2>One architecture.<br/>Different exposure surfaces.</h2></div><div className="service-grid media-service-grid">{services.map((service,index) => <article key={service.name} className={service.flagship ? 'flagship' : ''}><div className="service-art"><Image src={serviceImages[index % serviceImages.length]} alt="" fill unoptimized sizes="(max-width: 850px) 100vw, 50vw" /></div><div className="service-copy"><span>{service.code}</span><h3>{service.name}</h3><p>{service.description}</p><ul>{service.includes.map((item)=><li key={item}>{item}</li>)}</ul>{service.flagship && <b>Flagship real-estate protection line</b>}</div></article>)}</div></section>

    <section className="landlord-feature deferred-section"><Image className="feature-photo" src="/media/alias-04-property-records.svg" alt="Property records and real-estate privacy analysis" fill unoptimized sizes="100vw" /><div className="feature-shade"/><div className="feature-copy"><p className="kicker">THE NAMELESS LANDLORD</p><h2>Real-estate privacy is a records problem before it is a paperwork problem.</h2><p>Map the ownership trail, county visibility, title dependencies, correspondence surfaces, and professional review gates before changing anything.</p><Link href="/intake" className="button primary">Request property privacy review</Link></div><div className="feature-map"><Image src="/media/alias-05-county-map.svg" alt="County exposure mapping illustration" fill unoptimized sizes="32vw" /></div></section>

    <section id="process" className="section dark deferred-section"><div className="section-head"><p>02 / OPERATING MODEL</p><h2>A concierge workflow with software discipline.</h2></div><div className="process-editorial"><div className="process-steps">{[['01','Map','Identify what is publicly exposed, where it appears, and which obligations cannot be altered.'],['02','Design','Build a counsel-ready privacy plan with jurisdiction, title, mail, and entity dependencies clearly separated.'],['03','Route','Send legal, registered-agent, title, trust, and filing tasks to authorized partners with scoped instructions.'],['04','Verify','Record completion evidence, renewal dates, exceptions, and changes that require professional review.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="process-media"><figure><Image src="/media/alias-06-title-chain.svg" alt="Property title-chain illustration" fill unoptimized sizes="42vw" /></figure><figure><Image src="/media/alias-08-counsel-handoff.svg" alt="Professional counsel handoff illustration" fill unoptimized sizes="42vw" /></figure></div></div></section>

    <section className="private-file deferred-section"><div className="private-file-copy"><p className="kicker">03 / PRIVATE FILE</p><h2>Evidence in one place. Sensitive execution with the right professional.</h2><p>The portal is a coordination record: exposure surfaces, status, renewal dates, document references, and professional handoffs. It is not a substitute for counsel and it does not hide legally required information.</p></div><div className="private-file-stack"><figure><Image src="/media/alias-03-entity-ledger.svg" alt="Entity coordination ledger" fill unoptimized sizes="44vw" /></figure><figure><Image src="/media/alias-02-correspondence.svg" alt="Secure correspondence workflow" fill unoptimized sizes="32vw" /></figure></div></section>

    <section className="section guardrail deferred-section"><div><p className="kicker">04 / NON-NEGOTIABLE</p><h2>Privacy is not concealment from lawful obligations.</h2></div><ul>{guardrails.map((item)=><li key={item}>{item}</li>)}</ul></section>

    <section className="cta deferred-section"><p>PRIVATE INTAKE</p><h2>Start with exposure, objectives, and jurisdiction—not confidential documents.</h2><Link className="button primary" href="/intake">Begin private intake</Link></section>
  </main>;
}
