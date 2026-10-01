import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import ArchitectureStory from './components/ArchitectureStory';
import Experience from './components/Experience';
import VirtualTour from './components/VirtualTour';
import MaterialShowcase from './components/MaterialShowcase';
import Stats from './components/Stats';
import BookingModal from './components/BookingModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = shouldReduceMotion ? 'auto' : 'smooth';
  }, [shouldReduceMotion]);

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-ivory-50 overflow-x-hidden">
      {!shouldReduceMotion && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-champagne-500 via-champagne-300 to-champagne-500 origin-left z-[200] pointer-events-none"
        />
      )}

      <Navbar onBookTour={() => setBookingModalOpen(true)} />

      <main>
        <Hero onBookTour={() => setBookingModalOpen(true)} />
        <PropertyGrid />
        <ArchitectureStory />
        <Stats />
        <Experience />
        <VirtualTour />
        <MaterialShowcase />
        <ContactSection onBookTour={() => setBookingModalOpen(true)} />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
