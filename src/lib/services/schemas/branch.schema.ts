//
import { z } from "zod";

export const Branch = z.object({
  id: z.number(),
  name: z.string(),
});
export type Branch = z.infer<typeof Branch>;
