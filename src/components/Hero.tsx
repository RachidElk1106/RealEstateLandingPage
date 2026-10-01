import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { ArchitecturalScene } from './ArchitecturalScene';

interface HeroProps {
  onBookTour: () => void;
}

export default function Hero({ onBookTour }: HeroProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-charcoal-950">
      {/* مشهد الـ 3D المحلي باستخدام React Three Fiber (R3F) لضمان الأداء وثبات العرض */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <ArchitecturalScene />
      </motion.div>

      {/* طبقات التدرج الداكنة لزيادة وضوح النصوص وإبراز الفخامة */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/30 to-charcoal-950 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/20 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 container-luxury min-h-screen flex flex-col justify-center pb-20 pt-32 md:pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12 flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-champagne-500/60 to-transparent" />
            <span className="eyebrow">Private Collection · 2026</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-light text-display text-ivory-50 mb-8 md:mb-10 text-balance leading-[0.95]"
          >
            Architecture Beyond
            <br />
            <span className="italic text-champagne-200/90">The Ordinary.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-ivory-100/60 max-w-lg leading-relaxed mb-10 md:mb-14 font-light"
          >
            Discover a curated collection of exceptional residences designed for those who expect nothing less than extraordinary.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8"
          >
            <a
              href="#properties"
              className="btn-primary group"
            >
              <span>Explore Luxury Villas</span>
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <button
              onClick={onBookTour}
              className="btn-secondary group"
            >
              <Play size={14} className="transition-transform duration-500 group-hover:scale-110" />
              <span>Book Virtual Tour</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="top- absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-champagne-400/60 to-transparent"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-6 items-end z-10"
      >
        <div className="flex flex-col gap-2 items-end">
          <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-400/80">
            Marbella · Spain
          </span>
          <span className="text-xs text-ivory-100/50">Featured Residence</span>
        </div>
        <div className="w-24 h-px bg-champagne-500/30" />
        <div className="flex flex-col gap-1 items-end">
          <span className="font-serif text-3xl text-champagne-200">€8.9M</span>
          <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">
            Villa Aurelia
          </span>
        </div>
      </motion.div>
    </section>
  );
}