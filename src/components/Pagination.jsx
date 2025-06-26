import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center gap-5 justify-end mt-5'>
        <button className='bg-white px-3 py-2 rounded-md'>
            Previous
        </button>
        <div className='flex items-center justify-between gap-3'>
            <span className='bg-[#FF0000] px-5 py-2 rounded-md'>1</span>
            <span className='bg-[#FFFFFF] px-5 py-2 rounded-md '>2</span>
            <span className='bg-[#FFFFFF] px-5 py-2 rounded-md '>3</span>
            <span className='bg-[#FFFFFF] px-5 py-2 rounded-md '>4</span>
            <span className='bg-[#FFFFFF] px-5 py-2 rounded-md '>5</span>
        </div>
        <button className='bg-[#FFE6E6] px-5 py-2 rounded-md text-[#FF0000]'>
            Next
        </button>
    </div>
  )
}

export default Pagination