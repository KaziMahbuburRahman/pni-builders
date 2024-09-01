
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "PINI BUILDERS SINGAPORE PTE LTD",
  description: "Official site of PINI BUILDERS SINGAPORE PTE LTD",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
