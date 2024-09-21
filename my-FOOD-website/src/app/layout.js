import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "my-FOOD",
  description: "A food ordering and delivery website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
          <div className="">
            <Nav />
            {children}
          </div>
        </body>
    </html>
    </ClerkProvider>
  );
}
