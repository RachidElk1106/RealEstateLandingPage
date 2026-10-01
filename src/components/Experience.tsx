import { motion } from 'framer-motion';
import { Home, Compass, Building2, Sparkles } from 'lucide-react';
import { features } from '../data/properties';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Compass,
  Building2,
  Sparkles,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-charcoal-900/40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-champagne-500/[0.02] blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-champagne-500/30" />
            <span className="eyebrow">04 — Experience</span>
            <div className="w-12 h-px bg-champagne-500/30" />
          </div>
          <h2 className="font-serif font-light text-h2 text-ivory-50 mb-6">
            Beyond the
            <span className="italic text-champagne-200/90"> Property.</span>
          </h2>
          <p className="text-base text-ivory-100/55 leading-relaxed max-w-xl mx-auto font-light">
            An elevated experience that begins the moment you inquire — extending far beyond the keys,
            into a lifetime of considered living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ivory-200/10 border border-ivory-200/10">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Home;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-charcoal-950 p-8 md:p-12 lg:p-14 transition-all duration-700 ease-out hover:bg-charcoal-900/80 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-500/0 to-transparent group-hover:via-champagne-500/40 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-champagne-500/40 group-hover:w-full transition-all duration-700 ease-out" />

                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-10">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-14 h-14 border border-champagne-500/30 flex items-center justify-center text-champagne-400 group-hover:border-champagne-500/60 group-hover:bg-champagne-500/5 transition-all duration-500"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>
                    <span className="font-serif text-5xl text-ivory-200/5 group-hover:text-champagne-500/10 transition-colors duration-700">
                      {feature.label}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory-50 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-ivory-100/55 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
