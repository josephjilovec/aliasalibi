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
    <header className="site-header"><Link className="wordmark" href="/">Alias <i>&</i> Alibi</Link><nav><Link href="/#services">Services</Link><Link href="/#process">Process</Link><Link href="/intake">Private intake</Link></nav></header>
    {children}
    <footer><div><strong>Alias & Alibi</strong><span>Private architecture for public exposure.</span></div><p>Concierge coordination only. Legal, tax, title, fiduciary, and filing work is performed or approved by appropriately licensed or authorized professionals where required.</p></footer>
  </body></html>;
}
