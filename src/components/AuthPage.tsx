"use client"
import React, { useState } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from 'react';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}
const GameSelectionUI : React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {

  const [activeButton, setActiveButton] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Header/>
<main className='min-h-screen pb-64 flex flex-col w-screen dark:bg-gradient-to-t from-[#391830] to-[#010601] bg-gradient-to-t from-[#0B4034] to-[#010601]'>  

    <div className='pt-4 flex flex-col gap-2 p-5'>   
       <div className='flex flex-col gap-2 z-0'>
            <div className='flex justify-between w-full pt-5 dark:text-white text-xl   text-white'>
            <div className='font-zk text-[#D9D9D9] text-[17px] font-bold'>Welcome to Zook&apos;s quest telegram bot.</div>
                
            </div>
        
            </div>
       <Slideshow/>
       <div className=' text-xl font-semibold mt-4 w-full border-b-2 border-[#5F5F5F]' >
        
          <div className='flex flex-row gap-2 dark:text-white text-white sm:items-center sm:justify-center'>
           <div className='flex justify-between w-full font-zk text-[#D9D9D9] text-[17px] font-bold'>Games
          
            
            </div> </div>
             </div>


             

             <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/Rectangle 27.png')`}}></div>
                        <div className='text-white font-zk'>Zook&apos;s Quest</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-white font-zk font-bold p-1 pl-6 rounded-2xl pr-6 bg-[#FF00CC]'>Play</div>
                        </button>
                      </div>
                    </div>
            </div>
            <div ref={ref} className='w-full flex items-center text-white text-[16px] font-zk text-center justify-center' style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>More Games Coming Soon!</div>
           
    </main>
    <Footer/>
    </>
  );
};

export default GameSelectionUI;





 {/* <div className="flex flex-col items-center justify-center h-full ">
      <div className="p-8 bg-transparent rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">Choose a game to continue:</p>
        <div className="space-y-4">
          <button 
            onClick={() => onGameSelect("unity")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity" ? "Redirecting..." : "Base Game"}
          </button>
          <button 
            onClick={() => onGameSelect("unity2")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity2" ? "Redirecting..." : "Continue to Unity Game 2"}
          </button>
        </div>
      </div>
    </div> */}
