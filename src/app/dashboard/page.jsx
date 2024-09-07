import Chart from './component/Chart'
import React from 'react'
import MainContent from './component/MainContent'
export default function page() {
  return (
    <div className='w-full bg-slate-50 shadow-sm rounded-xl py-4 px-3 flex flex-wrap'>
      <Chart />
      <MainContent />
    </div>)
}