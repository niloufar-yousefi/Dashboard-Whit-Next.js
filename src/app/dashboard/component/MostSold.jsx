"use client"
import * as React from 'react';
import Image from 'next/image';


export default function MostSold() {
    const [data, getData] = React.useState([])
    React.useEffect(() => {
      fetch('https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home')
        .then(response => response.json())
        .then(val => {
          let x = val.result.home_1.products
          getData(x)
        })
    }, [])

  return (
    <div>
         <ul className='space-y-4'>
            {data.map((item, index) => {
              return (
                <li key={index} className='mb-10 md:mb-0 py-4 border-b border-gray-200 flex flex-wrap' >
                  <div className='w-1/3  '>
                    <Image
                      src={item.images.main}
                      alt="img"
                      width={70}
                      height={50}
                      priority
                      style={{
                        width: 'auto',
                        height: 'auto'
                      }}

                    />
                  </div>
                  <div className='w-2/3 flex flex-wrap *:flex *:items-center *:justify-center'>
                    <p className='text-xs md:text-[10px] w-2/3 px-1 text-gray-800'>{item.title_en}</p>
                    <p className='text-xs md:text-[10px] w-1/3 text-gray-600'>${item.id}</p>
                  </div>
                </li>
              )
            })}
          </ul>
   
    </div>
  )
}
