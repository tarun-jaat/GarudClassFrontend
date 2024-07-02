import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../Data/DialCodes.json";
import { apiConnector } from "../Services/apiConnecter";
import { contactusEndpoint } from "../Services/api";
import { toast } from "react-hot-toast";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );

      // console.log("Email Res - ", res)
      toast.loading("Please Wait we are sendind you response");
      setLoading(false);
      toast.success("Email Sent successfully we will reach you soon");
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="relative h-screen text-white">
      <div className=" relative flex flex-col items-center gap-4 bg-primary justify-center h-3/5">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        <p className="text-lg px-12 w-[70%] text-center text-white">
          Welcome to Garud Classes! We are committed to providing you with the
          best learning experience. If you have any questions, feedback, or
          issues, please feel free to reach out to us using the information
          below:
        </p>
        <div className=" absolute p-4 -bottom-[400px] bg-white border-2 border-richblack-400 rounded-3xl w-4/5">
          <form className="w-full" onSubmit={handleSubmit(submitContactForm)}>
            <div className="flex flex-col md:gap-6 gap-2 lg:flex-row">
              <div className="flex flex-col md:gap-1 lg:w-[48%]">
                <label htmlFor="firstname" className="lable-style">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  className=" form-style p-3"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <span className="-mt-1 text-[12px] text-pink-600">
                    Please enter your name.
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:w-[48%]">
                <label htmlFor="lastname" className="lable-style">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter last name"
                  className=" form-style p-3"
                  {...register("lastname")}
                />
              </div>
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <label htmlFor="email" className="lable-style">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className=" form-style p-3"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="-mt-1 text-[12px] text-pink-200">
                    Please enter your Email address.
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <label htmlFor="phonenumber" className="lable-style">
                  Phone Number
                </label>

                <div className="flex gap-1 md:gap-5">
                  <div className="flex w-[81px] flex-col gap-2">
                    <select
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter first name"
                      className=" form-style p-3"
                      {...register("countrycode", { required: true })}
                    >
                      {CountryCode.map((ele, i) => {
                        return (
                          <option key={i} value={ele.code}>
                            {ele.dial_code} -{ele.name}({ele.code})
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                    <input
                      type="number"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="981776146"
                      className=" form-style p-3"
                      {...register("phoneNo", {
                        required: {
                          value: true,
                          message: "Please enter your Phone Number.",
                        },
                        maxLength: {
                          value: 12,
                          message: "Invalid Phone Number",
                        },
                        minLength: {
                          value: 10,
                          message: "Invalid Phone Number",
                        },
                      })}
                    />
                  </div>
                </div>
                {errors.phoneNo && (
                  <span className="-mt-1 text-[12px] text-pink-200">
                    {errors.phoneNo.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <label htmlFor="message" className="lable-style">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Enter your message here"
                  className=" form-style p-3"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="-mt-1 text-[12px] text-pink-200">
                    Please enter your Message.
                  </span>
                )}
              </div>
            <button
              disabled={loading}
              type="submit"
              className={`rounded-md float-end mt-3 bg-[#005eff] px-6 py-3 text-center text-[13px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
