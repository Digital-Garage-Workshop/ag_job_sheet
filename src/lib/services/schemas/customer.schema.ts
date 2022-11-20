//
import { z } from "zod";

export const Customer = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
});
export type Customer = z.infer<typeof Customer>;
