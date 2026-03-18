'use client';
import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  light?: boolean;
}

export default function StatCounter({ value, suffix = '', prefix = '', label, light = false }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-display text-4xl md:text-5xl font-semibold ${light ? 'text-white' : 'text-brand-navy'}`}>
        {prefix}{count}{suffix}
      </div>
      <p className={`text-sm mt-1 ${light ? 'text-white/60' : 'text-gray-500'}`}>{label}</p>
    </div>
  );
}
