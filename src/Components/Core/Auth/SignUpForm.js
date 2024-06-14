import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assests/Logos/Logo2.png";
import { useDispatch } from "react-redux";
import { setSignupData } from "../../../Slices/AuthSlice";
import { sendOtp } from "../../../Services/Operations/authApi";
import { ACCOUNT_TYPE } from "../../../Utils/Constants";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBRadio,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Auth.css";
function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checked: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [accountType, setAccountType] = useState('Student');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
      accountType
      };
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));

    console.log("Agreed to Terms: ", agreed);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checked: "",
    });
    setAccountType("student");
    // toast.success("");
  };


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  

  return (
    <MDBContainer
      fluid
      className="p-4 pb-9 mx-auto h-full md:h-screen  background-radial-gradient "
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            The best offer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              for your business
            </span>
          </h1>

          <p className="md:px-3 px-1" style={{ color: "hsl(218, 81%, 85%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>
        <div className=" mt-2 md:mt-9 mb-6 position-relative rounded-2xl w-[100%] md:w-[40%]">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <div className="my-5 p-4  rounded-3xl mb-8 bg-glass">
            <div className="mr-4 flex mx-auto items-center gap-6">
              <img src={logo} alt="Logo" className="mx-auto h-16 md:h-24 " />
              <p className="text-md font-bold font-edu-sa md:text-3xl text-richblack-700">
                Empowering Futures Through{" "}
                <span style={{ color: "hsl(218, 91%, 55%)" }}>Education</span>
              </p>
            </div>
            <div className=" md:p-5">
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
              <MDBRadio
              wrapperClass="mb-4"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={()=>setAgreed(!agreed)}
                checked={agreed}
                label="I Agree to the terms and conditions"
              />
              
              <MDBBtn onClick={handleOnSubmit} className="w-100 mb-4" size="md">
                Sign up
              </MDBBtn>
              <p className="text-richblack-700 mx-auto text-center">
                Already Have An Account ?{" "}
                <Link className="text-blue-300" to={"/login"}>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpForm;
