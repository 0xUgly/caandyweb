"use client"
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import Link from 'next/link';
import { useState } from 'react';
function Footer() {
  const [Active, setActive] = useState('home');
  return (
    <footer className='bg-black/30 backdrop-blur-sm h-20 max-w-[calc(100vw-2rem)] mb-4 fixed bottom-0 left-4 right-4 rounded-3xl'>
        <div className='h-full w-full flex gap-10 items-center justify-center'>
        <Link href='/lead'> <FaChartSimple  className={ Active === 'lead' ? 'opacity-100' : 'opacity-25'} color={Active === 'lead' ? 'white' : '#A5A5A5'}  size={30}  onClick={() => setActive('lead')} /></Link>
        <Link href='/login/telegram'><FaHome className={ Active === 'home' ? 'opacity-100' : 'opacity-25'} size={30} color={Active === 'home' ? 'white' : '#A5A5A5'}  onClick={() => setActive('home')} /></Link>
        <Link href='/task'><RiTodoFill className={ Active === 'task' ? 'opacity-100' : 'opacity-25'} size={30} color={Active === 'task' ? 'white' : '#A5A5A5'}   onClick={() => setActive('task')} /></Link>


        </div>
</footer>
  )
}

export default Footer