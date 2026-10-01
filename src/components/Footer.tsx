import { motion } from 'framer-motion';
import { Camera, Briefcase, Image as ImageIcon } from 'lucide-react';
import { navLinks } from '../data/properties';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-ivory-200/5">
      <div className="container-luxury py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#top" className="flex items-center gap-2 mb-6 group">
              <motion.div
                className="w-9 h-9 border border-champagne-400/60 flex items-center justify-center"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-champagne-400 text-sm font-serif font-light tracking-wider">M</span>
              </motion.div>
              <span className="font-serif text-2xl tracking-wide text-ivory-50 font-light">MAISON</span>
            </a>
            <p className="text-sm text-ivory-100/50 leading-relaxed max-w-sm font-light mb-8">
              A private collection of architectural residences for those who seek the extraordinary —
              where every detail is considered, and nothing is ordinary.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Camera, href: '#', label: 'Instagram' },
                { icon: Briefcase, href: '#', label: 'LinkedIn' },
                { icon: ImageIcon, href: '#', label: 'Pinterest' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 border border-ivory-200/10 flex items-center justify-center text-ivory-100/50 hover:border-champagne-500/40 hover:text-champagne-300 transition-all duration-300"
                >
                  <social.icon size={16} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40 block mb-6">
              Navigation
            </span>
            <nav className="space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-ivory-50/70 hover:text-champagne-200 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <span className="text-[10px] tracking-ultra-wide uppercase text-ivory-100/40 block mb-6">
              Private Office
            </span>
            <div className="space-y-3.5 text-sm">
              <p className="text-ivory-50/70">
                Marbella · Malibu · Dubai
              </p>
              <p className="text-ivory-50/70">
                <a href="mailto:private@maison-estates.com" className="hover:text-champagne-200 transition-colors duration-300">
                  private@maison-estates.com
                </a>
              </p>
              <p className="text-ivory-50/70">
                <a href="tel:+34900123456" className="hover:text-champagne-200 transition-colors duration-300">
                  +34 900 123 456
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-ivory-200/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-ivory-100/35 tracking-wide font-light">
            © {currentYear} Maison Private Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-xs text-ivory-100/35 hover:text-ivory-100/60 transition-colors duration-300 tracking-wide"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-ivory-100/35 hover:text-ivory-100/60 transition-colors duration-300 tracking-wide"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
