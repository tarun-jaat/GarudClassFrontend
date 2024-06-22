import { Input } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    MDBBtn,
    MDBInput,
  } from "mdb-react-ui-kit";

function AddUser() {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
    const { firstName, lastName, email, password, confirmPassword } = formData;



    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
                      <div className="md:flex justify-between gap-2">

        <MDBInput
                wrapperClass="mb-4 w-full"
                label="First Name"
                id="form"
                type="name"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
              />
              <MDBInput
                wrapperClass="mb-4 w-full"
                required
                label="Last Name"
                type="text"
                name="lastName"
                // placeholder="Last Name"
                value={lastName}
                onChange={handleOnChange}
              />
              </div>
              <MDBInput
                wrapperClass="mb-4 w-full"
                required
                id="form"
                type="text"
                name="email"
                label="Email"
                value={email}
                placeholder="abc@gmail.com"
                onChange={handleOnChange}
              /> 
            <div className="md:flex justify-between gap-2 items-center">
            <MDBInput
                wrapperClass="mb-4 w-full"
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                label="Password"
                onChange={handleOnChange}
                placeholder="Password"
              />
              <MDBInput
                wrapperClass="mb-4 w-full"
                required
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
              />
              </div>
              <MDBBtn onClick={handleOnSubmit} className="w-100 mb-4" size="md">
                Add User
              </MDBBtn>
    </div>
  )
}

export default AddUser