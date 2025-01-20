

// "use client"
// import React, { useState, useEffect, useMemo } from 'react'
// import useMeasure from 'react-use-measure'
// import { useTransition, a } from '@react-spring/web'
// import shuffle from 'lodash.shuffle'
// import { TypeAnimation } from 'react-type-animation';
// import { Hachi_Maru_Pop } from "next/font/google";


// import useMedia from './useMedia'
// import data from './data'

// import styles from './styles.module.css'
// import SearchBar from '@/components/Searchbar'



// // const hachiMaruPop = Hachi_Maru_Pop({
// //   weight: "400", 
// //   subsets: ["latin"],
// // });

// function AnimationGrid() {
//   const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
//   const [ref, { width }] = useMeasure()
//   const [items, set] = useState(data)
//   useEffect(() => {
//     const t = setInterval(() => set(shuffle), 2000)
//     return () => clearInterval(t)
//   }, [])
//   const [heights, gridItems] = useMemo(() => {
//     let heights = new Array(columns).fill(0)
//     let gridItems = items.map((child, i) => {
//       const column = heights.indexOf(Math.min(...heights))
//       const x = (width / columns) * column 
//       const y = (heights[column] += child.height / 2) - child.height / 2 
//       return { ...child, x, y, width: width / columns, height: child.height / 2 }
//     })
//     return [heights, gridItems]
//   }, [columns, items, width])
//   const transitions = useTransition(gridItems, {
//     key: (item) => item.css,
//     from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
//     enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
//     update: ({ x, y, width, height }) => ({ x, y, width, height }),
//     leave: { height: 0, opacity: 0 },
//     config: { mass: 5, tension: 500, friction: 100 },
//     trail: 25,
//   })
//   return (
//     <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
//       {transitions((style, item) => (
//         <a.div style={style}>
//           <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
//         </a.div>
//       ))}
//       <div className="inset-0 absolute bg-gradient-to-b from-black/70 via-black/90 to-black/30">
//         {/* Search Bar */}
//         <div className="flex flex-col items-center justify-center ">
//           <div className="">
//             <SearchBar
//               type="text"
//               className="w-full px-4 py-2 rounded-lg shadow-lg text-black focus:outline-none"
//             />
//           </div>
//           <TypeAnimation
//             sequence={[
//               'We Deliver Your Best Meals',
//               2000,
//               'We Deliver to Any Location',
//               2000,
//               'We Deliver Fast',
//               2000,
//             ]}
//              speed={70}
//               repeat={Infinity}
//               style={{
//                 fontSize: "3em",
//                 color: "white",
//                 fontWeight: "bold",
//                 margin: "20px 0",
//                 padding: "10px 5",
//                 letterSpacing: "0.1em",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontFamily: "hachi"
                
//               }}
//               // className={hachiMaruPop.className}
//           />
          
//         </div>
//       </div>
//       {/* <section className=" flex flex-col items-center min-h-[400px] pt-[100px] bg-[#dd3f31]">
//         <h1 className="text-4xl">Nice Curves!</h1>
//         <p className="text-lg">A website is like a road. The more curves it has, the more interesting it is.</p>
//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg
//             className="relative block w-[103%] h-[262px]"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//               fill="hsl(240,3%,6%)"
//             />
//           </svg>
//         </div>
//       </section> */}
//       <section className=" flex flex-col items-center min-h-[400px] pb-[100px] bg-white">
//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg
//             className="relative block w-[103%] h-[262px]"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//               fill="hsl(240,3%,6%)"
//             />
//           </svg>
//         </div>
//       </section>
//     </div>
//   )
  
// }
// export default function page() {
//   return (
//     <>
//     < AnimationGrid/>
//     </>
//   )
// }























"use client"
import React, { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import shuffle from 'lodash.shuffle'
import { TypeAnimation } from 'react-type-animation';
import { Hachi_Maru_Pop } from "next/font/google";
import useMedia from './useMedia'
import data from './data'
import {Dashboard} from "./(pages)/dashboard/page"

import styles from './styles.module.css'
import SearchBar from '@/components/Searchbar'



// const hachiMaruPop = Hachi_Maru_Pop({
//   weight: "400", 
//   subsets: ["latin"],
// });

function AnimationGrid() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  const [ref, { width }] = useMeasure()
  const [items, set] = useState(data)
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000)
    return () => clearInterval(t)
  }, [])
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0)
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights))
      const x = (width / columns) * column 
      const y = (heights[column] += child.height / 2) - child.height / 2 
      return { ...child, x, y, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, items, width])
  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })
  return (
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={style}>
          <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
        </a.div>
      ))}
      <div className="inset-0 absolute bg-gradient-to-b from-black/70 via-black/90 to-black/30">
        {/* Search Bar */}
        <div className="flex flex-col items-center justify-center ">
          <div className="">
            <SearchBar
              type="text"
              className="w-full px-4 py-2 rounded-lg shadow-lg text-black focus:outline-none"
            />
          </div>
          <TypeAnimation
            sequence={[
              'We Deliver Your Best Meals',
              2000,
              'We Deliver to Any Location',
              2000,
              'We Deliver Fast',
              2000,
            ]}
             speed={70}
              repeat={Infinity}
              style={{
                fontSize: "3em",
                color: "white",
                fontWeight: "bold",
                margin: "20px 0",
                padding: "10px 5",
                letterSpacing: "0.1em",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "hachi"
                
              }}
              // className={hachiMaruPop.className}
          />
          
        </div>
      </div>
      {/* <section className=" flex flex-col items-center min-h-[400px] pt-[100px] bg-[#dd3f31]">
        <h1 className="text-4xl">Nice Curves!</h1>
        <p className="text-lg">A website is like a road. The more curves it has, the more interesting it is.</p>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[103%] h-[262px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="hsl(240,3%,6%)"
            />
          </svg>
        </div>
      </section> */}
      <section className=" flex flex-col items-center min-h-[400px] pb-[100px] bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[103%] h-[262px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="hsl(240,3%,6%)"
            />
          </svg>
        </div>
      </section>
    </div>
  )
  
}
export default function page() {
  return (
    <>
    < AnimationGrid/>/
    </>
  )
}



















