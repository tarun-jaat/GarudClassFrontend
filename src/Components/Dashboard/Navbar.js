import React from "react";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import "./Style.css";
import { IoIosNotifications } from "react-icons/io";
import { FaCartPlus, FaCog } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

// import logo from '../../Assests/Logos/Logo2.png'
function Navbar() {
  const { user,notifications,cart } = useSelector((state) => state.profile);
  if (!user) {
    return null;
  }
  return (
    <div className="h-[70px] b px-3 py-2 float-right bg-white w-full flex items-center justify-between">
     

      {/* <img src={logo} alt="logo" className="h-12 aspect-square md:hidden "/> */}
      <div className="group md:[500px] z-50  w-[10px] ">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input md:w-[500px] md:hover:w-[400px] hover:w-[220px] w-[20px]" />
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
