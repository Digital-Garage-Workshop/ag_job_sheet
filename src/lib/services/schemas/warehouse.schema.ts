//
import { z } from "zod";

export const Warehouse = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  phone: z.string(),
});
export type Warehouse = z.infer<typeof Warehouse>;
