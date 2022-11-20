//
import { z } from "zod";

export const Employee = z.object({
  id: z.number(),
  name: z.string(),
  utype: z.enum(["mechanic"]),
});
export type Employee = z.infer<typeof Employee>;
