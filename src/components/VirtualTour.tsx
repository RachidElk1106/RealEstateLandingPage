import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, RotateCw, Eye, Scan } from 'lucide-react';
import ArchitecturalScene from './ArchitecturalScene';


const tourExteriorDay = '/public/images/exterior_day.png';
const tourExteriorNight = '/public/images/exterior_night.jpg';
const tourInteriorDay = '/public/images/interior_day.jpg';
const tourInteriorNight = '/public/images/interior_night.jpg';

type ViewMode = 'exterior' | 'interior';
type TimeMode = 'day' | 'night';

export default function VirtualTour() {
  const [viewMode, setViewMode] = useState<ViewMode>('exterior');
  const [timeMode, setTimeMode] = useState<TimeMode>('day');

  
  const getCurrentImage = () => {
    if (viewMode === 'exterior') {
      return timeMode === 'day' ? tourExteriorDay : tourExteriorNight;
    } else {
      return timeMode === 'day' ? tourInteriorDay : tourInteriorNight;
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal-950 overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-400/70">
                05 — Virtual Experience
              </span>
              <div className="w-12 h-px bg-champagne-500/30" />
            </div>
            <h2 className="font-serif font-light text-h2 text-ivory-50">
              Explore Every
              <span className="italic text-champagne-200/90"> Dimension.</span>
            </h2>
          </div>
          <p className="text-base text-ivory-100/55 leading-relaxed max-w-md font-light">
            Immerse yourself in our residences through interactive 3D tours and cinematic
            visualizations — available from anywhere in the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-10 md:mb-14 border border-ivory-200/10"
        >
         <div className="absolute inset-0 hidden md:block w-full h-full">
            <ArchitecturalScene viewMode={viewMode} timeMode={timeMode} />
          </div>

        
          <div className="absolute inset-0 md:hidden w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${timeMode}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={getCurrentImage()}
                  alt="Virtual tour view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent pointer-events-none" />

          <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/70">
              Live Preview — Villa Aurelia
            </span>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-md z-10">
            <span className="text-[10px] tracking-ultra-wide uppercase text-champagne-400/80 block mb-3">
              {viewMode === 'exterior' ? 'Exterior View' : 'Interior View'} · {timeMode === 'day' ? 'Daylight' : 'Twilight'}
            </span>
            <h3 className="font-serif text-2xl md:text-4xl font-light text-ivory-50 mb-3">
              {viewMode === 'exterior'
                ? timeMode === 'day'
                  ? 'Southern Façade & Infinity Pool'
                  : 'Evening Terraces'
                : 'Double-Height Reception Hall'}
            </h3>
            <p className="text-sm md:text-base text-ivory-100/60 font-light hidden md:block">
              {viewMode === 'exterior'
                ? timeMode === 'day'
                  ? 'Floor-to-ceiling glazing opens onto a 25-meter infinity pool overlooking the Mediterranean.'
                  : 'Ambient architectural lighting transforms the exterior as the sun sets over the coast.'
                : 'Hand-laid oak floors and Venetian plaster define this voluminous reception space.'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">View</span>
            <div className="flex gap-2 p-1 bg-charcoal-900/60 border border-ivory-200/10 w-fit">
              <button
                onClick={() => setViewMode('exterior')}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs tracking-wide-alt uppercase transition-all duration-300 ${
                  viewMode === 'exterior'
                    ? 'bg-champagne-500 text-charcoal-950'
                    : 'text-ivory-100/60 hover:text-ivory-50'
                }`}
              >
                <Eye size={14} strokeWidth={1.5} />
                Exterior
              </button>
              <button
                onClick={() => setViewMode('interior')}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs tracking-wide-alt uppercase transition-all duration-300 ${
                  viewMode === 'interior'
                    ? 'bg-champagne-500 text-charcoal-950'
                    : 'text-ivory-100/60 hover:text-ivory-50'
                }`}
              >
                <Scan size={14} strokeWidth={1.5} />
                Interior
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">Time</span>
            <div className="flex gap-2 p-1 bg-charcoal-900/60 border border-ivory-200/10 w-fit">
              <button
                onClick={() => setTimeMode('day')}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs tracking-wide-alt uppercase transition-all duration-300 ${
                  timeMode === 'day'
                    ? 'bg-champagne-500 text-charcoal-950'
                    : 'text-ivory-100/60 hover:text-ivory-50'
                }`}
              >
                <Sun size={14} strokeWidth={1.5} />
                Day
              </button>
              <button
                onClick={() => setTimeMode('night')}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs tracking-wide-alt uppercase transition-all duration-300 ${
                  timeMode === 'night'
                    ? 'bg-champagne-500 text-charcoal-950'
                    : 'text-ivory-100/60 hover:text-ivory-50'
                }`}
              >
                <Moon size={14} strokeWidth={1.5} />
                Night
              </button>
            </div>
          </div>

          <div className="hidden md:flex ml-auto items-center gap-2 px-5 py-3 border border-ivory-200/10 text-ivory-100/60 hover:border-champagne-500/40 hover:text-champagne-200 transition-all duration-300 cursor-pointer group">
            <RotateCw size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-xs tracking-wide-alt uppercase">360° Rotate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}