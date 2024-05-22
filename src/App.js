import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Auth/Login";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import AddUserFeeData from "./Pages/Admin/AddUserFeeData";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblue-900 flex flex-col font-inter">

    <Routes>
      <Route
        path="/"
        element={
          <OpenRoute>
            <Login />
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
    </Routes>
  </div>
  );
}

export default App;
