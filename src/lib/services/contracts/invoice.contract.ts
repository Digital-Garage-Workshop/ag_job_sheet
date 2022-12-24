//
import { z } from "zod";

//
import { Invoice } from "lib/services/schemas";

//
import { c } from "./contract";

export const invoiceContract = c.router({
  getInvoice: {
    method: "GET",
    path: "/invoice",
    query: z.object({
      invoiceid: z.number(),
    }),
    responses: {
      200: Invoice,
    },
  },
});
