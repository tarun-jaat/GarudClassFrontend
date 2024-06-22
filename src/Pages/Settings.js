import React from 'react'
import SideBarSetting from '../Components/Core/Setting/SideBarSetting'
import { Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div className='w-full flex bg-[#F5F6FA] h-screen pt-20 px-4'>
      <SideBarSetting/>
        <div className="w-full">
        <Outlet/>
        </div>
    </div>
  )
}

export default Settings