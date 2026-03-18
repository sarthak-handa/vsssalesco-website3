'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-navyD to-brand-navy rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Decorative orbs */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-red/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="section-label mb-4" style={{ color: '#f87171' }}>Get Started Today</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight mb-5">
              Ready for a smarter,<br />safer home?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Book a free site visit and consultation. Our experts will design a custom solution tailored to your space and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book Free Consultation</span>
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-display font-semibold text-sm rounded hover:border-white/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
