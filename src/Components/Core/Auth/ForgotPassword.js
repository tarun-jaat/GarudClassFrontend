import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import { getPasswordResetToken } from "../../../Services/Operations/authApi";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
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
            <div className="max-w-[500px] p-4 lg:p-8">
              <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-blue-300">
                {!emailSent ? "Reset your password" : "Check email"}
              </h1>
              <p className="my-4 text-[md] leading-[1.625rem] text-richblack-500">
                {!emailSent
                  ? "Lost your password? No worries! We've got your back with a hassle-free password recovery process."
                  : `We have sent the reset email to ${email}`}
              </p>
              <form onSubmit={handleOnSubmit}>
                {!emailSent && (
                  <label className="w-full">
                    <MDBInput
                      required
                      type="email"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="abc@gmail.com"
                      className="form-style my-4 w-full"
                    />
                  </label>
                )}
                <MDBBtn onClick={handleOnSubmit} className="w-100 mb-4" size="md">
                  {!emailSent ? "Sumbit" : "Resend Email"}
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
        </div>
      </MDBRow>
    </MDBContainer>
  );
}

export default ForgotPassword;
