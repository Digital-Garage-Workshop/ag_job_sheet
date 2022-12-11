import edgeChromium from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import playwright from "playwright";

// https://gist.github.com/kettanaito/56861aff96e6debc575d522dd03e5725
const LOCAL_CHROME_EXECUTABLE =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method;

  switch (method) {
    case "POST":
      const { pageRanges, path } = JSON.parse(request.body);
      const pdf = await generatePDF2({
        pageRanges,
        path: new URL(path, request.headers.origin).toString(),
      });
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
export const generatePDF2 = async ({ pageRanges, path }: IOptions) => {
  const executablePath =
    (await edgeChromium.executablePath) || LOCAL_CHROME_EXECUTABLE;
  const browser = await playwright.chromium.launch({ executablePath });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(path, { waitUntil: "networkidle" });

  const pdfGenerator = page.locator(".fixed");
  await pdfGenerator.evaluate(
    (element) => (element.style.visibility = "hidden")
  );

  const pdf = await page.pdf({
    format: "A4",
    pageRanges,
    preferCSSPageSize: true,
    printBackground: true,
  });
  await browser.close();

  return pdf;
};
