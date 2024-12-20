"use client"
import { Inter } from "next/font/google";
import {useEffect, useState } from "react";
import '../../../app/globals.css';
import Image from "next/image";
// import BackgroundImage from "../../../components/"
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });


export default function HomeLayout({ children }) {
const [navbarBg, setNavbarBg] = useState(false);


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

  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex">
          {/* <div className="w-full   md:max-w-[1240px]">
              <Nav />
              {children}
            </div> */}
            <div className="hidden md:block h-screen w-1/5">
              <Sidebar/>
            </div>
            <div className="h-screen flex flex-col w-4/5">
              <div className=" h-[30rem] backdrop-blur" >
              {/* // style={{ backgroundImage: `url(${BackgroundImage.src})` }} > */}
                <div className="absolute inset-0 backdrop-blur-sm">
                  <div className="">
                    <Navbar/>
                  </div>
                  <div className="" >
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </html>
  );
}