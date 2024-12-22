import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
// import { ClerkProvider } from "@clerk/nextjs";
// import {Dashboard} from "./(routes)/dashboard/page"
// import FoodCategory from "@/components/CategoryList";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "my-FOOD",
  description: "A food ordering and delivery website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="">
            {/* <Nav/> */}
            {children}
          </div>
        </body>
    </html>
  );
}
