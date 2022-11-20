//
import isISO8601 from "validator/lib/isISO8601";
import { z } from "zod";

export const iso8601Schema = z.string().refine(isISO8601);
export const timeSchema = z
  .string()
  .regex(/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/);
