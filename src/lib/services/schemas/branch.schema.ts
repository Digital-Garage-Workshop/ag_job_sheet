//
import { z } from "zod";

export const Branch = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  phone: z.string().email(),
});
export type Branch = z.infer<typeof Branch>;
