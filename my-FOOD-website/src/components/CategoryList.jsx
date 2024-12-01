"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import GlobalApi from '@/app/_utils/GlobalApi';

export default function FoodCategory() {
  const {categoryList, setCetegoryList} = useState([])

  useEffect(()=>{
    getCategoryList();
  }, [])
  const getCategoryList=()=>{
    GlobalApi.GetCategory().then(resp=>{
        console.log(resp.categories)
        setCetegoryList(resp.categories)
    })
  }
    
  return (
    <div>
      <div className='bg-slate-900 h-80'>
        {categoryList && categoryList.map((category, index) =>{
          <div key={index}>
            <Image src={category.icon?.url} alt={category.name}
              width={40}
              height={40} 
            />
            <img src={category.icon?.url || '/default-image.png'} alt={category.name} width="100" height="100" />

          </div>
        })}
      </div>
      <div>this is what i mean</div>
    </div>
  )
}