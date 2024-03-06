import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className = 'relative w-60 h-72 rounded-[50px] bg-zinc-900/90 px-8 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='footer absolute bg-yellow bottom-0 w-full py-3 px-8 left-0'>
        <div className='flex items-center justify-between mb-5'>
          <h5>.2mb</h5>
          <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
            <LuDownload size=".5em" color='#000'/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
