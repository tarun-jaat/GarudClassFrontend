import React from "react";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import "./Style.css";
import { IoIosNotifications } from "react-icons/io";
import { FaCartPlus, FaCog } from "react-icons/fa";

import { AiOutlineMenu } from "react-icons/ai";

// import logo from '../../Assests/Logos/Logo2.png'
function Navbar() {
  const { user,notifications,cart } = useSelector((state) => state.profile);
  if (!user) {
    return null;
  }
  return (
    <div className="h-[70px] w-full fixed z-10 b px-3 py-2 float-right bg-white flex items-center justify-between">
     

      {/* <img src={logo} alt="logo" className="h-12 aspect-square md:hidden "/> */}
      <div class="relative">
      <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
</div>
      <div className="flex items-center gap-3">
      {user.accountType === 'Student' ? (
          <div className="">
            <FaCartPlus className="cursor-pointer text-[#729dff]" fontSize={24} />
            {cart && cart.length > 0 && (
              <div
                className="absolute top-0 right-0 w-3 h-3 bg-pink-500 rounded-full flex justify-center items-center"
                style={{ top: -5, right: -5 }}
              >
                <span className="text-xs text-white">{cart.length}</span>
              </div>
            )}
          </div>):(
            <FaCog className=" cursor-pointer" fontSize={22}/>
          )
        }
        <div className="relative">
          <IoIosNotifications className="cursor-pointer text-[#729dff]" fontSize={28} />
          {notifications && notifications.length > 0 && (
            <div
              className="absolute top-0 right-0 w-3 h-3 bg-pink-500 rounded-full"
              style={{ top: -5, right: -5 }}
            />
          )}
        </div>
      <ProfileDropdown />
      </div>
      
      
    </div>
  );
}

export default Navbar;
