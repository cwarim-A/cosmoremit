import React, { useState } from 'react'
import Layers from '../assets/Layer.png'
import Card from "../assets/Card.png"
import Effect from '../assets/Effect.png'

import { FiPlus } from 'react-icons/fi'
import { CiCalendar, CiSearch } from 'react-icons/ci'
import SendModal from '../components/SendModal'


const Wallet = () => {
  const [send, setSend] = useState(false)
  const closeModal = ()=>{
    setSend(false)
  }
  const openModal = ()=>{
    setSend(true)
  }
  return (
    <div className='px-3'>
      <h1 className='font-bold text-[18px] '>Wallet</h1>
      <div className='flex items-center gap-10 mt-7 justify-between'>

        <div className='relative z-10 w-[500px] h-[175px] rounded-3xl bg-cover bg-center flex flex-col px-5 py-3 gap-4 text-white ' style={{ backgroundImage: `url(${Layers})` }}>
          <div
            className="absolute inset-0 pointer-events-none "
            style={{ backgroundImage: `url(${Effect})`, backgroundRepeat: 'no-repeat', zIndex: 0 }}
          />
          <span className='text-[20px] mt-2'>Available Balance</span>
          <span className='text-[20px] font-bold'>11,310.000 AUD</span>
          <div className='flex items-center gap-5'>
            <button className='border text-[#CC142B] text-[12px] rounded-md w-[80px] py-2 px-5 font-bold' onClick={openModal}>Send</button>
            <button className='text-white bg-[#A24552] text-[12px] rounded-xl py-2 px-5 font-bold'>Fund Wallet</button>
          </div>
        </div>
        <div className='flex-3 flex gap-5  w-1/2 h-[180px]'>
          <img src={Card} alt="" className='h-full' />
          <div className='w-[130px] bg-gradient-to-t from-[#280E15] to-[#8E334A] rounded-3xl flex items-center justify-center'>
            <FiPlus className='text-white text-[50px]' />
          </div>
        </div>

      </div>
      <div className='mt-[50px] flex items-center justify-between'>
        <h2 className='text-xl'>Recent Transactions</h2>
        <div className='flex items-center gap-2 border  bg-white rounded-3xl px-3 py-3 w-[300px]'>
          <CiSearch className='text-[20px]' />
          <input type="text" placeholder='Search ' className='w-full outline-none text-sm' />
        </div>
        <div className="flex items-center gap-2 px-3 text-sm" style={{ borderRight: "2px solid #292D3280", borderLeft: "2px solid #292D3280" }}>
          <CiCalendar className='text-xl' />
          Apr 06,25 - Apr 09, 25
        </div>
        <button className='bg-[#3C4043] py-2 px-4 text-white rounded-lg '>
          Export CSV
        </button>
      </div>
      <div className='bg-white rounded-xl w-full shadow-[rgba(0,0,0,0.15)_0px_5px_15px] mt-5'>
        <thead className='w-full table-auto'>
          <tr className='text-[14px] text-[#00000099]'>
            <th className='text-left py-5 px-5'>S/N</th>
            <th className='text-left py-5 px-5'>Reference</th>
            <th className='text-left py-5 px-5'>Type</th>
            <th className='text-left py-5 px-5'>Status</th>
            <th className='text-left py-5 px-5'>Flow</th>
            <th className='text-left py-5 px-5'>Amount</th>
            <th className='text-left py-5 px-5'>Date</th>
            <th className='text-left py-5 px-5'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-[14px] text-[#36394A]'>
            <td className='text-left px-5 py-5'>1.</td>
            <td className='text-left px-5 py-5'>29459350549604</td>
            <td className='text-left px-5 py-5'>Fund Wallet</td>
            <td className='text-left px-5 py-5 text-[#12B829]'>
              <span className='inline-block w-[10px] h-[10px] bg-[#12B829] rounded-full mr-2'></span>
              success
            </td>
            <td className='text-left px-5 py-5'>PayId</td>
            <td className='text-left px-5 py-5'>180 AUD</td>
            <td className='text-left px-5 py-5'>Apr 01,2025 10:15AM</td>
            <td className='text-left px-5 py-5 '>View</td>
          </tr>

          <tr className='text-[14px] text-[#36394A]'>
            <td className='text-left px-5 py-5'>2.</td>
            <td className='text-left px-5 py-5'>29459350549604</td>
            <td className='text-left px-5 py-5'>Bank Transfer</td>
            <td className='text-left px-5 py-5 text-[#FFBD00]'>
              <span className='inline-block w-[10px] h-[10px] bg-[#FFBD00] rounded-full mr-2'></span>
              pending
            </td>
            <td className='text-left px-5 py-5'>PayId</td>
            <td className='text-left px-5 py-5'>107 AUD</td>
            <td className='text-left px-5 py-5'>Apr 01,2025 10:15AM</td>
            <td className='text-left px-5 py-5 '>View</td>
          </tr>

          <tr className='text-[14px] text-[#36394A]'>
            <td className='text-left px-5 py-5'>3.</td>
            <td className='text-left px-5 py-5'>29459350549604</td>
            <td className='text-left px-5 py-5'>Fund Wallet</td>
            <td className='text-left px-5 py-5 text-[#12B829]'>
              <span className='inline-block w-[10px] h-[10px] bg-[#12B829] rounded-full mr-2'></span>
              success
            </td>
            <td className='text-left px-5 py-5'>PayId</td>
            <td className='text-left px-5 py-5'>87 AUD</td>
            <td className='text-left px-5 py-5'>Apr 01,2025 10:15AM</td>
            <td className='text-left px-5 py-5 '>View</td>
          </tr>

          <tr className='text-[14px] text-[#36394A]'>
            <td className='text-left px-5 py-5'>4.</td>
            <td className='text-left px-5 py-5'>29459350549604</td>
            <td className='text-left px-5 py-5'>Withdraw</td>
            <td className='text-left px-5 py-5 text-[#12B829]'>
              <span className='inline-block w-[10px] h-[10px] bg-[#12B829] rounded-full mr-2'></span>
              success
            </td>
            <td className='text-left px-5 py-5'>Bank Transfer</td>
            <td className='text-left px-5 py-5'>388 AUD</td>
            <td className='text-left px-5 py-5'>Apr 01,2025 10:15AM</td>
            <td className='text-left px-5 py-5 '>View</td>
          </tr>

          <tr className='text-[14px] text-[#36394A]'>
            <td className='text-left px-5 py-5'>5.</td>
            <td className='text-left px-5 py-5'>29459350549604</td>
            <td className='text-left px-5 py-5'>Fund Wallet</td>
            <td className='text-left px-5 py-5 text-[#FFBD00]'>
              <span className='inline-block w-[10px] h-[10px] bg-[#FFBD00] rounded-full mr-2'></span>
              pending
            </td>
            <td className='text-left px-5 py-5'>Bank Transfer</td>
            <td className='text-left px-5 py-5'>190 AUD</td>
            <td className='text-left px-5 py-5'>Apr 01,2025 10:15AM</td>
            <td className='text-left px-5 py-5 '>View</td>
          </tr>
        </tbody>
      </div>
      <div className='flex items-center justify-end mt-5 '>
        <button className='bg-[#FFE6E6] text-[#FF0000] text-[14px] rounded-lg px-5 py-2'>
          View all
        </button>
      </div>
      {
        send && (
          <SendModal close={closeModal}/>
        )
      }
    </div>
  )
}

export default Wallet