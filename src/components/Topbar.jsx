import React from 'react'
import { IoNotifications } from 'react-icons/io5'
import { RiArrowDownSLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-10'>
            <img src="/Logo.png" alt="" />
            <div className='flex items-center gap-5'>
                <div className='p-2 rounded-full bg-[#F0F0F0]'>
                    <IoNotifications size={20} className='text-[#000080] text-center' />
                </div>
                <div className='w-[40px] h-[40px] border rounded-full bg-[#00000026]'>
                    <img src="/avatar.png" alt=""  />
                </div>
                <div className='flex items-center'>
                   <div className='flex flex-col'>
                     <span className='text-[14px] font-bold'>Daniel James</span>
                     <span className='text-[12px] text-[#00000080]'>Daniel.james@gmail...</span>
                   </div>
                   <RiArrowDownSLine />
                </div>
            </div>
    </div>
  )
}

export default Topbar