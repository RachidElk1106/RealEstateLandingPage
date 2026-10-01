import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '../data/properties';

interface AnimatedStatProps {
  value: string;
  label: string;
  index: number;
}

function AnimatedStat({ value, label, index }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9]/g, '');
    const nonNumericPart = value.replace(/[0-9]/g, '');

    if (numericPart === '') {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericPart, 10);
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplayValue(`${current}${nonNumericPart}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center p-8 md:p-10 group"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne-500/40 group-hover:w-16 transition-all duration-700 ease-out" />
      <span className="font-serif text-display text-ivory-50 font-light mb-4 md:mb-5 leading-none tracking-tight">
        {displayValue || value}
      </span>
      <span className="text-[10px] md:text-xs tracking-ultra-wide uppercase text-ivory-100/45">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-charcoal-900/30 border-y border-ivory-200/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-ivory-200/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-ivory-200/5 to-transparent" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory-200/5">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.id}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
