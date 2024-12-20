import React from 'react'
import Running_order_container from './Running_order_container'
export default function DashSide() {
  return (
    <div className='w-2/6 shadow-gray-400 rounded-lg'>
        <div className='bg-slate-200 shadow-gray-400 rounded-lg'>
            <span className='text-lg font-bold '>Prepared Order</span>
        </div>
        <Running_order_container/>

    </div>
  )
}
