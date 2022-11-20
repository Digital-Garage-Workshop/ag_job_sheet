//
import { c } from "./contract";
import { jobSheetContract } from "./job_sheet.contract";

export const appContract = c.router({
  jobSheet: jobSheetContract,
});
