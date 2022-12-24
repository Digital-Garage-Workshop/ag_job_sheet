//
import { z } from "zod";

//
import { iso8601Schema } from "lib/utils";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  logo: z.string().url(),
  desc: z.string(),
  longitude: z.string().nullable(),
  latitude: z.string().nullable(),
  empnumber: z.number().nullable(),
  branchnum: z.number().nullable(),
  allhistory: z.string().nullable(),
  direction_id: z.number(),
  paymenttype_id: z.number(),
  bankacnt: z.string(),
  facebook: z.string().nullable(),
  website: z.string().nullable(),
  regnumber: z.string().nullable(),
  status: z.number(),
  created_at: iso8601Schema,
  updated_at: iso8601Schema,
  payment: z.object({
    id: z.number(),
    payment: z.string(),
  }),
});
export type Organization = z.infer<typeof Organization>;
