//
import { z } from "zod";

//
import { Invoice } from "lib/services/schemas";

//
import { c } from "./contract";

export const invoiceContract = c.router({
  getInvoice: {
    method: "GET",
    path: "/invoice/:id",
    responses: {
      200: z.object({
        data: Invoice,
      }),
    },
  },
});
