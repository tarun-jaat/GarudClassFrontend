import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Assests/Logos/Logo2.png";
import { resetPassword } from "../../../Services/Operations/authApi";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  //   MDBCard,
  //   MDBRadio,
  //   MDBCardBody,
  //   MDBInput,
  //   MDBCheckbox,
  //   MDBIcon,
} from "mdb-react-ui-kit";
import "./Auth.css";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <MDBContainer
      fluid
      className="md:p-4 pb-9 mx-auto h-full md:h-screen background-radial-gradient "
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
        <div className=" mt-2 md:mt-9 mb-6 position-relative rounded-2xl w-[100%] md:w-[35%]">
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
            <h1 className="text-lg md:text-[1.875rem] font-semibold md:leading-[2.375rem] text-blue-500">
              Choose new password
            </h1>
            <p className="my-4 text-md md:text-[1.125rem] leading-[1.625rem] text-richblack-500">
              Stay ahead of security threats by updating your password
              regularly; keep your account safe with a simple password refresh.
            </p>
            <form onSubmit={handleOnSubmit}>
                <MDBInput
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  label="Password"
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className="form-style w-full mb-4 !pr-10"
                />
                
                <MDBInput
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  label="Confirm Password"
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="form-style w-full mb-4 !pr-10"
                />
                 
                

              <MDBBtn
                onClick={handleOnSubmit}
                className="w-100 md:py-3  mb-4"
                size="lg"
              >
                Verify Email
              </MDBBtn>
            </form>
            <div className="mt-6 flex items-center justify-between">
              <Link to="/login">
                <p className="flex items-center gap-x-2 text-richblack-500">
                  <BiArrowBack /> Back To Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </MDBRow>
    </MDBContainer>
  );
}

export default UpdatePassword;
