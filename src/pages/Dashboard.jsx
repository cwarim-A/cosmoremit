import React from 'react'
import StatCard from '../components/StatCard'
import Flag from 'react-world-flags'
import { IoLinkOutline } from 'react-icons/io5'
import { GiPadlock } from 'react-icons/gi'

import { TiPlus } from 'react-icons/ti'

const Dashboard = () => {
  return (
    <div className='flex gap-6 '>
      {/* Card component */}
      <div className='w-[600px]'>
        <h1 className='text-xl font-bold'>My Dashboard</h1>
        {/* Cards Div */}
        <div className="flex flex-col mt-4 md:flex-row gap-4 w-full">
          <StatCard title="Total money spent"
            amount="20,000.00 AUD"
            gradient="bg-gradient-to-r from-red-800 via-red-500 to-red-400" />
          <StatCard title="Referral Bonus"
            amount="2,000.00 AUD"
            gradient="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500" />
        </div>
        <div className='mt-5 flex flex-col gap-2'>
          <h1>Copy your referral link:</h1>
          <div className='flex gap-4'>
            <span className='text-sm text-[#006EF7]'>newx.cosmoremit.com.au/signup?referral_id=EFVHGD...</span>
            <IoLinkOutline className='text-[#006EF7] text-xl cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='w-[430px] bg-white p-5 rounded-3xl w-full shadow-[rgba(0,0,0,0.15)_0px_5px_15px]'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='flex items-center gap-3'>
            <div className=' p-2 bg-[#F300001A] rounded-full'>
              <GiPadlock />
            </div>
            <span>Best rate guarantee</span>
          </div>
          <span className='bg-[#C4C4FF26] p-3 rounded-3xl '>1 AUD = 1,450 NGN</span>
        </div>
        <form>
          <div>
            <label className="block text-md font-bold mt-2  mb-2">You send</label>
            <div className="flex items-center border border-[#CCCCCC] rounded-3xl px-3 py-2">
              <input
                type="number"
                placeholder="1"
                className="flex-1 outline-none border-none bg-transparent"
              />
              <select name="currency" id="currency" className='outline-none border-none'>
                <option value="AUD"> <Flag code="AUD" /> AUD</option>
                <option value="NGN"> <Flag code="NGN" /> NGN</option>
              </select>
            </div>
            <p className='bg-[#F300001A] px-2 py-1 mt-2 text-sm w-[290px] rounded-lg'>Sending above 2,000 AUD? <span className='text-[#FF0000] underline cursor-pointer'> Discount fee</span></p>
          </div>
          <div>
            <label className="block text-md font-bold mt-5  mb-2">Beneficiary receive</label>
            <div className="flex items-center border rounded-3xl px-3 py-2">
              <input
                type="number"
                placeholder="1450"
                className="flex-1 outline-none border-none bg-transparent"
              />
              <select name="currency" id="currency" className='outline-none border-none'>
                <option value="AUD"> <Flag code="AUD" /> AUD</option>
                <option value="NGN"> <Flag code="NGN" /> NGN</option>
              </select>
            </div>
            <div className='flex items-center justify-end mt-3 gap-2 cursor-pointer'>

              <TiPlus className='bg-[#292D32] text-[18px] text-white p-1 rounded-full  cursor-pointer' />

              <span className='text-[12px]'>Add new beneficiary</span>
            </div>
          </div>
          <div>
            <label className="block text-md font-bold mt-5  mb-2">Beneficiary</label>
            <select className="w-full border rounded-3xl px-3 py-2 text-sm outline-none">
              <option value="">-- Select a Beneficiary --</option>
            </select>
          </div>
          <div className=''>
            <label className="block text-md font-bold mt-5  mb-2">Payment Method</label>
            <select className="w-full border rounded-3xl px-3 py-2 text-sm outline-none">
              <option value="">-- Select a payment method --</option>
            </select>
          </div>
          <button className='bg-[#FF0000] text-white w-full mt-10 mb-2 p-1 rounded-md'>Send</button>
        </form>
      </div>

    </div>
  )
}

export default Dashboard