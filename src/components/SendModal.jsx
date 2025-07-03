import React, { useState } from 'react'
import { GiPadlock } from 'react-icons/gi'
import { GoPlus, GoPlusCircle } from 'react-icons/go'
import { LiaTimesSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
import Flag from 'react-world-flags'

const SendModal = ({close}) => {
    const [send, setSend] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault()
      navigate("/complete-transactions")
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-5 rounded-2xl shadow-lg w-[400px] h-[620px]'>
              <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex items-center gap-3'>
                          <div className=' p-2 bg-[#F300001A] rounded-full'>
                            <GiPadlock />
                          </div>
                          <span className='text-[12px]'>Best rate guarantee</span>
                        </div>
                        <span className='bg-[#C4C4FF26] px-2 py-1 rounded-3xl text-[12px] text-center w-[40%]'>1 AUD = 1,450 NGN</span>
                      </div>
              <form>
                <div className='flex  flex-col mt-2  gap-2'>
                  <label className='text-[14px] font-bold'>You Send</label>
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
                  <span className='bg-[#FF000026] px-3 py-2 mt-1 w-[80%] text-[12px] rounded-lg'>Sending above 2,000 AUD? <span className='underline text-[#ff0000]'>Discount fee</span></span>
                </div>

                <div className='flex  flex-col mt-5  gap-2'>
                  <label className=' text-[14px] font-bold '>Beneficiary receive</label>
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
                <div className='flex  flex-col mt-5  gap-2'>
                  <label className=' text-[14px] font-bold '>Beneficiary</label>
                  <div className="flex border border-[#CCCCCC] rounded-3xl px-3 py-2 ">
                    <input
                      type="text"
                      placeholder="Taiwo Ali"
                      className="flex-1 outline-none border-none bg-transparent"
                    />
                    <select name="beneficiary" id="beneficiary" className='outline-none border-none'>
                      <option value="name">  </option> 
                    </select>
                  </div>
                </div>
                <div className='flex items-center justify-end text-[14px] mt-2 gap-2 cursor-pointer'>
                   <GoPlus className='bg-black border border-white rounded-full text-white'/>
                   <span>Add new beneficiary</span>
                </div>
                <div>
                  <label className="block text-[14px] font-bold mt-5  mb-2">Payment Method</label>
                  <select className="w-full border border-[#CCCCCC] rounded-3xl px-3 py-3 text-sm outline-none">
                    <option value="">-- Select a Payment Method --</option>
                  </select>
                </div>
                  <button className='bg-[#FF0000] text-white w-full mt-10 rounded-3xl px-2 py-2' onClick={handleSubmit}>
                    Send
                  </button>
              </form>
            </div>
          </div>
  )
}

export default SendModal