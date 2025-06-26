import React, { useState } from 'react'
import { BsGridFill } from 'react-icons/bs'
import { IoLayersOutline } from 'react-icons/io5'
import Wallet from "../assets/wallet.png"
import Wallet2 from "../assets/wallet.png"
import { HiOutlineDocumentText } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { CiSettings } from 'react-icons/ci'
import { RiArrowDownSLine } from 'react-icons/ri'



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



const Sidebar = () => {
    const [active, setActive] = useState(1)
    return (
        <div className='px-10'>
            <ul className=''>
                {
                    NavItems.map((item, index) => (
                        <NavLink key={index} to={item.href} onClick={() => setActive(item.id)} className={`flex items-center gap-2 mt-5  px-3 py-2 ${active && item.id === active ? "bg-[#FF000021] rounded-2xl" : ""}`}>
                            <span className='text-md'>{item.icon}</span>
                            <span className='text-sm'>{item.name}</span>
                        </NavLink>
                    ))
                }
            </ul>
            <div className='flex items-center px-3 py-7 justify-between'>
                <div className='flex items-center gap-1'>
                    <span className='text-xl'><CiSettings /></span>
                    <span className='text-sm'>Settings</span>
                </div>
                <RiArrowDownSLine className='text-xl' />
            </div>
        </div>
    )
}

export default Sidebar