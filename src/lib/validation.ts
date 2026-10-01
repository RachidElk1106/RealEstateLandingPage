import { z } from 'zod';

export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name' })
    .max(100, { message: 'Name is too long' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .min(6, { message: 'Please enter a valid phone number' })
    .regex(/^[+\d\s()-]+$/, { message: 'Please enter a valid phone format' }),
  preferredDate: z
    .string()
    .min(1, { message: 'Please select a preferred date' })
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, { message: 'Please select a future date' }),
  preferredProperty: z
    .string()
    .min(1, { message: 'Please select a property' }),
  message: z
    .string()
    .max(500, { message: 'Message is too long (max 500 characters)' })
    .optional(),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;
