'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StatCounter from '@/components/ui/StatCounter';
import { IMAGES } from '@/lib/utils';

const reasons = [
  { title: 'End-to-End Service', desc: 'From design consultation to installation and after-sales support — we handle everything.' },
  { title: 'Premium Brands Only', desc: 'We partner with globally recognized brands: Legrand, Hikvision, Dahua, Honeywell and more.' },
  { title: 'Certified Engineers', desc: 'Our team holds industry certifications and undergoes regular training on the latest systems.' },
  { title: 'AMC & Support', desc: 'Annual maintenance contracts ensure your systems run at peak performance year-round.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              Why VSS Salesco
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-4xl md:text-5xl text-brand-navyD leading-tight mb-6"
            >
              Delhi NCR&apos;s Most Trusted Smart Home Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 leading-relaxed mb-10"
            >
              For over a decade, we&apos;ve been transforming homes and offices across Faridabad, Gurugram, and Delhi NCR. Our obsession with quality and customer satisfaction has made us the region&apos;s go-to choice for smart living solutions.
            </motion.p>

            <div className="space-y-6 mb-12">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFF4FF] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navyD text-base mb-1">{r.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <StatCounter value={500} suffix="+" label="Projects Done" />
              <StatCounter value={12} suffix="+" label="Years Active" />
              <StatCounter value={98} suffix="%" label="Satisfaction" />
            </div>
          </div>

          {/* Right - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-64 rounded-2xl overflow-hidden"
              >
                <Image src={IMAGES.interior1} alt="Smart interior" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden mt-8"
              >
                <Image src={IMAGES.security1} alt="Security system" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-44 rounded-2xl overflow-hidden"
              >
                <Image src={IMAGES.theater1} alt="Home theater" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative h-44 rounded-2xl overflow-hidden -mt-4"
              >
                <Image src={IMAGES.automation1} alt="Automation" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-extrabold text-brand-navyD text-sm">5-Star Rated</div>
                  <div className="text-gray-500 text-xs">by 200+ clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
