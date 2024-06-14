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
// import Navbar from "./Components/Common/Navbar";
// import RaiseAnyQuery from "./Components/Common/RaiseAnyQuery";
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
