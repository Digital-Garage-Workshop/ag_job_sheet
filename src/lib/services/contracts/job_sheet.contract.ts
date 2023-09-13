//
import { z } from "zod";

//
import { JobSheet } from "lib/services/schemas";

//
import { c } from "./contract";

export const jobSheetContract = c.router({
  getJobSheet: {
    method: "GET",
    path: "/booking/:id",
    responses: {
      200: z.object({
        data: JobSheet,
      }),
    },
  },
});
