//
import { z } from "zod";

//
import { iso8601Schema } from "lib/utils";

//
import { Booking } from "./booking.schema";
import { Customer } from "./customer.schema";
import { Employee } from "./employee.schema";
import { Organization } from "./organization.schema";
import { Warehouse } from "./warehouse.schema";

export const JobSheet = z.object({
  id: z.number(),
  suser_id: z.number(),
  carnumber: z.string(),
  phone_number: z.string(),
  vin_number: z.string(),
  carmanu: z.string(),
  carmodel: z.string(),
  buildyear: z.number(),
  capacity: z.number(),
  kilometr: z.number(),
  comment: z.string().nullable(),
  booking_date: iso8601Schema,
  organization_id: z.number(),
  ap_warehouse_id: z.number(),
  user_id: z.number(),
  bstatus: z.enum(["confirmed"]),
  rstatus: z.number(),
  rstart_time: iso8601Schema.nullable(),
  rend_time: iso8601Schema.nullable(),
  created_at: iso8601Schema,
  updated_at: iso8601Schema,
  organization: Organization,
  warehouse: Warehouse,
  createuser: Employee,
  bookings: Booking.array(),
  customer: Customer,
});
export type JobSheet = z.infer<typeof JobSheet>;
