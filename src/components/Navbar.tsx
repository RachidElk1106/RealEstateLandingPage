import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/properties';

interface NavbarProps {
  onBookTour: () => void;
}

export default function Navbar({ onBookTour }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'glass-luxury border-b border-ivory-200/5 py-4 md:py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 border border-champagne-400/60 flex items-center justify-center"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-champagne-400 text-xs font-serif font-light tracking-wider">M</span>
            </motion.div>
            <span className="font-serif text-xl tracking-wide text-ivory-50 font-light">
              MAISON
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-sm tracking-wide-alt text-ivory-100/70 hover:text-ivory-50 transition-colors duration-300 uppercase group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne-400 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={onBookTour}
              className="group relative px-7 py-3 border border-champagne-400/40 text-champagne-300 text-xs tracking-ultra-wide uppercase overflow-hidden transition-colors duration-500 hover:text-charcoal-950"
            >
              <span className="relative z-10">Book a Private Tour</span>
              <span className="absolute inset-0 bg-champagne-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </motion.button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-ivory-50"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-charcoal-950"
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6">
              <a href="#top" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 border border-champagne-400/60 flex items-center justify-center">
                  <span className="text-champagne-400 text-xs font-serif font-light tracking-wider">M</span>
                </div>
                <span className="font-serif text-xl tracking-wide text-ivory-50 font-light">MAISON</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-ivory-50"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col justify-center h-full px-6">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-serif text-3xl md:text-4xl text-ivory-50 font-light tracking-wide"
                  >
                    <span className="text-champagne-400/60 text-sm tracking-ultra-wide mr-4 font-sans">
                      0{index + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookTour();
                }}
                className="mt-12 w-full py-4 bg-champagne-500 text-charcoal-950 text-xs tracking-ultra-wide uppercase font-medium"
              >
                Book a Private Tour
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
