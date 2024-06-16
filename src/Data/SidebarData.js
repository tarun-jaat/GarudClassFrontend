import { ACCOUNT_TYPE } from "../Utils/Constants";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { SiPytest } from "react-icons/si";

export const SideBarData=[
    {
        title:"Dashboard",
        icon:<RxDashboard/>,
        link:"/dashboard",
        // type:ACCOUNT_TYPE.STUDENT
    },
    {
        title:"User",
        icon:<FaUsers/>,
        link:"/dashboard/user",
        type:ACCOUNT_TYPE.ADMIN
    },
    {
        title:"Inbox",
        icon:<TiMessages/>,
        link:"/dashboard/inbox",
        // type:[ACCOUNT_TYPE.ADMIN,ACCOUNT_TYPE.INSTRUCTOR,ACCOUNT_TYPE.STUDENT]
    },
    {
        title:"Quiz",
        icon:<MdOutlineAssignmentTurnedIn/>,
        link:"/dashboard/quiz",
        // type:[ACCOUNT_TYPE.ADMIN,ACCOUNT_TYPE.INSTRUCTOR,ACCOUNT_TYPE.STUDENT]
    },
    
    {
        title:"Courses",
        icon:<FaBook/>,
        link:"/dashboard/course",
        // type:[ACCOUNT_TYPE.ADMIN,ACCOUNT_TYPE.INSTRUCTOR,ACCOUNT_TYPE.STUDENT]   
    },
]

export const OtherData = [
    {
      title: "Calender",
      path: "/dashboard/event",
      type: ACCOUNT_TYPE.ADMIN,
      icon: <IoCalendarOutline/>,
    },
    {
      title: "Contact",
      path: '/dashboard/contact',
      type: ACCOUNT_TYPE.ADMIN,
      icon: <MdConnectWithoutContact/>,
    },
    {
      title: "Finance",
      path: "/dashboard/finance",
      type: ACCOUNT_TYPE.ADMIN,
      icon: <MdOutlineAccountBalanceWallet/>,
    },
    {
      title: "Team",
      path: "dashboard/team",
      type: ACCOUNT_TYPE.ADMIN,
      icon: <FaUserFriends/>,
    },
    {
      title: "Enrolled Courses",
      path: "dashboard/mycourse",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <BiSolidPurchaseTag/>,
    },
    {
      title: "Test Series",
      path: "dashboard/test-series",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <SiPytest/>,
    },
    

  ];
  