import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Background from '../components/img/Food-bg.jpg'


export const metadata = {
  title: "my-FOOD",
  description: "A food ordering and delivery website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex">
            <div className="hidden md:block h-screen w-80">
              <Sidebar/>
            </div>
            <div className="w-full   md:max-w-[1240px]">
             <Navbar />
              {/* <div className=" bg-cover bg-center blur-sm h-64 z-0" style={{ backgroundImage: `url(${Background.src})` }}>
                </div> */}
               {children}
            </div>
          </div>
        </body>
    </html>
  );
}
