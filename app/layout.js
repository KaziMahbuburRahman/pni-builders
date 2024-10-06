import { Outfit } from "next/font/google";
import "./globals.css";

import { Header } from "@/Components/Header";
import Footer from "@/Components/HomeComponents/Footer";
// import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "PNI BUILDERS SINGAPORE PTE LTD",
  description: "Official site of PNI BUILDERS SINGAPORE PTE LTD",
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession(authOptions);
  // console.log("server session",session);
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
