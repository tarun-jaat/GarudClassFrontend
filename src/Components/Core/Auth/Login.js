import React from "react";
import { useState } from "react";
import { login } from "../../../Services/Operations/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../../Assests/Logos/Logo2.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Auth.css";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
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

            <div className="md:p-5 ">
              <MDBInput
                wrapperClass="mb-4 w-full"
                label="Email"
                id="form3"
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
              <MDBInput
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                wrapperClass="mb-4"
                label="Password"
                id="form4"
              />

              <div className="flex justify-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Saved for the future"
                />
                <Link to="/forgot-password">
                  <p className="mt-1  text-blue-400  w-fit text-xs ">
                    Forgot Password ?
                  </p>
                </Link>
              </div>

              <MDBBtn onClick={handleOnSubmit} className="w-100 mb-4" size="md">
                Sign In
              </MDBBtn>

              {/* <div className="text-center">
                <p className="text=sm text-richblack-600 mb-2">sign in with</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div> */}
              <p className="text-blue-800 mx-auto my-7 text-center">
                Don't Have An Account ?{" "}
                <Link className="text-blue-300" to="/signup">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
