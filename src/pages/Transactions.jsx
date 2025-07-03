import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { CiSearch } from 'react-icons/ci'

import { FiChevronUp } from 'react-icons/fi';
import Calender from "../assets/note.png"
import { TbFilter } from 'react-icons/tb';
import Pagination from '../components/Pagination';
import 'react-datepicker/dist/react-datepicker.css'

const Transactions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='px-3'>
      <h1 className='font-bold text-[18px] '>Transactions</h1>
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <div className='flex flex-col items-center gap-5 mt-[45px] md:flex-row'>
          <div className='flex items-center gap-2 border border-[#CCCCCC]  bg-white rounded-3xl px-3 py-3 w-[350px]'>
            <CiSearch className='text-[20px]' />
            <input type="text" placeholder='Search by Reference,Rate,Channel...' className='w-full outline-none text-sm' />
          </div>
          <div className="flex items-center justify-between  gap-2 border border-[#CCCCCC] bg-white rounded-3xl px-3 py-3 w-full md:[250px]">
            <div className='flex items-center gap-2'>
              <img src={Calender} alt='calender' className="text-gray-500 text-sm" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="outline-none text-sm w-full bg-transparent"
              calendarClassName="rounded-lg"
            />
            </div>
            <FiChevronUp className="text-gray-500 text-sm" />
          </div>
        </div>
        <div className='flex items-center gap-4 mt-[45px] '>
          <div className='flex items-center gap-3 border border-[#CCCCCC] bg-white rounded-3xl px-3 py-3 w-[180px]'>
            <TbFilter className='text-[#1E1E1E80] text-xl' />
            <span className='text-[#1E1E1E80]'>Filter</span>
          </div>
          <button className='bg-[#FF0000] text-white rounded-3xl px-3 py-3 w-[150px]'>
            Apply
          </button>
        </div>
      </div>
      <div className='bg-white overflow-x-auto rounded-xl w-full shadow-[rgba(0,0,0,0.15)_0px_5px_15px] mt-5'>
            <table className="w-full table-auto min-w-[600px] ">
              <thead>
                <tr className='text-[14px] text-[#00000099]'>
                  <th className='text-left py-5 px-5'>S/N</th>
                  <th className='text-left py-5 px-5'>Reference</th>
                  <th className='text-left py-5 px-5'>Amount Sent</th>
                  <th className='text-left py-5 px-5'>Rate</th>
                  <th className='text-left py-5 px-5'>Channel</th>
                  <th className='text-left py-5 px-5'>Recipient</th>
                  <th className='text-left py-5 px-5'>Amount Received</th>
                  <th className='text-left py-5 px-5'>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-[14px] text-[#36394A]'>
                  <td className='text-left px-5 py-5'>1</td>
                  <td className='text-left px-5 py-5'>29459350549604</td>
                  <td className='text-left px-5 py-5'>AUD 120</td>
                  <td className='text-left px-5 py-5'>NGN 1,450</td>
                  <td className='text-left px-5 py-5'>POLi payment</td>
                  <td className='text-left px-5 py-5'>Jonathan smith</td>
                  <td className='text-left px-5 py-5'>NGN 160,000</td>
                  <td className='text-left px-5 py-5 text-[#00D641]'>Sent</td>
                </tr>
                <tr className='text-[14px] text-[#36394A] bg-[#F9F9F9]'>
                  <td className='text-left px-5 py-5'>2</td>
                  <td className='text-left px-5 py-5'>29459350549604</td>
                  <td className='text-left px-5 py-5'>AUD 120</td>
                  <td className='text-left px-5 py-5'>NGN 1,450</td>
                  <td className='text-left px-5 py-5'>POLi payment</td>
                  <td className='text-left px-5 py-5'>Samantha Cook</td>
                  <td className='text-left px-5 py-5'>NGN 160,000</td>
                  <td className='text-left px-5 py-5 text-[#FFBD00]'>Pending</td>
                </tr>
                <tr className='text-[14px] text-[#36394A]'>
                  <td className='text-left px-5 py-5'>3</td>
                  <td className='text-left px-5 py-5'>29459350549604</td>
                  <td className='text-left px-5 py-5'>AUD 120</td>
                  <td className='text-left px-5 py-5'>NGN 1,450</td>
                  <td className='text-left px-5 py-5'>POLi payment</td>
                  <td className='text-left px-5 py-5'>John Pfizier</td>
                  <td className='text-left px-5 py-5'>NGN 160,000</td>
                  <td className='text-left px-5 py-5 text-[#FF0000]'>Failed</td>
                </tr>
                <tr className='text-[14px] text-[#36394A] bg-[#F9F9F9]'>
                  <td className='text-left px-5 py-5'>4</td>
                  <td className='text-left px-5 py-5'>29459350549604</td>
                  <td className='text-left px-5 py-5'>AUD 120</td>
                  <td className='text-left px-5 py-5'>NGN 1,450</td>
                  <td className='text-left px-5 py-5'>POLi payment</td>
                  <td className='text-left px-5 py-5'>Caleb Zhan</td>
                  <td className='text-left px-5 py-5'>NGN 160,000</td>
                  <td className='text-left px-5 py-5 text-[#00D641]'>Sent</td>
                </tr>
                <tr className='text-[14px] text-[#36394A]'>
                  <td className='text-left px-5 py-5'>5</td>
                  <td className='text-left px-5 py-5'>29459350549604</td>
                  <td className='text-left px-5 py-5'>AUD 120</td>
                  <td className='text-left px-5 py-5'>NGN 1,450</td>
                  <td className='text-left px-5 py-5'>POLi payment</td>
                  <td className='text-left px-5 py-5'>Naomi Atambi</td>
                  <td className='text-left px-5 py-5'>NGN 160,000</td>
                  <td className='text-left px-5 py-5 text-[#FF0000]'>Failed</td>
                </tr>
              </tbody>
            </table>
      </div>
      <Pagination/>
    </div>
  )
}

export default Transactions