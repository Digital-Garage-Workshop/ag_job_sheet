//
import "tailwindcss/tailwind.css";

//
import { Roboto } from "@next/font/google";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const RootLayout: React.FCC = ({ children }) => {
  return (
    <html className={roboto.className} lang="en">
      <body className="bg-gray-100">{children}</body>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      /> */}
    </html>
  );
};
export default RootLayout;
