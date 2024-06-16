import { ACCOUNT_TYPE } from "../Utils/Constants";

export const ProfileDropDown = [
  {
    title: "Profile",
    path: "/dashboard/Profile",
  },
  {
    title: "Insights",
    path: "/dashboard/insights",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    title: "Add Course",
    path: "/dashboard/AddCourse",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    title: "Add Course",
    path: "/dashboard/AddCourse",
    type: ACCOUNT_TYPE.INSTRUCTOR,
  },
  {
    title: "SendEmail",
    path: "/dashboard/Email",
    type: ACCOUNT_TYPE.INSTRUCTOR,
  },
  {
    title: "SendEmail",
    path: "/dashboard/Email",
    type: ACCOUNT_TYPE.ADMIN,
  },
];

