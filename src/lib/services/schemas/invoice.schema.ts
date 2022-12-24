//
import { z } from "zod";

//
import { iso8601Schema } from "lib/utils";

//
import { Booking } from "./booking.schema";
import { Customer } from "./customer.schema";
import { Employee } from "./employee.schema";
import { Organization } from "./organization.schema";

export const Invoice = z.object({
  id: z.number(),
  ap_book_id: z.number(),
  organization_id: z.number(),
  qrcode: z.string().nullable(),
  lotterynumber: z.string().nullable(),
  invoicedate: iso8601Schema.nullable(),
  paymentdate: iso8601Schema.nullable(),
  total: z.number(),
  due: z.number(),
  status: z.number(),
  comment: z.string().nullable(),
  user_id: z.number(),
  created_at: iso8601Schema,
  updated_at: iso8601Schema,
  organization: Organization,
  user: Employee,
  book: z.object({
    id: z.number(),
    suser_id: z.number(),
    carnumber: z.string(),
    phone_number: z.string(),
    vin_number: z.string(),
    carmanu: z.string(),
    carmodel: z.string(),
    buildyear: z.number(),
    capacity: z.number(),
    fueltype: z.string(),
    kilometr: z.number(),
    kilotype: z.string(),
    comment: z.string(),
    booking_date: iso8601Schema,
    organization_id: z.number(),
    ap_warehouse_id: z.number(),
    user_id: z.number(),
    bstatus: z.string(),
    rstatus: z.number(),
    rstart_time: iso8601Schema.nullable(),
    rend_time: iso8601Schema.nullable(),
    created_at: iso8601Schema,
    updated_at: iso8601Schema,
    customer: Customer,
    bookings: Booking.array(),
  }),
});
export type Invoice = z.infer<typeof Invoice>;
