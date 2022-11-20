//
import { z } from "zod";

//
import { JobSheet } from "lib/services/schemas";

//
import { c } from "./contract";

export const jobSheetContract = c.router({
  getJobSheet: {
    method: "GET",
    path: "/job",
    query: z.object({
      bookid: z.number(),
    }),
    responses: {
      200: JobSheet,
    },
  },
});
