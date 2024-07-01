import { ACCOUNT_TYPE } from "../Utils/Constants";
import { RxDashboard } from "react-icons/rx";
import { FaRegBell, FaUsers } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { SiPytest } from "react-icons/si";
import { PiChalkboardTeacher, PiTargetFill } from "react-icons/pi";
import { ImFeed } from "react-icons/im";
import { LuNetwork } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";






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
    {
      title:"Batches",
      icon:<PiChalkboardTeacher/>,
      link:"/dashboard/batches",
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
      title: "Contact",
      path: '/dashboard/contact',
      type: ACCOUNT_TYPE.INSTRUCTOR,
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
      title: "Team",
      path: "dashboard/team",
      type: ACCOUNT_TYPE.INSTRUCTOR,
      icon: <FaUserFriends/>,
    },
    {
      title: "Enrolled Courses",
      path: "dashboard/course",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <BiSolidPurchaseTag/>,
    },
    {
      title: "Test Series",
      path: "dashboard/test-series",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <SiPytest/>,
    },
    {
      title: "Events",
      path: "dashboard/events",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <PiTargetFill/>,
    },
    {
      title: "Events",
      path: "dashboard/events",
      type: ACCOUNT_TYPE.INSTRUCTOR,
      icon: <PiTargetFill/>,
    },
    

  ];
  
export const AboutGarudData=[
  {
    title: "About Us",
    path: "/dashboard/about-us",
    type: ACCOUNT_TYPE.STUDENT,
    icon:<HiOutlineInformationCircle/>
    },
    {
      title: "Feeds",
      path: "/dashboard/feeds",
      type: ACCOUNT_TYPE.STUDENT,
      icon: <ImFeed/>,
      },
      {
        title: "contact Us",
        path: "/dashboard/contactus",
        type: ACCOUNT_TYPE.STUDENT,
        icon: <FaPhoneAlt/>,
        },
        {
          title: "terms and Conditions",
          path: "/dashboard/termsandconditions",
          type: ACCOUNT_TYPE.STUDENT,
          icon: <GoChecklist/>,
          }

]