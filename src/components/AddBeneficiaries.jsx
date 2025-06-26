
import { GoPlus } from 'react-icons/go'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const AddBeneficiaries = () => {
    const navigate = useNavigate();
  return (
    <div className='px-5'>
        <div className='flex items-center gap-5'>
            <IoArrowBackOutline className='text-2xl text-blue-500 cursor-pointer' onClick={()=>navigate("/beneficiaries")} />
            <h1 className='text-xl font-bold'>Add new Beneficiary</h1>
        </div>
        <div className=' flex items-center justify-center m-auto mt-12 px-10'>
            <div className='bg-white rounded-xl p-10 w-[55%] '>
                <h1 className='text-lg font-bold mb-5'>Beneficiary Details</h1>
                <form>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Fullname (As appeared on ID card)</label>
                        <input type="text" placeholder='Beneficiary fullname here' className='px-2 py-1 border rounded-2xl outline-none w-full' />
                    </div>
                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Country</label>
                            <select name="country" id="" className='border py-1 px-2 rounded-2xl outline-none w-full'>
                                <option value="">Select country</option>
                            </select>
                        </div>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Phone number</label>
                            <input type="text" placeholder='Beneficiary Phone number' className='border py-1 px-2 rounded-2xl outline-none w-full' />
                        </div>
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1 mt-5'>Address</label>
                        <input type="text" placeholder='Beneficiary Address ' className='px-2 py-1 border rounded-2xl outline-none w-full' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1 mt-5'>Suburb/City</label>
                        <input type="text" placeholder='Beneficiary suburb/city ' className='px-2 py-1 border rounded-2xl outline-none w-full' />
                    </div>
                    <h2 className='text-lg font-bold mt-5'>Beneficiary bank account details</h2>
                    <span className='text-[#FF0000] text-[12px] mt-3'>Please enter the correct beneficiary account information to prevent potential delays in the transaction process.</span>
                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Account name</label>
                            <input type="text" placeholder='Beneficiary bank account name' className='border py-1 px-2 rounded-2xl outline-none w-full' />
                        </div>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Bank</label>
                            <select name="bank" id="" className='border py-1 px-2 rounded-2xl outline-none w-full'>
                                <option value="">Select beneficiary bank</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Account number</label>
                            <input type="text" placeholder='Beneficiary bank account number' className='border py-1 px-2 rounded-2xl outline-none w-full' />
                        </div>
                        <div className='flex-1 mt-5'>
                            <label className='block text-sm mb-1'>Bank location</label>
                            <input type="text" placeholder='Beneficiary bank location' className='border py-1 px-2 rounded-2xl outline-none w-full' />
                        </div>
                    </div>
                    <span className='flex items-center gap-3 bg-[#F2F2F2] rounded-2xl justify-center m-auto mt-7 py-1 w-[50%]'>
                        <GoPlus />
                        Add new Bank Details
                    </span>
                    <button className='bg-[#FF0000] text-white py-3 px-2 rounded-full w-full mt-7'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBeneficiaries