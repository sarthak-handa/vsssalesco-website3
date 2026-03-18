'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/lib/utils';

const projects = [
  {
    title: 'Villa Automation — Sector 46, Faridabad',
    category: 'Home Automation + Security',
    desc: 'Complete smart home integration with 40+ smart switches, CCTV, video door phone and automated gate.',
    img: IMAGES.villa1,
    tag: 'Villa',
    color: 'var(--navy)',
  },
  {
    title: 'Private Cinema Room — South Delhi',
    category: 'Home Theater',
    desc: '4K Dolby Atmos 9.2.4 setup with acoustic treatment, motorized screen and lighting control.',
    img: IMAGES.theater2,
    tag: 'Theater',
    color: '#C0392B',
  },
  {
    title: 'Corporate Office Security — Gurugram',
    category: 'CCTV + Access Control',
    desc: '32-camera HD surveillance system with biometric access control and EPABX integration.',
    img: IMAGES.office1,
    tag: 'Office',
    color: 'var(--navy)',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-brand-navyD relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
              style={{ color: '#f87171' }}
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight"
            >
              Featured Projects
            </motion.h2>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-display text-sm font-semibold"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-display font-semibold rounded-full border border-white/20">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-xs font-display tracking-wide mb-2 uppercase">{p.category}</p>
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-2 group-hover:text-red-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
