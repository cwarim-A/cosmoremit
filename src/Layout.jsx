import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Topbar from './components/Topbar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        {/* Top Navigation */}
        <Topbar/>
        
    <div className='flex flex-1 overflow-hidden '>
        <aside className="w-[250px] bg-white overflow-y-auto">
             <Sidebar  />
        </aside>
      
      <main className="flex-1 overflow-y-auto px-4 py-10 bg-[#F1F1F1] rounded-xl ">   
        <Outlet />
      </main>
    </div>
    </div>
  )
}

export default Layout