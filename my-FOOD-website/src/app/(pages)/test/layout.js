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






























// "use client"
// import { Inter } from "next/font/google";
// import {useEffect, useState } from "react";
// import '../../../app/globals.css';
// import Image from "next/image";
// import BackgroundImage from "../../../components/img/Food-bg.jpg"
// import Sidebar from "@/components/sidebar/Sidebar";
// import { Navbar } from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });


// export default function  TestLayout({ children }) {
// const [navbarBg, setNavbarBg] = useState(false);


//     useEffect(() => {
//       const changeBackground = () => {
//         console.log("changeBG");
//         if (window.scrollY >= 80) {
//           setNavbarBg(true);
//         } else {
//           setNavbarBg(false);
//         }
//       };
//       window.addEventListener("scroll", changeBackground);
//       return () => window.removeEventListener("scroll", changeBackground);
//     }, []);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//           <div className="flex">
//             <div className="hidden md:block h-screen w-1/5">
//               <Sidebar/>
//             </div>
//             <div className="h-screen bg-cover bg-center flex flex-col w-4/5"
//                 // style={{ backgroundImage: `url(${BackgroundImage.src})` }}
//               >
//                 <div className={`fixed w-[60rem] z-50 ${
//                       navbarBg === true ? "bg-white rounded-b-xl border-b-0" : "bg-transparent border-b-slate-300"
//                     }    transition-colors duration-300`}
//                 >
//                   <Navbar/>
//                 </div>
//                 {children}
//             </div>
//           </div>
//         </body>
//     </html>
//   );
// }