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
  const [send,setSend] = useState(false)
  const navigate = useNavigate();

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

  const closeModal = ()=>{
    setSend(false)
  }

  return (
    <div className='px-3'>
      <h1 className='text-xl font-bold'>Beneficiaries</h1>
      <div className='flex items-center justify-end gap-3 mt-5'>
        <div className='flex items-center gap-2 border  bg-white rounded-3xl px-3 py-3 w-[300px]'>
          <CiSearch className='text-[20px]' />
          <input type="text" placeholder='Search by name' className='w-full outline-none text-sm' />
        </div>
        <button className='flex items-center justify-center gap-2 bg-[#FF0000] text-white rounded-3xl px-3 py-3 w-[250px]  '>
          <GoPlus />
          <span className='text-sm' onClick={() => {
            navigate("/beneficiaries/add-beneficiary")
          }}>Add New Beneficiaries</span>
        </button>
      </div>
      <div className='bg-white  rounded-xl w-full shadow-[rgba(0,0,0,0.15)_0px_5px_15px] mt-5'>
        <table className='w-full'>
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
              >
                <td className='py-4 px-5'>{index + 1}.</td>
                <td className='py-4'>{beneficiary.Account_name}</td>
                <td className='py-4' >{beneficiary.country}</td>
                <td className='py-4 flex gap-3 '>
                  <button className='flex items-center gap-2 bg-[#E7E7E7] py-2 px-3 rounded-md ' onClick={() => setView(true)}>
                    <FiEye />
                    View
                  </button>
                  <button className='flex items-center gap-2 bg-[#FFDFDF] py-2 px-3 rounded-md text-[#FF0000]' onClick={() => setOnDelete(true)}>
                    <BsTrash />
                    Delete
                  </button>
                  <button className='flex items-center gap-2 bg-[#DBDBFF] py-2 px-3 rounded-md text-[#000080] ' onClick={()=>setSend(true)}>
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
        view && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg  w-[700px] h-[300px]'>
              <div className='flex justify-end px-5 py-3'>
                <MdClose className='text-[15px]  cursor-pointer' onClick={() => setView(false)} />
              </div>
              <hr />
              <div className='flex items-center gap-3 p-5'>
                <span className='bg-[#FF000026] h-[35px] w-[35px] rounded-full flex items-center justify-center'>CS</span>
                <div className='flex flex-col'>
                  <h1 className='text-[13px]'>Cynthia Smith</h1>
                  <span className='text-[#1E1E1E80] text-[10px]'>Date created . 28th Mar, 2025</span>
                </div>
              </div>
              <div className='px-5 '>
                <h2 className='font-bold mb-5'>Bank account details</h2>
                <div>
                  <table className='w-full table-auto'>
                    <thead>
                      <tr className='bg-[#000080] text-white text-[14px] '>
                        <th className='text-left py-3 px-4 rounded-tl-md rounded-bl-md '>Account name</th>
                        <th className='text-left py-3 px-4  '>Bank</th>
                        <th className='text-left py-3 px-4 '>Bank location</th>
                        <th className='text-left py-3 px-4 '>Account Type</th>
                        <th className='text-left py-3 rounded-tr-md rounded-br-md'>Account Number</th>
                      </tr>
                    </thead>
                    <tbody >
                      <tr className='text-sm'>
                        <td className='text-left py-5 px-4 '>Cynthia Smith</td>
                        <td className='text-left py-5 px-4 '>CTI</td>
                        <td className='text-left py-5 px-4'>Lorem ipsum</td>
                        <td className='text-left py-5 px-4'>Pound Account</td>
                        <td className='text-left py-5 '>
                          <div className="flex items-center gap-5">
                            <span>23, Lorem ipsum ave.</span>
                            <FiEdit className="cursor-pointer text-[16px] text-[#000080]" />
                          </div>
                        </td>
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