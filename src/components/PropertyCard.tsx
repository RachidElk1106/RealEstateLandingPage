import { motion } from 'framer-motion';
import { MapPin, ArrowRight, BedDouble, Bath, Maximize } from 'lucide-react';
import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-charcoal-800">
        <motion.img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
          initial={{ scale: 1.02 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

        {property.tag && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute top-5 left-5 px-3 py-1.5 bg-charcoal-950/60 backdrop-blur-md border border-champagne-500/30"
          >
            <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-300 font-medium">
              {property.tag}
            </span>
          </motion.div>
        )}

        <motion.div
          className="absolute bottom-5 right-5 w-12 h-12 bg-champagne-500 text-charcoal-950 flex items-center justify-center opacity-0 translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
          whileHover={{ scale: 1.05 }}
        >
          <ArrowRight size={18} strokeWidth={2} />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex items-center gap-1.5 text-champagne-300/80 mb-2">
            <MapPin size={13} strokeWidth={1.5} />
            <span className="text-xs tracking-wide">{property.location}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory-50">
            {property.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-end justify-between mb-6 pb-6 border-b border-luxury">
          <div>
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40 block mb-2">
              {property.type}
            </span>
            <span className="font-serif text-2xl text-champagne-200">{property.price}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-xs text-ivory-100/60">
              <span className="flex items-center gap-1.5">
                <BedDouble size={14} strokeWidth={1.5} />
                {property.bedrooms}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={14} strokeWidth={1.5} />
                {property.bathrooms}
              </span>
              <span className="flex items-center gap-1.5">
                <Maximize size={14} strokeWidth={1.5} />
                {property.surfaceArea}{property.surfaceUnit}
              </span>
            </div>
          </div>
        </div>

        <button className="group/btn mt-auto inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase text-ivory-100/70 hover:text-champagne-300 transition-colors duration-300 self-start">
          <span>View Residence</span>
          <ArrowRight size={14} className="transition-transform duration-500 group-hover/btn:translate-x-1" strokeWidth={1.5} />
        </button>
      </div>
    </motion.article>
  );
}
