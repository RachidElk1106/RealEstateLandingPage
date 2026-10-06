import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const contactBg =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80';

interface ContactSectionProps {
  onBookTour: () => void;
}

export default function ContactSection({ onBookTour }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 lg:py-44 overflow-hidden bg-charcoal-950"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={contactBg}
          alt="Private Residence Contact"
          className="w-full h-full object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/90" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7 min-w-0"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <div className="w-12 h-px bg-champagne-500/40" />

              <span className="eyebrow">
                07 — Private Client
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-serif
                font-light
                text-4xl
                xl:text-5xl
                2xl:text-h1
                text-ivory-50
                mb-8
                text-balance
                leading-[1.05]
              "
            >
              Your Next Residence
              <br />

              <span className="italic text-champagne-200/90">
                Should Be Extraordinary.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                text-base
                md:text-lg
                text-ivory-100/60
                leading-relaxed
                max-w-xl
                mb-10
                font-light
              "
            >
              Speak with a private property advisor and discover residences
              selected exclusively for you — including off-market
              opportunities available only through our private network.
            </p>

            {/* CTA */}
            <div className="flex flex-col xl:flex-row gap-4">
              <button
                onClick={onBookTour}
                className="btn-primary group"
              >
                <span>Request a Private Consultation</span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>

              <a
                href="mailto:private@maison-estates.com"
                className="btn-secondary"
              >
                <Mail size={14} />

                <span>Email Private Office</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 min-w-0"
          >
            <div
              className="
                border
                border-ivory-200/10
                bg-charcoal-950/60
                backdrop-blur-luxury
                p-8
                md:p-10
                shadow-2xl
              "
            >
              <span
                className="
                  text-[10px]
                  tracking-ultra-wide
                  uppercase
                  text-champagne-400/80
                  block
                  mb-8
                "
              >
                Global Private Office
              </span>

              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-10
                      h-10
                      border
                      border-champagne-500/30
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-champagne-400
                      mt-0.5
                    "
                  >
                    <Mail size={16} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0">
                    <span
                      className="
                        text-[10px]
                        tracking-ultra-wide
                        uppercase
                        text-ivory-100/40
                        block
                        mb-1.5
                      "
                    >
                      Email
                    </span>

                    <a
                      href="mailto:private@maison-estates.com"
                      className="
                        text-ivory-50
                        hover:text-champagne-200
                        transition-colors
                        duration-300
                        text-sm
                        break-words
                      "
                    >
                      private@maison-estates.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-10
                      h-10
                      border
                      border-champagne-500/30
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-champagne-400
                      mt-0.5
                    "
                  >
                    <Phone size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span
                      className="
                        text-[10px]
                        tracking-ultra-wide
                        uppercase
                        text-ivory-100/40
                        block
                        mb-1.5
                      "
                    >
                      Private Line · 24/7
                    </span>

                    <a
                      href="tel:+34900123456"
                      className="
                        text-ivory-50
                        hover:text-champagne-200
                        transition-colors
                        duration-300
                        text-sm
                      "
                    >
                      +34 900 123 456
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-10
                      h-10
                      border
                      border-champagne-500/30
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-champagne-400
                      mt-0.5
                    "
                  >
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span
                      className="
                        text-[10px]
                        tracking-ultra-wide
                        uppercase
                        text-ivory-100/40
                        block
                        mb-1.5
                      "
                    >
                      Global Locations
                    </span>

                    <p
                      className="
                        text-ivory-50/80
                        text-sm
                        leading-relaxed
                      "
                    >
                      Marbella · Malibu · Dubai · Mykonos
                      <br />
                      Monaco · London · Capri · St Barts
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}