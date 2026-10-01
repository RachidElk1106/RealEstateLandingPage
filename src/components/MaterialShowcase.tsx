import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { materials } from '../data/properties';

export default function MaterialShowcase() {
  return (
    <section className="section-padding relative bg-charcoal-950">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-400/70">
                06 — Materials
              </span>
              <div className="w-12 h-px bg-champagne-500/30" />
            </div>
            <h2 className="font-serif font-light text-h2 text-ivory-50 mb-6">
              Details That
              <span className="italic text-champagne-200/90"> Endure.</span>
            </h2>
            <p className="text-base text-ivory-100/55 leading-relaxed max-w-xl font-light">
              Each material is selected for its integrity, beauty and capacity to age with grace —
              assembled by craftsmen whose techniques have been refined across generations.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ivory-200/10 border border-ivory-200/10">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-charcoal-950 overflow-hidden aspect-square hover:aspect-[4/5] transition-all duration-700 ease-out"
            >
              <div className="absolute inset-0">
                <img
                  src={material.image}
                  alt={material.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/20 group-hover:via-charcoal-950/60 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
                <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-400/60 mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-light text-ivory-50 mb-2">
                  {material.name}
                </h3>
                <p className="text-xs md:text-sm text-ivory-100/50 leading-relaxed font-light max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-out">
                  {material.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-300/80">
                    Explore
                  </span>
                  <ArrowRight size={12} className="text-champagne-300/80" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
