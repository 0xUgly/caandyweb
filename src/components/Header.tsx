import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Suspense } from 'react';
import { AutoConnect } from "thirdweb/react";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";
import { client, wallet } from "@/app/constant";




function Header() {

  return (
    <header className='h-24 z-20 p-5 w-full relative bg-black '>
        <div className='flex flex-row items-center justify-between  dark:text-white text-white'>
        <div>
          <Image
          src='/ZKLOGO.png'
          alt=''
          height={80}
          width={80}
          />
        </div>
      
       
        </div>
        
    </header>
)
}

export default Header