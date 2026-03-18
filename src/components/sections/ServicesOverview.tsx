'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    label: 'Automation',
    title: 'Home Automation',
    desc: 'Control lighting, climate, curtains and more with a single touch or voice command.',
    href: '/automation',
    color: 'var(--navy)',
    bg: '#EFF4FF',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    label: 'Security',
    title: 'Security Systems',
    desc: 'CCTV, smart locks, video door phones and comprehensive alarm systems.',
    href: '/security',
    color: '#C0392B',
    bg: '#FEF2F2',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125L3 9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v8.625m-3.75.125v-2.25a1.5 1.5 0 00-1.5-1.5H8.25a1.5 1.5 0 00-1.5 1.5v2.25" />
      </svg>
    ),
    label: 'Entertainment',
    title: 'Home Theater',
    desc: 'Dolby Atmos setups, projector systems and acoustic-treated cinema rooms.',
    href: '/theater',
    color: 'var(--navy)',
    bg: '#EFF4FF',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: 'Communication',
    title: 'EPABX Systems',
    desc: 'Professional office communication and intercommunication solutions.',
    href: '/automation#epabx',
    color: '#C0392B',
    bg: '#FEF2F2',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
    label: 'Perimeter',
    title: 'Gate Automation',
    desc: 'Automated gates, barriers and access control for homes and offices.',
    href: '/automation#gate',
    color: 'var(--navy)',
    bg: '#EFF4FF',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Video Entry',
    title: 'Video Door Phones',
    desc: 'See and speak to visitors remotely with smart video intercom systems.',
    href: '/security#vdp',
    color: '#C0392B',
    bg: '#FEF2F2',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="What We Do"
          title="Complete Smart Home Solutions"
          subtitle="From intelligent automation to robust security — we design, install, and support every system your property needs."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-400 group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ background: s.bg, color: s.color }}>
                    {s.icon}
                  </div>
                  <p className="section-label mb-2">{s.label}</p>
                  <h3 className="font-display font-bold text-xl text-brand-navyD mb-3 group-hover:text-brand-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-display font-semibold text-brand-navyD group-hover:text-brand-red transition-colors">
                    Explore
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
