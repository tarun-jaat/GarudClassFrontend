import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Auth/Login";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import AddUserFeeData from "./Pages/Admin/AddUserFeeData";
import Main from "./Pages/LandingPage/Main";
import Navbar from "./Components/Common/Navbar";
import RaiseAnyQuery from "./Components/Common/RaiseAnyQuery";
function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-inter">
<Navbar/>
<RaiseAnyQuery/>
<div className="mt-[90px]">
    <Routes >
      <Route
        path="/login"
        element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }
      /> 
      <Route
      path="/"
      element={
        <OpenRoute>
          <Main/>
        </OpenRoute>
      }
      />
      <Route
        path="/fee-data"
        element={
          <PrivateRoute>
            <AddUserFeeData />
          </PrivateRoute>
        }
      />
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
