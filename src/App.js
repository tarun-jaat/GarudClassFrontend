import React from "react";
import './App.css'
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
// import Navbar from "./Components/Common/Navbar";
// import RaiseAnyQuery from "./Components/Common/RaiseAnyQuery";


const routes = [
  {
    path: '/dashboard',
    element: <DashBoard/>,
    children: [
      {
        path: '',
        element: <DashBoardHome />,
      },
      {
        path: 'course',
        element: <Course/>,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
    ],
  },
];

function App() {

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-inter">
<div className=" m-0 md:mt-[90px]">
    <Routes >
      <Route
        path="/"
        element={
          <OpenRoute>
            <Main/>
          </OpenRoute>
        }
      /> 
      
      <Route
      path="/signup"
      element={
        <OpenRoute>
          <SignUpForm/>
        </OpenRoute>
      }
      />
      <Route
      path="/update-password/:id"
      element={
        <OpenRoute>
          <UpdatePassword/>
        </OpenRoute>
      }
      />
      <Route
      path="/login"
      element={
        <OpenRoute>
          <LoginForm/>
        </OpenRoute>
      }
      />
        <Route
      path="/verify-email"
      element={
        <OpenRoute>
          <VerifyEmail/>
       </OpenRoute>
      }
      />
      <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>
          }
        />
        <Route path="/dashboard" element={<DashBoard />}>
        <Route index element={<DashBoardHome />} />
        <Route path="course" element={<Course />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="inbox" element={<Inbox/>} />
      </Route>
        
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
