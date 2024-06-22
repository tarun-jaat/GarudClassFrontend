import { FaHouseUser } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";

export const settingsData = [
    {
        title:"User",
        icon: <FaHouseUser/>,
        path:'/dashboard/setting'
    },
    {
      title: "Profile",
      path: "/dashboard/setting/profile",
      icon: <RiUserSettingsLine/>,
    },
    {
      title: "Account",
      path: '/dashboard/setting/account',
      icon: <MdOutlineAccountTree/>,
    },

    {
      title: "Security",
      path: "/dashboard/setting/Security",
      icon: <GrShieldSecurity/>,
    },
    
    

  ];
  