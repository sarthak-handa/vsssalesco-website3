import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/utils';

const services = [
  { href: '/automation', label: 'Home Automation' },
  { href: '/security', label: 'Security Systems' },
  { href: '/theater', label: 'Home Theater' },
  { href: '/automation#gate', label: 'Gate Automation' },
  { href: '/security#cctv', label: 'CCTV Systems' },
  { href: '/security#locks', label: 'Smart Locks' },
];

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navyD text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="section-label text-red-400 mb-2">Ready to transform your space?</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">
              Let&apos;s build your smart home.
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-display font-semibold text-sm rounded transition-all hover:bg-red-600"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-display font-semibold text-sm rounded transition-all hover:border-white/50"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="VSS Salesco" fill className="object-contain" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm text-white">VSS SALESCO</div>
              <div className="text-xs text-red-400 tracking-widest uppercase" style={{ fontSize: '0.6rem' }}>Vision & Security</div>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Faridabad&apos;s trusted partner for smart home automation, security, and home theater solutions.
          </p>
          <p className="text-white/40 text-xs">{SITE_CONFIG.tagline}</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-white text-sm tracking-wide mb-5 uppercase" style={{ letterSpacing: '0.1em' }}>Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-white/50 text-sm hover:text-white transition-colors hover-underline">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-bold text-white text-sm tracking-wide mb-5 uppercase" style={{ letterSpacing: '0.1em' }}>Company</h4>
          <ul className="space-y-3">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-white/50 text-sm hover:text-white transition-colors hover-underline">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-white text-sm tracking-wide mb-5 uppercase" style={{ letterSpacing: '0.1em' }}>Contact</h4>
          <ul className="space-y-4">
            <li>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/50 text-sm hover:text-white transition-colors block">{SITE_CONFIG.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/50 text-sm hover:text-white transition-colors block">{SITE_CONFIG.email}</a>
            </li>
            <li>
              <p className="text-white/50 text-sm leading-relaxed">{SITE_CONFIG.address}</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} VSS Salesco. All rights reserved.</p>
          <p className="text-white/20 text-xs">Sector 87, Faridabad, Haryana 121002</p>
        </div>
      </div>
    </footer>
  );
}
