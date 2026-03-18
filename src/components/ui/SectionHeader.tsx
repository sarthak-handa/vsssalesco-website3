'use client';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3"
          style={{ color: light ? '#f87171' : undefined }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${light ? 'text-white' : 'text-brand-navyD'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${light ? 'text-white/60' : 'text-gray-500'} ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`divider mt-5 origin-left ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
