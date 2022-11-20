//
import { z } from "zod";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  logo: z.string().url(),
});
export type Organization = z.infer<typeof Organization>;
