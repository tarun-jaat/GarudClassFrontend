import { ACCOUNT_TYPE } from "../Utils/Constants";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaBook } from "react-icons/fa";

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
        type:[ACCOUNT_TYPE.ADMIN]
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