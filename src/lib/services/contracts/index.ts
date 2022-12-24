//
import { c } from "./contract";
import { invoiceContract } from "./invoice.contract";
import { jobSheetContract } from "./job_sheet.contract";

export const appContract = c.router({
  invoice: invoiceContract,
  jobSheet: jobSheetContract,
});
