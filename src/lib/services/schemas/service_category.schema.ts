//
import { z } from "zod";

export const ServiceCategory = z.object({
  id: z.number(),
  name: z.string(),
});
export type ServiceCategory = z.infer<typeof ServiceCategory>;
