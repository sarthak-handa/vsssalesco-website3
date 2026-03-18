'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/automation', label: 'Automation' },
  { href: '/security', label: 'Security' },
  { href: '/theater', label: 'Theater' },
  { href: '/case-studies', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="VSS Salesco" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-extrabold text-sm tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-brand-navyD' : 'text-brand-navy'}`}>
                VSS SALESCO
              </div>
              <div className={`text-xs tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-brand-red' : 'text-brand-red'}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                Vision & Security
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover-underline text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? scrolled ? 'text-brand-red' : 'text-brand-red'
                    : scrolled ? 'text-gray-700 hover:text-brand-navyD' : 'text-gray-600 hover:text-brand-navy'
                }`}
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', letterSpacing: '0.04em' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 ${scrolled ? 'text-brand-navyD' : 'text-brand-navy'}`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 bg-current ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-0.5 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 bg-current ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-navyD flex flex-col pt-24 px-8 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-4 border-b border-white/10 font-display text-2xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-brand-red' : 'text-white hover:text-red-300'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto">
              <a href={`tel:${SITE_CONFIG.phone}`} className="block text-white/60 text-sm mt-4">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
