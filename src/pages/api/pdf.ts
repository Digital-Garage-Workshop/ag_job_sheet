import type { NextApiRequest, NextApiResponse } from "next";
import playwright from "playwright";

// https://github.com/orgs/vercel/discussions/103
const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method;

  switch (method) {
    case "POST":
      const { pageRanges } = JSON.parse(request.body);
      const pdf = request.headers.referer
        ? await generatePDF({
            pageRanges,
            path: request.headers.referer ?? "",
          })
        : null;
      return response
        .status(200)
        .setHeader("Content-Type", "application/pdf")
        .send(pdf);
    default:
      return response.status(404);
  }
};
export default handler;

interface IOptions {
  pageRanges?: string;
  path: string;
}
export const generatePDF = async ({ pageRanges, path }: IOptions) => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(path, { waitUntil: "networkidle" });

  const pdfGenerator = page.locator(".fixed");
  await pdfGenerator.evaluate((node) => (node.style.visibility = "hidden"));

  const pdf = await page.pdf({
    format: "A4",
    pageRanges,
    preferCSSPageSize: true,
    printBackground: true,
  });
  await browser.close();

  return pdf;
};
