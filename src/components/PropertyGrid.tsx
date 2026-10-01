import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

export default function PropertyGrid() {
  return (
    <section id="properties" className="section-padding relative bg-charcoal-950">
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
                02 — Collection
              </span>
              <div className="w-12 h-px bg-champagne-500/30" />
            </div>
            <h2 className="font-serif font-light text-h2 text-ivory-50 mb-6">
              Exceptional
              <span className="italic text-champagne-200/90"> Residences</span>
            </h2>
            <p className="text-base text-ivory-100/55 leading-relaxed max-w-xl">
              A private collection of architectural residences defined by location, craftsmanship and uncompromising attention to detail.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-xs tracking-ultra-wide uppercase text-ivory-100/40">
              {properties.length} Residences
            </span>
            <div className="h-px w-16 bg-ivory-200/10" />
            <span className="text-xs tracking-ultra-wide uppercase text-ivory-100/40">
              {properties.length} Global
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24 lg:gap-x-12">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
