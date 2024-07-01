import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./Components/Core/Auth/Login";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import AddUserFeeData from "./Pages/Admin/AddUserFeeData";
import Main from "./Pages/LandingPage/Main";
import SignUpForm from "./Components/Core/Auth/SignUpForm";
import VerifyEmail from "./Components/Core/Auth/VerifyEmail";
import ForgotPassword from "./Components/Core/Auth/ForgotPassword";
import UpdatePassword from "./Components/Core/Auth/UpdatePassword";
import DashBoard from "./Pages/DashBoard";
import Course from "./Pages/Main/Course";
import DashBoardHome from "./Pages/Main/DashBoardHome";
import Quiz from "./Pages/Main/Quiz";
import Inbox from "./Pages/Main/Inbox";
import AddCourse from "./Components/Dashboard/AddCourse";
import Settings from "./Pages/Settings";
import Profile from "./Components/Core/Setting/Profile";
import Account from "./Components/Core/Setting/Account";
import Security from "./Components/Core/Setting/Security";
import SettingHome from "./Components/Core/Setting/SettingHome";
// import AttemptQuiz from "./Components/QuizPlateform/";
import User from "./Pages/Main/User";
import SingleQuizDetails from "./Components/QuizComponentMain.js/SingleQuizDetails";
import CreateQuiz from "./Components/Dashboard/AddQuiz";
import ConductQuiz from './Components/QuizPlateform'
import Aboutus from "./Components/Common/Aboutus";
import Feeds from "./Components/Core/LandingPage/Feeds";
// import Navbar from "./Components/Common/Navbar";
// import RaiseAnyQuery from "./Components/Common/RaiseAnyQuery";
// import Aggrement from "./Components/QuizComponentMain.js/Aggrement";

const routes = [
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "",
        element: <DashBoardHome />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
    ],
  },
];

function App() {
  return (
    <div className="w-full h-screen border border-pink-300 bg-white flex flex-col font-inter">
      <div className=" m-0 md:mt-[90px]">
        <Routes>
          <Route
            path="/"
            element={
              <OpenRoute>
                <Main />
              </OpenRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <OpenRoute>
                <SignUpForm />
              </OpenRoute>
            }
          />
          <Route
            path="/update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <LoginForm />
              </OpenRoute>
            }
          />
          <Route
            path="/verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          >
            <Route index element={<DashBoardHome />} />
            <Route path="user" element={<User />} />
            <Route path="course" element={<Course />} />
            <Route path="quiz">
              <Route index element={<Quiz />} />
              <Route path=":id" element={<SingleQuizDetails />} />
              <Route path="create-quiz" element={<CreateQuiz />} />
            </Route>
            <Route path="inbox" element={<Inbox />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="setting">
              <Route element={<Settings />}>
                <Route index element={<SettingHome />} />
                <Route path="profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
                <Route path="security" element={<Security />} />
              </Route>
            </Route>
            <Route path="about-us" element={<Aboutus/>}/>
            <Route path="feeds" element={<Feeds/>}/>
          </Route>
          <Route path="/attempt-quiz" element={<ConductQuiz/>}/>
          {/* <Route path="attempt-quiz" element={<AttemptQuiz />} />
          <Route path="aggrement" element={<Aggrement/>}/> */}
          {/* <Route
        path="/fee-data"
        element={
          <PrivateRoute>
            <AddUserFeeData />
          </PrivateRoute>
        }
      /> */}
          {/* <Route
      path="/pepclass"
      element={
        <Class/>
      }
      >
        
      </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
