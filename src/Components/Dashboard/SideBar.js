import React  from "react";
import logo from "../../Assests/Logos/Logo2.png";
import { Link } from "react-router-dom";
import { SideBarData } from "../../Data/SidebarData";
import { matchPath, useLocation } from "react-router-dom"
import { logout } from "../../Services/Operations/authApi";
import { setUser } from "../../Slices/ProfileSlice";
import { setToken } from "../../Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";
import ConfirmationModal from "../Common/ConfirmationModal";
import { useState } from "react";
import './Style.css'
function SideBar() {
  const location = useLocation();
  const { user } = useSelector((state) => state.profile);
  const [confirmationModal, setConfirmationModal] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const settingnavigate = () => {
    window.location.href = "/dashboard/settings";
  };
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  // const handleBeforeUnload = (event) => {
  //   // Perform some cleanup tasks here
  //   console.log('Performing cleanup tasks...');
  // };

//   const handleLogout = () => {
//     handleBeforeUnload()
//     dispatch(setToken(null))
//   dispatch(setUser(null))
//   localStorage.removeItem("token")
//   localStorage.removeItem("user")
//   toast.success("Logged Out")
//   navigate("/")
// };
  

  return (
    <div className="h-[calc(100vh-3.5rem)] min-w-[220px] bg-white">
      <Link to={"/dashboard"}>
        <img src={logo} alt="logo" className="h-16 md:block hidden mx-auto" />
      </Link>
      <div className="mt-8">
        {SideBarData.map((link, index) => {
          if (link.type && user?.accountType !== link.type) return null;
          return (
            <div className={`${matchRoute(link.link)?' text-white border-l-4 p-1 md:px-4  border-[#4880ff]':'bg-transparent px-4 text-black'}
`}>
            <Link
              to={link.link}
              
              key={index}
              className={`flex mt-2 md:px-4 p-1 rounded-xl items-center justify-start md:gap-4 text-black
                ${matchRoute(link.link)?' text-white  bg-[#4880ff]':'bg-transparent text-black'}
             `}
            >
              <div className="flex items-center transition duration-200 ease-in-out hover:bg-[#4880FF] py-[8px] w-full md:px-2 rounded-xl hover:text-white justify-start gap-4">
                <span className="md:text-lg text-3xl ">{link.icon}</span>
                <span className="text-md md:block hidden">{link.title}</span>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
      <div className='horizontal-line'></div>

      <div>
        <Link className="px-8 py-2 flex items-center gap-x-2  text-md font-medium text-richblack-800" to={'dashboard/setting'}>
          <span className="text-xl"><IoSettingsOutline/></span>
          <span className="md:block hidden">Settings</span>
        </Link>
      <button className="px-8 py-2 text-md font-medium text-richblack-800"
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
          >
            <div className="flex items-center gap-x-2">
              <IoIosLogOut className="text-xl" />
              <span>Logout</span>
            </div>
          </button>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

export default SideBar;
