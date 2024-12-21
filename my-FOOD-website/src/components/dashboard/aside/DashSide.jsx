import React from 'react'
import Running_order_container from './Running_order_container'
import Tittle from '@/components/Tittle'

export default function DashSide() {
  return (
    <div className=' shadow-gray-400 rounded-lg'>
       <Tittle tittle='Running Order'/>
        <Running_order_container/>
    </div>
  )
}
