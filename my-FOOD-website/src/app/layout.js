import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";


export const metadata = {
  title: "my-FOOD",
  description: "A food ordering and delivery website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="">
            <div className=" flex w-full">
              <Nav />
            </div>
            {/* {children} */}
          </div>
        </body>
    </html>
  );
}
