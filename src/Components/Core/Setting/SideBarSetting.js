import React from "react";
import { settingsData } from "../../../Data/SettingSideBarData";
import { matchPath, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBarSetting() {
  console.log("*******HEllo");
  const location = useLocation();
  console.log(settingsData);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="h-fit  w-fit border border-richblack-500 rounded-xl bg-white ">
      <div>
        {settingsData &&
          settingsData.map(({path, icon, title}, index) => (
            <div
              className={`${
                matchRoute(path)
                  ? " text-white border-l-4 p-1 md:px-4  border-[#4880ff]"
                  : "bg-transparent px-4 text-black"
              }`}
            >
              <Link
                to={path}
                key={index}
                className={`flex mt-2 md:px-4 p-1 rounded-xl items-center justify-start md:gap-4 text-black
                    ${
                      matchRoute(path)
                        ? " text-white  bg-[#4880ff]"
                        : "bg-transparent text-black"
                    }
              `}
              >
                <div className="flex items-center transition duration-200 ease-in-out hover:bg-[#4880FF] py-[8px] w-full md:px-2 rounded-xl hover:text-white justify-start gap-4">
                  <span className="md:text-lg text-3xl ">{icon}</span>
                  <span className="text-md md:block hidden">{title}</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SideBarSetting;
