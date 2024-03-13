import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion';

function Card({data, refer}) {
  return (
    <motion.div drag dragConstraints={refer} whileDrag={{scale:1.4}} dragElastic = {0.2} className = 'relative flex-shrink-0 border[#fff] w-60 h-80 rounded-[40px] px-8 py-10 overflow-hidden'style={{backgroundColor:'grey'}}>
      <FaRegFileAlt />
      <p className='text-md leading-tight mt-5 font-semibold'>{data.description}</p>
      <div className='footer absolute bg-yellow bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".5em" color='#000'/>}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )
        }
        
      </div>
    </motion.div>
  )
}

export default Card
