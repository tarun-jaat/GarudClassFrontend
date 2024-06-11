import React, { useState } from "react";
import Logo from "../../Assests/Logos/Logo2.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavbarDemo } from "../UIComponents/NavBar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };


  const handleMouseOver = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
  return (
    <div className="NavBar fixed z-50 px-2 py-1 h-[50px] md:h-[80px] justify-between w-full flex items-center bg-white shadow-xl shadow-richblack-50">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          className="pl-5 w-[60px] h-[45px] md:w-[110px] md:h-[80px]"
        />
      </Link>
      <div className="flex items-center gap-12">
        <Link
          to={"#"}
          className="flex gap-2 items-center text-black font-inter border-2 px-4 py-3 rounded-full border-blue-200  text-[15px] md:text-[18px]  ease-in-out "
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Classes
          <RiArrowDropDownLine
            className={`text-3xl font-bold ${open ? "rotate-180" : ""}`}
          />
        </Link>

        <NavbarDemo/>
      </div>
      <Link className="px-4 py-3 mr-3 bg-blue-200 text-white font-bold font-inter rounded-2xl hover:border-2 hover:border-blue-200 hover:bg-transparent hover:scale-105 hover:text-blue-200" to={'/'}>
      SignUp
      </Link>
    </div>
  );
}

export default Navbar;
