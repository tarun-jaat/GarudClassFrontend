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
    <div className="h-[70px] w-full fixed z-10 b px-3 py-2 float-right bg-white flex items-center justify-between">
     

      {/* <img src={logo} alt="logo" className="h-12 aspect-square md:hidden "/> */}
      <div class="relative">
  {/* <input
    placeholder="Search..."
    class="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
    name="search"
    type="search"
  />
  <svg
    class="size-6 absolute top-3 right-3 text-gray-500"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg> */}
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
