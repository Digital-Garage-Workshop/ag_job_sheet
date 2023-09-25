//
import { z } from "zod";

//
import { Booking } from "./booking.schema";
import { Branch } from "./branch.schema";
import { Customer } from "./customer.schema";
import { Organization } from "./organization.schema";

export const Invoice = z.object({
  id: z.number(),
  carnumber: z.string(),
  carmanu: z.string(),
  carmodel: z.string(),
  vin_number: z.string(),
  buildyear: z.number(),
  capacity: z.number(),
  fueltype: z.string(),
  kilometr: z.number().nullable(),
  kilotype: z.string().nullable(),
  phonenumber: z.string(),
  comment: z.string().nullable(),
  starttime: z.string().nullable(),
  endtime: z.string().nullable(),
  totalamount: z.string(),
  customer: Customer,
  bookings: Booking.array(),
  organization: Organization,
  branch: Branch,
  
});
export type Invoice = z.infer<typeof Invoice>;
