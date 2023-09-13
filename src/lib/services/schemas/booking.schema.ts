//
import { z } from "zod";

export const Booking = z.object({
  id: z.number(),
  category: z.object({
    name: z.string(),
  }),
  subcategory: z
    .object({
      name: z.string(),
    })
    .nullable(),
  starttime: z.string().nullable(),
  endtime: z.string().nullable(),
  servicebill: z.string(),
  mechanic: z.object({
    name: z.string(),
  }),
  createuser: z.object({
    name: z.string(),
  }),
  booking_date: z.string().nullable(),
  bookingtime: z.string().nullable(),
  parts: z
    .object({
      brandname: z.string(),
      category: z.string(),
      articleno: z.string(),
      quantity: z.number(),
      price: z.string(),
      total: z.string(),
    })
    .array(),
  note: z.string().nullable(),
  changepart: z.string().nullable(),
});
export type Booking = z.infer<typeof Booking>;
