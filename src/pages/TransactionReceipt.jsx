import React from 'react'
import Alert from "../assets/alert-01.png"
import Loading from "../assets/loading-01.png"
import { useNavigate } from 'react-router-dom'

const TransactionReceipt = () => {
    const navigate = useNavigate()
    return (
        <div className='px-10  font-bricolage'>
            <h1 className='font-bold text-[22px]'>Transaction receipt</h1>
            <div className='mt-4 flex flex-col gap-2'>
                <img src={Alert} alt="Alert" className='w-[30px] h-[30px]' />
                <span className='text-[#ff0000]'>For Bank transfers/PayID, your transaction would be processed upon payment confirmation in our bank account</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-7 mt-20'>
                <img src={Loading} alt="Loading Icon" />
                <div className='flex flex-col items-center gap-3 '>
                    <h1 className='font-bold text-[25px]'>Transaction processing</h1>
                    <span className=' text-[14px] text-[#656565]'>$450 is been process for payment to Elizabeth Parker</span>
                </div>
            </div>
            <div className='flex flex-col items-center mt-20 '>
                <div className='flex justify-between w-[50%]'>
                    <h2 className='text-[#656565]'>Sender</h2>
                    <span className='font-bold'>Alex Banner</span>
                </div>
                <div className='flex justify-between w-[50%] mt-5'>
                    <h2 className='text-[#656565]'>Beneficiary</h2>
                    <span className='font-bold'>Elizabeth Parker</span>
                </div>
                <div className='flex justify-between w-[50%] mt-5'>
                    <h2 className='text-[#656565]'>Amount Sent</h2>
                    <span className='font-bold'>$450</span>
                </div>
                <div className='flex justify-between w-[50%] mt-5'>
                    <h2 className='text-[#656565]'>Beneficiary receives</h2>
                    <span className='font-bold'>#550,000</span>
                </div>
                <div className='flex justify-between w-[50%] mt-5'>
                    <h2 className='text-[#656565]'>Transaction reference number</h2>
                    <span className='font-bold'>888463369785178449</span>
                </div>
                <button className='bg-[#ff0000] text-white mt-20 w-[50%] py-2 px-3 rounded-3xl' onClick={()=>navigate("/")}>Go home</button>
            </div>
            
        </div>
    )
}

export default TransactionReceipt