// import { Inter } from "next/font/google";
// // import "./globals.css";
// import { ReactNode, useEffect, useState } from "react";
// import '../../../app/globals.css'
// import Sidebar from "@/components/sidebar/Sidebar";
// import { Navbar } from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: "my-FOOD",
//   description: "A food ordering and delivery website",
// };

// export default function Layout({ children }) {
// const [navbarBg, setNavbarBg] = useState(false);


    // useEffect(() => {
    //   const changeBackground = () => {
    //     console.log("changeBG");
    //     if (window.scrollY >= 80) {
    //       setNavbarBg(true);
    //     } else {
    //       setNavbarBg(false);
    //     }
    //   };
    //   window.addEventListener("scroll", changeBackground);
    //   return () => window.removeEventListener("scroll", changeBackground);
    // }, []);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//           <div className="flex">
//             <div className="hidden md:block h-screen w-80">
//               <Sidebar/>
//             </div>
//             <div className="w-full   md:max-w-[1240px]">
//              <Navbar />
//               {/* <div className=" bg-cover bg-center blur-sm h-64 z-0" style={{ backgroundImage: `url(${Background.src})` }}>
//                 </div> */}
//               {children}
//             </div>
//           </div>
//         </body>
//     </html>
//   );
// }



















































"use client"
import { Inter } from "next/font/google";
import {useEffect, useState } from "react";
import '../../../app/globals.css';
import Bg from "../../../components/img/Food-bg.jpg"
import Sidebar from "@/components/sidebar/Sidebar";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });


export default function HomeLayout({ children }) {
const [navbarBg, setNavbarBg] = useState(false);


    useEffect(() => {
      const changeBackground = () => {
        console.log("changeBG");
        if (window.scrollY >= 80) {
          setNavbarBg(true);
        } else {
          setNavbarBg(false);
        }
      };
      window.addEventListener("scroll", changeBackground);
      return () => window.removeEventListener("scroll", changeBackground);
    }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex">
            <div className="hidden md:block h-screen w-2/">
              <Sidebar/>
            </div>
            <div className=" h-[3000px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url)" }}
              >
                <div className={`fixed w-full z-50  ${
                      navbarBg === true ? "bg-blue-500 rounded-b-xl" : "bg-slate-400"
                    }    transition-colors duration-300`}
                  >
                    <Navbar />
                  </div>
                {children}
            </div>
          </div>
        </body>
    </html>
  );
}













// "use client";

// import { useEffect, useState } from "react";

// export default function Layout({ children }) {
//   const [navbarBg, setNavbarBg] = useState(false);

//   useEffect(() => {
//     const changeBackground = () => {
//       console.log("changeBG");
//       if (window.scrollY >= 80) {
//         setNavbarBg(true);
//       } else {
//         setNavbarBg(false);
//       }
//     };
//     window.addEventListener("scroll", changeBackground);
//     return () => window.removeEventListener("scroll", changeBackground);
//   }, []);

//   return (
//     <>
//       <div
//         className="relative h-[3000px] w-full bg-cover bg-center"
//         style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
//       >
//         <nav
//           className={`fixed w-full z-50  ${
//             navbarBg === true ? "bg-blue-500" : "bg-red-950"
//           }    transition-colors duration-300`}
//         >
//           <div className="container mx-auto flex justify-between items-center p-4">
//             <div className="text-white font-bold text-xl">Logo</div>
//             <div className="flex space-x-4">
//               <button className="text-white border-white border rounded px-4 py-2">
//                 Sign In
//               </button>
//               <button className="text-white border-white border rounded px-4 py-2">
//                 Sign Up
//               </button>
//             </div>
//             <main className="h-full flex flex-col justify-center items-center bg-opacity-50 bg-black text-white">
//               {children}
//             </main>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }







