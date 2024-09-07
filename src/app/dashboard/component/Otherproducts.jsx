"use client"
import * as React from 'react';
import Image from 'next/image';


export default function Otherproducts() {
    const [data, getData] = React.useState([])
    React.useEffect(() => {
      fetch('https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home')
        .then(response => response.json())
        .then(val => {
          let x = val.result.home_5.products
          let y = val.result.home_2.products
          let q = val.result.home_7.products
          let z = val.result.home_3.products
          let sum = [...x,...y,...q,...z]
          getData(sum)
        })
    }, [])

  return (
    <div>
         <ul className='flex flex-wrap justify-between py-4'>
            {data.map((item, index) => {
              return (
                <li key={index} className=' py-4 border-2 rounded-xl mb-4 border-gray-100 flex flex-wrap w-[48%] px-2 ' >
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
                  <div className='w-2/3 flex flex-wrap *:flex *:items-center *:justify-end'>                
                    <p className='text-xs md:text-md pr-1  w-full text-gray-400'>${item.id}</p>
                  </div>
                </li>
              )
            })}
          </ul>
   
    </div>
  )
}
