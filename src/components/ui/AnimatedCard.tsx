'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface AnimatedCardProps {
  image: string;
  label?: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
  icon?: React.ReactNode;
}

export default function AnimatedCard({ image, label, title, description, href, index = 0, icon }: AnimatedCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {icon && (
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-brand-red">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6">
        {label && <p className="section-label mb-2">{label}</p>}
        <h3 className="font-display font-bold text-lg text-brand-navyD mb-2 group-hover:text-brand-red transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        {href && (
          <div className="mt-4 flex items-center gap-1 text-brand-navyD text-sm font-display font-semibold group-hover:text-brand-red transition-colors">
            Learn more
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
