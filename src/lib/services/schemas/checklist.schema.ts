//
import { z } from "zod";

export const Checklist = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
});
export type Checklist = z.infer<typeof Checklist>;
