import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const architectureHero = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
const architectureSecondary = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80';

export default function ArchitectureStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], ['5%', '-10%']);

  return (
    <section id="architecture" ref={containerRef} className="relative bg-charcoal-950 overflow-hidden">
      <div className="container-luxury py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-champagne-500/30" />
            <span className="eyebrow">03 — Philosophy</span>
            <div className="w-12 h-px bg-champagne-500/30" />
          </div>
          <h2 className="font-serif font-light text-h1 text-ivory-50 mb-8 text-balance">
            Designed Around
            <span className="italic text-champagne-200/90"> Light.</span>
          </h2>
          <p className="text-base md:text-lg text-ivory-100/55 leading-relaxed font-light">
            Every residence is conceived as a dialogue between architecture and its environment —
            where natural light becomes material, and space is shaped by the movement of the sun.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden relative"
          >
            <img
              src={architectureHero}
              alt="Architectural interior with natural light"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: secondaryY }}
            className="col-span-12 md:col-span-4 md:mt-16 aspect-[3/4] overflow-hidden relative"
          >
            <img
              src={architectureSecondary}
              alt="Architectural staircase detail"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
          </motion.div>
        </div>

       <div className="py-24 md:py-36 lg:py-44 bg-charcoal-950 text-ivory-50 overflow-hidden">
      <div className="container-luxury mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-champagne-500/40" />
              <span className="eyebrow text-champagne-400">Craftsmanship</span>
            </div>

            <h2 className="font-serif font-light text-3xl md:text-5xl text-ivory-50 leading-[1.1] text-balance">
              Materials that develop <br />
              <span className="italic text-champagne-200/90">character with time.</span>
            </h2>

            <p className="text-base md:text-lg text-ivory-100/60 leading-relaxed font-light">
              We select materials not for their perfection, but for their capacity to age gracefully — natural stone that patinas, woods that deepen in tone, metals that soften with use.
            </p>

            <p className="text-base md:text-lg text-ivory-100/60 leading-relaxed font-light">
              Each residence integrates seamlessly with its landscape through considered orientation, framed views, and indoor-outdoor transitions that dissolve the boundary between shelter and nature.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-ivory-200/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural Craftsmanship and Materials"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}