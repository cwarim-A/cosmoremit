import React, { useState } from 'react'
import { BsGridFill } from 'react-icons/bs'
import { IoLayersOutline, IoNotifications } from 'react-icons/io5'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import Wallet from "../assets/wallet.png"
import Wallet2 from "../assets/wallet2.png"
import { NavLink } from 'react-router-dom'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { motion } from 'framer-motion';
import { LiaTimesSolid } from 'react-icons/lia'
import Success from "../assets/done_all.png"
import Pending from "../assets/Pending.png"
import Failed from "../assets/Failed.png"
import Celebration from "../assets/celebration.png"
import Download from "../assets/download.png"
import Bank from "../assets/bank.png"
import { div } from 'framer-motion/client'
import { MdKeyboardArrowUp } from 'react-icons/md'


const NavItems = [
  {
    id: 1,
    href: "/dashboard",
    name: "Dashboard",
    icon: <BsGridFill />
  },
  {
    id: 2,
    href: "/beneficiaries",
    name: "Beneficiaries",
    icon: <IoLayersOutline />
  },
  {
    id: 3,
    href: "/transactions",
    name: "Transactions",
    icon: <img src={Wallet} alt="Transactions" className="w-4 h-4" />
  },
  {
    id: 4,
    href: "/wallet",
    name: "Wallet",
    icon: <img src={Wallet2} alt="Transactions" className="w-4 h-4" />
  },
  {
    id: 5,
    href: "/upload-document",
    name: "Upload Document",
    icon: <HiOutlineDocumentText />
  }
]

const Notifications = [
  {
    id: 1,
    title: "Transfer Successful",
    icon: Success,
    message: "Your transfer of AUD5,000 to Michael Adewale in Nigeria was successfully completed on April 17, 2025 at 2:45 PM. "
  },
  {
    id: 2,
    title: "Transfer Processing",
    icon: Pending,
    message: "Your transfer of ₦120,000 to Clara Mensah (MTN Mobile Money, Ghana) is currently being processed."
  },
  {
    id: 3,
    title: "Transfer Failed",
    icon: Failed,
    message: "Your transaction to Samuel Jordan in USA failed due to insufficient funds or network issues. Please confirm your payment method and try again."
  }
]

const oldNotifications = [
  {
    id: 1,
    title: "KYC Verification Completed",
    icon: Celebration,
    message: "Congratulations! Your identity verification is complete. You can now send and receive unlimited transfers on Cosmoremit.  "
  },
  {
    id: 2,
    title: "Documents Uploaded",
    icon: Download,
    message: "Your ID and utility bill were successfully uploaded and are under review. This may take up to 24 hours."
  },
  {
    id: 3,
    title: "New Bank Account Added",
    icon: Bank,
    message: "UBA account ending in 6742 has been successfully added to your payout options."
  }
]

const Topbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [active, setActive] = useState(null);
  const [openNotificatons, setOpenNotifications] = useState(false);
  const [openProfile, setOpenProfile] = useState(false)
  const [isBusiness,setIsBusiness] = useState(false)

  return (
    <div className='flex justify-between items-center px-5 py-5 md:px-10 md:py-10 md:justify-between'>
      <div className='md:hidden'>
        <RxHamburgerMenu className='relative text-2xl' onClick={() => setOpenSidebar(!openSidebar)} />
        {openSidebar && (
          <motion.div initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }} className='absolute top-0 left-0 w-full h-screen bg-white z-50 p-5 md:hidden'>
            <div className='flex justify-between items-center mb-7'>
              <img src="/Logo.png" alt="Logo" className='w-[120px]' />
              <LiaTimesSolid className='text-2xl cursor-pointer' onClick={() => setOpenSidebar(false)} />
            </div>

            <ul className=''>
              {
                NavItems.map((item, index) => (
                  <NavLink key={index} to={item.href} onClick={() => { setActive(item.id); setOpenSidebar(false) }} className={`flex items-center gap-2 mt-5  px-3 py-2 ${item.id === active ? "bg-[#FF000021] rounded-2xl" : ""}`}>
                    <span className='text-md'>{item.icon}</span>
                    <span className='text-sm'>{item.name}</span>
                  </NavLink>
                ))
              }
            </ul>
          </motion.div>
        )}
      </div>
      <img src="/Logo.png" alt="" className='hidden md:block w-[150px]' />
      <div className='flex items-center gap-2 md:gap-5'>
        <div className='p-2 rounded-full bg-[#F0F0F0] cursor-pointer' onClick={() => setOpenNotifications(!openNotificatons)}>
          <IoNotifications className='text-[#FF0000] text-xl text-center' />
          {
            openNotificatons && (
              <motion.div initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
                className='absolute w-[400px] top-20 right-5 md:top-20 md:right-5 bg-white shadow-sm rounded-lg  md:w-[500px] md:h-[550px] z-50 font-bricolage overflow-y-auto'>
                <div className="flex items-center justify-between px-10 py-4 font-bricolage">
                  <span className="text-lg font-bold text-gray-800">Notifications</span>
                  <button
                    onClick={() => setOpenNotifications(false)}
                    aria-label="Close notifications"
                    className="bg-[#FFE6E6] text-[#FF0000] p-2 rounded hover:bg-[#ffd6d6] transition"
                  >
                    <LiaTimesSolid className="text-2xl" />
                  </button>
                </div>

                <div className="border-t border-gray-200 px-5" />
                <div className='p-10'>
                  <h2 className='mb-3'>Today</h2>
                  {Notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex flex-col gap-2 bg-[#F6F6F6] p-4 rounded-3xl mb-5"
                    >
                      <div className="flex items-center gap-2">
                        <img src={notification.icon} alt={`${notification.title} icon`} className="w-6 h-6" />
                        <span className="font-medium text-gray-800">{notification.title}</span>
                      </div>
                      <span className="text-sm text-gray-600">{notification.message}</span>
                    </div>
                  ))}
                </div>

                <div className='px-10'>
                  <h2 className='mb-3'>Yesterday</h2>
                  {oldNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex flex-col gap-2 bg-[#F6F6F6] p-4 rounded-3xl mb-5"
                    >
                      <div className="flex items-center gap-2">
                        <img src={notification.icon} alt={`${notification.title} icon`} className="w-6 h-6" />
                        <span className="font-medium text-gray-800">{notification.title}</span>
                      </div>
                      <span className="text-sm text-gray-600">{notification.message}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            )
          }
        </div>

        <div className='relative'>
          <div  className='flex items-center justify-between cursor-pointer gap-2' onClick={() => {
            setOpenProfile(!openProfile)
          }}>
            <div className='w-[30px] h-[30px] border rounded-full bg-white cursor-pointer md:w-[40px] md:h-[40px]'>
              <img src="/avatar.png" alt="Avatar" className='w-full h-full object-cover' />
            </div>
            <div className='hidden  md:flex flex-col'>
              <span className='text-[12px] font-bold md:text-[14px]'>Daniel James</span>
              <span className='text-[10px] text-[#00000080] md:text-[12px]'>Daniel.james@gmail...</span>
            </div>
            {openProfile ? <RiArrowDownSLine /> : <MdKeyboardArrowUp />}
          </div>
          {openProfile && (
            <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded-md w-48 h-[200px] z-50">
              <div className='flex gap-2 p-2'>
                <div className='w-[20px] h-[20px] border rounded-full bg-white cursor-pointer md:w-[30px] md:h-[30px]'>
                  <img src="/avatar.png" alt="Avatar" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[12px]'>Daniel James</span>
                  <span className='text-[#656565] text-[10px]'>Member ID: 123456798</span>
                </div>
              </div>
              <hr />
              <div className='p-2 flex flex-col gap-2'>
                <span className='text-[14px] font-semibold'>Profile Settings</span>
                <span className='text-[14px] font-semibold'>Switch account</span>
                <div className='flex gap-2 items-center'>
                  <span className='text-[14px] text-[#656565]'>Personal</span>
                  <div className='w-[30px] h-[18px] relative  bg-[#ff0000] rounded-3xl' onClick={()=>setIsBusiness(!isBusiness)}>
                      <span className={`absolute top-[2px] left-[2px] w-[14px] h-[14px]  bg-white rounded-full ${isBusiness ? "translate-x-[12px]" : "translate-x-0"}`}></span>
                  </div>
                  <span className='text-[14px] text-[#656565]'>Business</span>
                </div>
                <span className='text-[#ff0000] mt-3 cursor-pointer '>Logout</span>
              </div>
              
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Topbar