import React from "react";
import logo from "../../../Assests/Logos/Logo2.png";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../../../Services/Operations/authApi";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  //   MDBCard,
  //   MDBRadio,
  //   MDBCardBody,
  //   MDBInput,
  //   MDBCheckbox,
  //   MDBIcon,
} from "mdb-react-ui-kit";
import "./Auth.css";
function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) navigate("/signup");
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
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
            <form className="mt-4" onSubmit={handleVerifyAndSignup}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6} // this otp box conatiner is copied from internet
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-[38px] lg:w-[60px] border-0 bg-richblue-5 rounded-[0.5rem] text-primary aspect-square text-center focus:border-0 mb-4 focus:outline-2 focus:outline-blue-200"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />
              <MDBBtn
                onClick={handleVerifyAndSignup}
                className="w-100 md:py-3  mb-4"
                size="lg"
              >
                Verify Email
              </MDBBtn>
            </form>
            <div className="mt-2 flex items-center justify-between">
              <Link to="/signup">
                <p className="text-richblack-600 flex items-center gap-x-2">
                  {" "}
                  <BiArrowBack /> Back To Signup{" "}
                </p>
              </Link>
              <button
                className="flex items-center text-blue-100 gap-x-2"
                onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              >
                {" "}
                <RxCountdownTimer /> Resend it{" "}
              </button>
            </div>
            <p className="my-5 text-richblack-600 rounded-xl bg-opacity-10 p-2">
              <span className="border-2 border-blue-100 font-bold   text-black p-1 rounded-lg m-1">
                Note :
              </span>
              If you haven't received the verification email, please check your
              spam folder or click the button above to resend it.
            </p>
          </div>
        </div>
      </MDBRow>
    </MDBContainer>
  );
}

export default VerifyEmail;
