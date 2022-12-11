//
import "tailwindcss/tailwind.css";

//
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const RootLayout: React.FCC = ({ children }) => {
  return (
    <html className={roboto.className} lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
};
export default RootLayout;
