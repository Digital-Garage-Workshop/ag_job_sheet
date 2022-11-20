//
import { z } from "zod";

//
import { iso8601Schema, timeSchema } from "lib/utils";

//
import { ServiceCategory } from "./service_category.schema";

export const Service = z.object({
  id: z.number(),
  ap_category_id: z.number(),
  referred_service_id: z.number().nullable(),
  price: z.number(),
  price_sale: z.number().nullable(),
  allow_cancel: z.number(),
  auto_confirm: z.number(),
  allow_booking_max_day_ago: z.number(),
  service_duration_type: z.enum(["hourly"]),
  service_duration: timeSchema,
  multiple_bookings: z.number(),
  available_seat: z.number(),
  buffer_time: timeSchema,
  description: z.string(),
  service_starts: timeSchema,
  service_ends: timeSchema,
  service_starting_date: iso8601Schema.nullable(),
  service_ending_date: iso8601Schema.nullable(),
  max_booking: z.number(),
  user_id: z.number(),
  ap_warehouse_id: z.number(),
  break_time: z.string(),
  status: z.number(),
  organization_id: z.number(),
  created_at: iso8601Schema,
  updated_at: iso8601Schema,
  category: ServiceCategory,
});
export type Service = z.infer<typeof Service>;
