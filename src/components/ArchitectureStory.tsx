import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const architectureHero = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20interior%20luxury%20double%20height%20space%20natural%20light%20streaming%20through%20windows%20minimal%20modern%20design%20warm%20tones%20editorial%20photography&image_size=landscape_16_9';
const architectureSecondary = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20architecture%20detail%20staircase%20modern%20minimal%20design%20dramatic%20shadows%20natural%20light%20concrete%20and%20wood%20editorial&image_size=portrait_4_3';
const architectureTertiary = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=exterior%20architectural%20detail%20modern%20villa%20concrete%20glass%20water%20reflection%20pool%20minimal%20geometric%20design%20dramatic%20lighting&image_size=square_hd';

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <span className="eyebrow mb-6 block">
              Craftsmanship
            </span>
            <h3 className="font-serif font-light text-h3 text-ivory-50 mb-8">
              Materials that develop
              <br />
              <span className="italic text-champagne-200/90">character with time.</span>
            </h3>
            <div className="space-y-6 text-ivory-100/60 leading-relaxed font-light">
              <p>
                We select materials not for their perfection, but for their capacity to age gracefully —
                natural stone that patinas, woods that deepen in tone, metals that soften with use.
              </p>
              <p>
                Each residence integrates seamlessly with its landscape through considered orientation,
                framed views, and indoor-outdoor transitions that dissolve the boundary between shelter and nature.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-luxury grid grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-3xl text-champagne-200 mb-2">12+</span>
                <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">
                  Stone Sources
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-champagne-200 mb-2">360°</span>
                <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">
                  Sun Orientation
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-champagne-200 mb-2">∞</span>
                <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40">
                  Attention to Detail
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 aspect-[5/4] md:aspect-[16/10] overflow-hidden relative group"
          >
            <img
              src={architectureTertiary}
              alt="Architectural exterior with water reflection"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
