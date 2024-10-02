import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='bg-black/30 backdrop-blur-sm h-20 max-w-[calc(100vw-2rem)] mb-4 fixed bottom-0 left-4 right-4 rounded-3xl'>
        <div className='h-full w-full flex gap-10 items-center justify-center'>
        <FaChartSimple color='#D9D9D9' size={30}/>
        <FaHome size={30} color='white'/>
        <RiTodoFill size={30} color='#D9D9D9'/>


        </div>
</footer>
  )
}

export default Footer