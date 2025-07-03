import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FiEdit, FiEye } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { MdClose, MdSend } from 'react-icons/md'
import Pagination from '../components/Pagination'
import { Navigate, useNavigate } from 'react-router-dom'
import Delete from '../assets/delete.png'
import Success from "../assets/success.png"
import Flag from 'react-world-flags'
import { LiaTimesSolid } from 'react-icons/lia'
import SendModal from '../components/SendModal'


const Beneficiaries = () => {
  const [view, setView] = useState(false)
  const [onDelete, setOnDelete] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [send, setSend] = useState(false)
  const [addBeneficiary, setAddBeneficiary] = useState(false)
  
  const navigate = useNavigate()

  const beneficiaries = [
    {
      id: 1,
      Account_name: 'Cynthia Smith',
      country: 'Australia',

    },
    {
      id: 2,
      Account_name: 'Daniel James',
      country: 'Nigeria',
    },
    {
      id: 3,
      Account_name: 'John Doe',
      country: 'United States of America',
    },
    {
      id: 4,
      Account_name: 'Alice Johnson',
      country: 'Canada'
    },
    {
      id: 5,
      Account_name: 'Michael Brown',
      country: 'United Kingdom'
    }
  ]

  const closeModal = () => {
    setSend(false)
  }

  return (
    <div className='px-3'>
      <h1 className='text-xl font-bold'>Beneficiaries</h1>
      <div className='flex flex-col items-center justify-center gap-5 md:justify-end md:flex-row md:gap-3 mt-5'>
        <div className='flex items-center gap-2 border  bg-white rounded-3xl px-3 py-3 w-[300px]'>
          <CiSearch className='text-[20px]' />
          <input type="text" placeholder='Search by name' className='w-full outline-none text-sm' />
        </div>
        <button className='flex items-center justify-center gap-2 bg-[#FF0000] text-white rounded-3xl px-3 py-3 w-[300px] md:w-[250px]' onClick={() => setAddBeneficiary(true)}>
          <GoPlus />
          <span className='text-[12px] md:text-sm' >Add New Beneficiaries</span>
        </button>
      </div>
      <div className='bg-white overflow-x-auto rounded-xl w-full shadow-[rgba(0,0,0,0.15)_0px_5px_15px] mt-5'>
        <table className='w-full min-w-[600px]'>
          <thead>
            <tr className=' '>
              <th className='text-left py-5 px-5'>S/N</th>
              <th className='text-left py-5 '>Account Name</th>
              <th className='text-left py-5'>Country</th>
              <th className='text-left py-5'>Status</th>

            </tr>
          </thead>
          <tbody className="mt-3">

            {beneficiaries.map((beneficiary, index) => (

              <tr style={{
                backgroundColor: (index + 1) % 2 === 0 ? '' : '#F9F9F9',
              }}
                key={index}
              >
                <td className='py-3 px-5'>{index + 1}.</td>
                <td className='py-3'>{beneficiary.Account_name}</td>
                <td className='py-3' >{beneficiary.country}</td>
                <td className='py-3 flex gap-3 '>
                  <button className='flex items-center gap-2 bg-[#E7E7E7] py-2 px-3 rounded-md ' onClick={() => setView(true)}>
                    <FiEye />
                    View
                  </button>
                  <button className='flex items-center gap-2 bg-[#FFDFDF] py-2 px-3 rounded-md text-[#FF0000]' onClick={() => setOnDelete(true)}>
                    <BsTrash />
                    Delete
                  </button>
                  <button className='flex items-center gap-2 bg-[#DBDBFF] py-2 px-3 rounded-md text-[#000080] ' onClick={() => setSend(true)}>
                    <MdSend />
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
      {
        addBeneficiary && (
          <div className='fixed top-0 left-0 w-full h-full bg-[#D9D9D996] bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white w-[80%] md:w-[50%] h-auto max-h-[90vh] overflow-y-auto p-5 font-bricolage rounded-3xl '>
              <h1 className='font-bold text-xl mb-10'>Add new Beneficiary</h1>
              <form>
                <div className='px-2'>
                  <label className='block text-sm font-medium mb-1'>Fullname (As appeared on ID card)</label>
                  <input type="text" placeholder='Beneficiary fullname here' className='px-2 py-2 border rounded-2xl outline-none w-full' />
                </div>
                <div className='flex flex-col items-center gap-5 justify-between md:flex-row'>
                  <div className='flex-1 mt-5 w-full'>
                    <label className='block text-sm mb-1'>Country</label>
                    <select name="country" id="" className='border py-3 px-2 rounded-2xl outline-none w-full'>
                      <option value="">Select country</option>
                    </select>
                  </div>
                  <div className='flex-1 mt-5 w-full'>
                    <label className='block text-sm mb-1'>Phone number</label>
                    <input type="text" placeholder='Beneficiary Phone number' className='border py-2 px-2 rounded-2xl outline-none w-full' />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium mb-1 mt-5'>Address</label>
                  <input type="text" placeholder='Beneficiary Address ' className='px-2 py-2 border rounded-2xl outline-none w-full' />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-1 mt-5'>Suburb/City</label>
                  <input type="text" placeholder='Beneficiary suburb/city ' className='px-2 py-2 border rounded-2xl outline-none w-full' />
                </div>
                <h2 className='text-lg font-bold mt-5'>Beneficiary bank account details</h2>
                <span className='text-[#FF0000] text-[12px] mt-3'>Please enter the correct beneficiary account information to prevent potential delays in the transaction process.</span>
                <div className='flex flex-col items-center gap-5 justify-between md:flex-row'>
                  <div className='flex-1 mt-5 w-full'>
                    <label className='block text-sm mb-1'>Account name</label>
                    <input type="text" placeholder='Beneficiary bank account name' className='border py-2 px-2 rounded-2xl outline-none w-full' />
                  </div>
                  <div className='flex-1 md:mt-5 w-full'>
                    <label className='block text-sm mb-1'>Bank</label>
                    <select name="bank" id="" className='border py-3 px-2 rounded-2xl outline-none w-full'>
                      <option value="">Select beneficiary bank</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-5 justify-between md:flex-row'>
                  <div className='flex-1 mt-5 w-full'>
                    <label className='block text-sm mb-1'>Account number</label>
                    <input type="text" placeholder='Beneficiary bank account number' className='border py-2 px-2 rounded-2xl outline-none w-full' />
                  </div>
                  <div className='flex-1 md:mt-5 w-full'>
                    <label className='block text-sm mb-1'>Bank location</label>
                    <input type="text" placeholder='Beneficiary bank location' className='border py-2 px-2 rounded-2xl outline-none w-full' />
                  </div>
                </div>
                <button className='flex items-center gap-3 bg-[#FFE6E6] text-[#ff0000] rounded-2xl justify-center m-auto mt-7 py-2 px-3 md:w-[35%]'>
                  <GoPlus className='border border-[#ff0000] rounded-full' />
                  Add new Bank Details
                </button>
                <div className='flex items-center gap-5 mb-5'>
                  <button className='bg-[#E6E6E6] text-black py-3 px-2 rounded-full w-full mt-7' onClick={()=>{
                    navigate("/beneficiaries")
                  }}>
                    Back
                  </button>
                  <button className='bg-[#FF0000] text-white py-3 px-2 rounded-full w-full mt-7'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }
      {
        view && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-3xl  w-[700px] h-[250px] font-bricolage'>
              <div className='flex items-center justify-between px-5 '>
                <div className='flex flex-col  py-5'>
                  <h2 className='text-2xl font-bold'>Beneficiary</h2>
                  <span className='text-[#656565]'>Beneficiary details </span>
                </div>
                <div className='bg-[#FFE6E6] p-1 rounded-md'>
                  <MdClose className='text-4xl text-[#ff0000]  cursor-pointer' onClick={() => setView(false)} />
                </div>
              </div>
              <hr className='mb-5' />
              <div className=' '>

                <div className=''>
                  <table className='w-full table-auto'>
                    <thead>
                      <tr className='bg-[#F6F6F6] text-[#656565] text-[14px] '>
                        <th className='text-left py-3 px-4 rounded-tl-md rounded-bl-md '>Account name</th>
                        <th className='text-left py-3 px-4  '>Country</th>
                        <th className='text-left py-3 px-4 '>Bank location</th>
                        <th className='text-left py-3 px-4'>Account Number</th>
                      </tr>
                    </thead>
                    <tbody >
                      <tr className='text-sm'>
                        <td className='text-left py-5 px-4 '>Cynthia Smith</td>
                        <td className='text-left py-5 px-4 '>United States of America</td>
                        <td className='text-left py-5 px-4'>New York</td>
                        <td className='text-left py-5 px-4'>122435459847</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        onDelete && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50' >
            <div className='bg-white rounded-3xl  w-[400px] h-[280px] flex flex-col'>
              <div className='flex justify-end px-5 py-3'>
                <MdClose className='text-[15px]  cursor-pointer' onClick={() => setOnDelete(false)} />
              </div>
              <hr />
              <div className='flex flex-col items-center justify-center mt-5 gap-3  '>
                <img src={Delete} alt="Delete" className='w-[50px] h-[50px]' />
                <h2 className='text-[16px] font-600'>Delete Beneficiary</h2>
                <span className='text-[12px] text-[#00000080] '>Are you sure you want to delete this recipient/Beneficiary?</span>
              </div>
              <div className='flex items- center justify-center mt-10 gap-5 px-7'>
                <button className='bg-[#A0A0A0] text-white flex-1 py-2 rounded-3xl text-[12px]' onClick={() => setOnDelete(false)}>No,Cancel</button>
                <button className='bg-[#FF0000] text-white flex-1 py-2 rounded-3xl text-[12px]' onClick={() => {
                  setOnDelete(false)
                  setConfirmDelete(true)
                }}>Yes,Delete</button>
              </div>
            </div>
          </div>
        )
      }
      {
        confirmDelete && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={() => setConfirmDelete(false)}>
            <div className='bg-white w-[360px] h-[280px] rounded-3xl'>
              <div className='flex justify-end px-5 py-3'>
                <MdClose className='text-[15px]  cursor-pointer' onClick={() => setOnDelete(false)} />
              </div>
              <hr />
              <div className='flex flex-col items-center justify-center mt-5 gap-3 px-7 '>
                <img src={Success} alt="Delete" className='w-[50px] h-[50px]' />
                <h2 className='text-[16px] font-600'>Delete Beneficiary</h2>
                <span className='text-[12px] text-[#00000080] '>You have successfully deleted a recipient/beneficiary </span>
                <button className='bg-[#FF0000] text-white w-full  py-2 rounded-3xl text-[12px] mt-2' onClick={() => {
                  setOnDelete(false)
                  setConfirmDelete(true)
                }}>Continue</button>
              </div>

            </div>
          </div>
        )
      }
      {
        send && (
          <SendModal close={closeModal} />
        )
      }
    </div>
  )
}

export default Beneficiaries