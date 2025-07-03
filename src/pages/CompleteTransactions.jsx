import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const CompleteTransactions = () => {
    const [bonus, setBonus] = useState(false)
    const [agree, setAgree] = useState({
        confirm: false,
        review: false,
        overLimit: false,
    })

    const navigate = useNavigate("/")

    const completeTransaction = (e)=>{
        e.preventDefault();
        navigate("/transaction-receipt")
    }

    return (
        <div className='px-3'>
            <h1 className='font-bold text-lg mb-7'>Complete Transfer to <span className="text-[#ff0000]  font-bold">Williams John</span></h1>
            <div className='flex  justify-between  '>
                <div className='w-[45%] flex flex-col gap-5  '>
                    <div className='bg-white px-10 py-7 rounded-md'>
                        <h2 className='text-center mb-5'>Complete Transaction</h2>
                        {/* Beneficiary */}
                        <div>
                            <label className="block mb-3 font-semibold text-sm">Select a beneficiary account</label>
                            <div className="flex items-center border px-3 py-3 rounded-md bg-white w-[95%]">
                                <input type="text" value="0192648255" className="flex-1 outline-none" />
                                <MdKeyboardArrowDown />
                            </div>
                        </div>
                        {/* Source of Funds */}
                        <div>
                            <label className="block mb-3 mt-5  text-sm">Source of funds</label>
                            <select className=" border px-3 py-3 rounded-md outline-none w-[95%]">
                                <option>Select Source of funds</option>
                            </select>
                        </div>
                        {/* Reason */}
                        <div>
                            <label className="block mb-3 mt-5 text-sm">Reason</label>
                            <select className=" border px-3 py-3 rounded-md outline-none w-[95%]">
                                <option>Select Reason</option>
                            </select>
                        </div>
                        {/* Toggle */}
                        <div className='flex mt-5 gap-5'>
                            <span className='text-sm font-bold'>Claim Referral Bonus</span>
                            <div className={`relative w-[30px] h-[18px] rounded-xl bg-[#656565] ${bonus ? "bg-[#ff0000]" : ""}`} onClick={() => setBonus(!bonus)}>
                                <span className={`absolute top-[1px] w-[15px] h-[15px] rounded-full shadow-md bg-white ${bonus ? "translate-x-4" : "translate-x-0"}`}></span>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white px-10 py-7 rounded-md'>
                        {/* Checkboxes */}
                        <div className="space-y-3 text-xs mt-4">
                            <label className="flex gap-2 items-start">
                                <input
                                    type="checkbox"
                                    checked={agree.confirm}
                                    onChange={(e) => setAgree({ ...agree, confirm: e.target.checked })}
                                />
                                Transaction completes after payment confirmation. Large
                                payments may take up to 24 hours. The rate is locked and
                                won't change, even if the transaction fails
                            </label>
                            <label className="flex gap-2 items-start">
                                <input
                                    type="checkbox"
                                    checked={agree.review}
                                    onChange={(e) => setAgree({ ...agree, review: e.target.checked })}
                                />

                                <span className="text-[#ff0000] font-semibold">Review details carefully. Incorrect payments may be
                                    unrecoverable. By checking the box, you agree to
                                    proceed and accept our <span className='underline'> Terms & Conditions </span>
                                </span>
                            </label>
                            <label className="flex gap-2 items-start text-[#ff0000]">
                                <input
                                    type="checkbox"
                                    checked={agree.overLimit}
                                    onChange={(e) => setAgree({ ...agree, overLimit: e.target.checked })}
                                />
                                Over $7,500/month may need proof of funds (payslips,
                                bank statement). Personal needs not considered.
                            </label>
                        </div>
                        <div className="flex items-center mt-6 gap-5">
                            <button className="border px-4 py-2 w-[40%] rounded-2xl text-sm font-semibold bg-black text-white">Back</button>
                            <button className="bg-[#ff0000] w-full  text-white px-6 py-2 rounded-2xl font-semibold" onClick={completeTransaction}>Finish</button>
                        </div>
                    </div>
                </div>
                <div className=' w-[50%]'>
                    <div className=' bg-[#f1f1f1]  rounded-2xl py-3'>
                        <label className="block text-[#656565] text-[14px]  px-4 ">You send</label>
                        <div className=" px-4 py-1  flex justify-between">
                            <span>320</span>
                            <span>AUD</span>
                        </div>
                    </div>
                    <div className=' bg-[#f1f1f1]  rounded-2xl mt-8 py-2'>
                        <label className="block text-[#656565] text-[14px]  px-4 ">Payment Method</label>
                        <span className='px-4 py-1 font-semibold mb-2'>Bank transfer/PayID</span>
                    </div>
                    <div className='bg-[#FFE6E6] flex items-center justify-center gap-3 px-4 py-4 mt-8 '>
                        {/* Left: Vertical Dots and Line */}
                        <div className="flex flex-col items-center ">
                            <span className="w-3 h-3 bg-[#ff0000] rounded-full"></span>
                            <div className="w-[2px] h-8 bg-[#ff0000]"></div>
                            <span className="w-3 h-3 bg-[#ff0000] rounded-full"></span>
                        </div>
                        {/* Right: Text Content */}
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#656565]">Current Rates (24 hrs)</span>
                                <span className="font-bold">1 AUD = 1015 NGN</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#656565]">Fee</span>
                                <span className="font-bold">3 AUD</span>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#f1f1f1]  rounded-2xl mt-8 py-3'>
                        <label className="block text-[#656565] text-[14px]  px-4 ">Reciepient Gets</label>
                        <div className=" px-4 py-1  flex justify-between">
                            <span>320</span>
                            <span>NIG</span>
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                        <h2>Bank Transfers/PayID is Seamless.</h2>
                        <span className='text-[#FF0000] text-[16px]'>Bank transfers & PayID are now instant. Ensure you include your
                            <span className='font-bold'> Transaction Ref. NUMBER</span> in the <span className='font-bold'>DESCRIPTION or MESSAGE</span> box for
                            prompt processing.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteTransactions
