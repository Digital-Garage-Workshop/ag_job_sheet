//
import { z } from "zod";

//
import { iso8601Schema, timeSchema } from "lib/utils";

//
import { Employee } from "./employee.schema";
import { Service } from "./service.schema";

export const Booking = z.object({
  id: z.number(),
  ap_service_id: z.number(),
  ap_categoryservice_id: z.number().nullable(),
  sp_repair_id: z.number().nullable(),
  ap_employee_id: z.number(),
  booking_date: iso8601Schema,
  booking_time: z.enum(["9:00 AM"]),
  service_duration: z.number().nullable(),
  quantity: z.number(),
  description: z.string().nullable(),
  comment: z.string().nullable(),
  booking_bill: z.number(),
  calendar_event_id: z.number().nullable(),
  organization_id: z.number(),
  ap_warehouse_id: z.number(),
  status: z.enum(["confirmed"]),
  rstatus: z.string(),
  rstart_time: iso8601Schema,
  rpause_time: timeSchema,
  rend_time: iso8601Schema,
  rnote: z.string(),
  createdby: z.number(),
  ap_book_id: z.number(),
  created_at: iso8601Schema,
  updated_at: iso8601Schema,
  service: Service,
  repair: z
    .object({
      id: z.number(),
      servicename: z.string(),
    })
    .nullable(),
  categoryservice: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .nullable(),
  employee: Employee,
  rnotes: z.string().array(),
});
export type Booking = z.infer<typeof Booking>;
