//
import { z } from "zod";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  regnumber: z.string(),
  address: z.string(),
  logo: z.string().url(),
  bank: z.string().optional(),
  account: z.number().optional(),
  currency: z.string().optional(),
});
export type Organization = z.infer<typeof Organization>;
