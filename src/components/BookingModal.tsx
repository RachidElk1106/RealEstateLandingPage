import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Check, Calendar, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { bookingFormSchema, type BookingFormSchema } from '../lib/validation';
import { properties } from '../data/properties';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredProperty: '',
      message: '',
    },
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => reset(), 300);
    }
  }, [isOpen, reset]);

  const onSubmit = async (_data: BookingFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-auto
              relative
              w-full
              max-w-[640px]
              max-h-[90vh]
              overflow-y-auto
              bg-charcoal-900
              border
              border-ivory-200/10
              shadow-2xl
            "
          >
            <button
              onClick={onClose}
              aria-label="Close booking form"
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-ivory-100/70 hover:text-ivory-50 transition-colors duration-300 hover:bg-ivory-200/5"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {isSubmitSuccessful ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center text-center py-12 md:py-16"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="w-20 h-20 border border-champagne-500/50 flex items-center justify-center mb-8"
                    >
                      <Check size={32} className="text-champagne-400" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="font-serif font-light text-2xl md:text-3xl text-ivory-50 mb-4">
                      Your private tour request
                      <br />
                      <span className="italic text-champagne-200/90">has been received.</span>
                    </h3>
                    <p className="text-sm md:text-base text-ivory-100/55 leading-relaxed max-w-sm mb-10 font-light">
                      One of our advisors will contact you shortly to confirm the details of your private viewing.
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-primary"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8 md:mb-10">
                      <span className="eyebrow mb-4 block">Private Tour · Inquiry</span>
                      <h2 id="booking-title" className="font-serif font-light text-2xl md:text-3xl text-ivory-50 mb-4">
                        Book a
                        <span className="italic text-champagne-200/90"> Private Tour</span>
                      </h2>
                      <p className="text-sm text-ivory-100/55 leading-relaxed font-light">
                        Complete the form below and a dedicated property advisor will be in touch within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div>
                        <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                          <User size={12} strokeWidth={1.5} />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          className={`w-full px-4 py-3 bg-charcoal-950 border text-ivory-50 text-sm placeholder-ivory-100/30 focus:outline-none transition-all duration-300 ${
                            errors.fullName
                              ? 'border-red-500/50 focus:border-red-500'
                              : 'border-ivory-200/10 focus:border-champagne-500/60'
                          }`}
                          placeholder="John Smith"
                        />
                        {errors.fullName && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400/80 mt-1.5"
                          >
                            {errors.fullName.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                            <Mail size={12} strokeWidth={1.5} />
                            Email *
                          </label>
                          <input
                            type="email"
                            {...register('email')}
                            className={`w-full px-4 py-3 bg-charcoal-950 border text-ivory-50 text-sm placeholder-ivory-100/30 focus:outline-none transition-all duration-300 ${
                              errors.email
                                ? 'border-red-500/50 focus:border-red-500'
                                : 'border-ivory-200/10 focus:border-champagne-500/60'
                            }`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400/80 mt-1.5"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                            <Phone size={12} strokeWidth={1.5} />
                            Phone *
                          </label>
                          <input
                            type="tel"
                            {...register('phone')}
                            className={`w-full px-4 py-3 bg-charcoal-950 border text-ivory-50 text-sm placeholder-ivory-100/30 focus:outline-none transition-all duration-300 ${
                              errors.phone
                                ? 'border-red-500/50 focus:border-red-500'
                                : 'border-ivory-200/10 focus:border-champagne-500/60'
                            }`}
                            placeholder="+1 555 000 0000"
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400/80 mt-1.5"
                            >
                              {errors.phone.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                            <Calendar size={12} strokeWidth={1.5} />
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            min={today}
                            {...register('preferredDate')}
                            className={`w-full px-4 py-3 bg-charcoal-950 border text-ivory-50 text-sm placeholder-ivory-100/30 focus:outline-none transition-all duration-300 [color-scheme:dark] ${
                              errors.preferredDate
                                ? 'border-red-500/50 focus:border-red-500'
                                : 'border-ivory-200/10 focus:border-champagne-500/60'
                            }`}
                          />
                          {errors.preferredDate && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400/80 mt-1.5"
                            >
                              {errors.preferredDate.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                            <Building2 size={12} strokeWidth={1.5} />
                            Property *
                          </label>
                          <select
                            {...register('preferredProperty')}
                            className={`w-full px-4 py-3 bg-charcoal-950 border text-ivory-50 text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                              errors.preferredProperty
                                ? 'border-red-500/50 focus:border-red-500'
                                : 'border-ivory-200/10 focus:border-champagne-500/60'
                            }`}
                          >
                            <option value="" className="bg-charcoal-900">
                              Select a residence
                            </option>
                            {properties.map((p) => (
                              <option key={p.id} value={p.id} className="bg-charcoal-900">
                                {p.name} — {p.location}
                              </option>
                            ))}
                          </select>
                          {errors.preferredProperty && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400/80 mt-1.5"
                            >
                              {errors.preferredProperty.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase text-ivory-100/50 mb-2.5">
                          <MessageSquare size={12} strokeWidth={1.5} />
                          Message (Optional)
                        </label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          className="w-full px-4 py-3 bg-charcoal-950 border border-ivory-200/10 text-ivory-50 text-sm placeholder-ivory-100/30 focus:outline-none focus:border-champagne-500/60 transition-all duration-300 resize-none"
                          placeholder="Tell us about your requirements and any specific questions you may have."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400/80 mt-1.5"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-25" />
                                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Request Private Tour
                              <span className="absolute inset-0 bg-champagne-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-ivory-100/35 text-center pt-2 font-light">
                        By submitting, you agree to be contacted by our private client services team.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}