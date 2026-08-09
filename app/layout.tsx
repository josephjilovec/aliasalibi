import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './performance.css';

export const metadata: Metadata = {
  title: { default: 'Alias & Alibi', template: '%s | Alias & Alibi' },
  description: 'Private identity, entity, correspondence, and real-estate exposure reduction coordinated through a premium concierge service and private digital portal.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <style>{`
      @media (min-width: 901px) {
        .site-header {
          height: 112px;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 64px 48px;
          justify-items: center;
          padding: 0 clamp(22px, 5vw, 76px);
        }
        .site-header .wordmark {
          grid-row: 1;
          align-self: end;
          padding-bottom: 10px;
          font-size: 1.5rem;
          letter-spacing: -.015em;
        }
        .site-header nav {
          grid-row: 2;
          align-self: start;
          gap: clamp(28px, 4vw, 58px);
          font-size: .68rem;
          letter-spacing: .16em;
        }
      }
    `}</style>
    <header className="site-header"><Link className="wordmark" href="/">Alias <i>&</i> Alibi</Link><nav><Link href="/#services">Services</Link><Link href="/#process">Process</Link><Link href="/intake">Private intake</Link></nav></header>
    {children}
    <footer><div><strong>Alias & Alibi</strong><span>Private architecture for public exposure.</span></div><p>Concierge coordination only. Legal, tax, title, fiduciary, and filing work is performed or approved by appropriately licensed or authorized professionals where required.</p></footer>
  </body></html>;
}