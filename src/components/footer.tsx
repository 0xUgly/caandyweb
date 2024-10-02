import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='bg-black/30 backdrop-blur-sm h-20 max-w-[calc(100vw-2rem)] mb-4 fixed bottom-0 left-4 right-4 rounded-3xl'>
        <div className='h-full w-full flex gap-10 items-center justify-center'>
        <FaChartSimple className='opacity-25' color='#A5A5A5' opacity={25} size={30}/>
        <FaHome size={30} color='white'/>
        <RiTodoFill className='opacity-25' size={30} color='#A5A5A5'  opacity={25} />


        </div>
</footer>
  )
}

export default Footer