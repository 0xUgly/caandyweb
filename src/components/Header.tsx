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
  const account = useActiveAccount();
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
        <AutoConnect client={client} wallets={[wallet]}/>
 <div className="flex justify-center items-center h-full pr-2">
 {/* <Button className="inline-flex items-center gap-2 rounded-[4px] font-raj underline underline-offset-4 decoration-[#19AE00] decoration-4 decoration-solid bg-transparent border-2 border-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">0x181871415415418148</Button>   */}

          {account ? 
            (
            <> 
            <Button onClick={() => (window as any).Telegram.WebApp.openLink(`https://etherscan.io/address/${account.address}`)} className="inline-flex items-center gap-2 rounded-[4px] font-raj underline underline-offset-4 decoration-[#19AE00] decoration-4 decoration-solid bg-transparent border-2 border-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">{shortenAddress(account.address)}</Button>  
            </>
            ) 
          : (
              <p className="text-sm text-zinc-400">fetching smart account</p>
            )}      

        </div>
       
        </div>
        
    </header>
)
}

export default Header