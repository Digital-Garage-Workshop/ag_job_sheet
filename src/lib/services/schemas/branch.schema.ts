//
import { z } from "zod";

export const Branch = z.object({
  address: z.string(),
  id: z.number(),
  name: z.string(),
  phone: z.string().email(),
});
export type Branch = z.infer<typeof Branch>;
