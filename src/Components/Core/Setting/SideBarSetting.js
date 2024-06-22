import React from "react";
import { settingsData } from "../../../Data/SettingSideBarData";
import { matchPath, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBarSetting() {
  const location = useLocation();
  console.log(settingsData);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="h-fit  w-fit bg-secondary ">
      <div>
      {settingsData && settingsData.map ((link, index) => {
        <div
          className={`${
            matchRoute(link.path)
              ? " text-white border-l-4 p-1 md:px-4  border-[#4880ff]"
              : "bg-transparent px-4 text-black"
          }
`}
        >
          <Link
            to={link.path}
            key={index}
            className={`flex mt-2 md:px-4 p-1 rounded-xl items-center justify-start md:gap-4 text-black
              ${
                matchRoute(link.path)
                  ? " text-white  bg-[#4880ff]"
                  : "bg-transparent text-black"
              }
           `}
          >
            <div className="flex items-center transition duration-200 ease-in-out hover:bg-[#4880FF] py-[8px] w-full md:px-2 rounded-xl hover:text-white justify-start gap-4">
              <span className="md:text-lg text-3xl ">{link.icon}</span>
              <span className="text-md md:block hidden">{link.title}</span>
            </div>
          </Link>
        </div>;
      })}
      </div>
      
    </div>
  );
}

export default SideBarSetting;
