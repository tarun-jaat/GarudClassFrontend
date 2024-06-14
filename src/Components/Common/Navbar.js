import React, { useState } from "react";
import Logo from "../../Assests/Logos/Logo2.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavbarDemo } from "../UIComponents/NavBar";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

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
    <div className="NavBar  fixed z-50 px-2 py-1 h-[70px] md:h-[80px] justify-between w-full flex items-center bg-white shadow-xl shadow-richblack-50">
      <Link to={"/"} className="md:float-left float-right">
        <img
          src={Logo}
          alt="logo"
          className="pl-5 w-[80px] h-[55px] md:w-[110px] md:h-[80px]"
        />
      </Link>
      <div className="flex items-center gap-12">
        <Link
          to={"#"}
          className=" gap-0 md:gap-2 items-center md:flex hidden text-black font-inter border-2 px-2 py-1 md:px-4  md:py-3 rounded-full border-blue-200  text-[15px] md:text-[18px]  ease-in-out "
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Classes
          <RiArrowDropDownLine
            className={`text-3xl font-bold ${open ? "rotate-180" : ""}`}
          />
        </Link>
        <div className="hidden md:block">
          <NavbarDemo />
        </div>
      </div>
      <Link
        className="md:px-4 hidden md:block  md:py-3 p-2 mr-3 bg-blue-200 text-white md:font-bold font-inter rounded-2xl hover:border-2 hover:border-blue-200 hover:scale-105 hover:text-blue-200"
        to={"/signup"}
      >
        SignUp
      </Link>
      <button className="mr-4 md:hidden">
        <AiOutlineMenu fontSize={24} fill="#0009" />
      </button>
    </div>
  );
}

export default Navbar;
