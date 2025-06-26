import React, { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import Flag from 'react-world-flags'

const SendModal = ({close}) => {
    const [send, setSend] = useState(false)
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-5 rounded-2xl shadow-lg w-[350px] h-[500px]'>
              <div className='flex items-center justify-end gap-[40px]'>
                <span className='bg-[#C4C4FF26] text-[12px] rounded-2xl px-3 py-2'>Send money to Cynthia Smith</span>
                <LiaTimesSolid onClick={close} className='cursor-pointer text-xl' />
              </div>
              <form>
                <div className='flex  flex-col mt-5  gap-2'>
                  <label className='text-[14px] font-medium'>You Send</label>
                  <div className="flex border border-[#CCCCCC] rounded-3xl px-3 py-2 ">
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
                  <span className='bg-[#FF000026] px-3 py-2 mt-1 w-[50%] text-[12px] rounded-2xl'>1 AUD = 1,450 NGN</span>
                </div>

                <div className='flex  flex-col mt-5  gap-2'>
                  <label className=' text-[14px] font-medium '>Beneficiary receive</label>
                  <div className="flex border border-[#CCCCCC] rounded-3xl px-3 py-2 ">
                    <input
                      type="number"
                      placeholder="1450"
                      className="flex-1 outline-none border-none bg-transparent"
                    />
                    <select name="currency" id="currency" className='outline-none border-none'>
                      <option value="NGN"> <Flag code="NGN" /> NGN</option>
                      <option value="AUD"> <Flag code="AUD" /> AUD</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-medium mt-5  mb-2">Payment Method</label>
                  <select className="w-full border border-[#CCCCCC] rounded-3xl px-3 py-2 text-sm outline-none">
                    <option value="">-- Select a Payment Method --</option>
                  </select>
                </div>
                  <button className='bg-[#FF0000] text-white w-full mt-10 rounded-2xl px-2 py-3'>
                    Send Money
                  </button>
              </form>
            </div>
          </div>
  )
}

export default SendModal