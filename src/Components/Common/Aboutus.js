import React, { useEffect, useState } from "react";
import AboutUs from "../../Assests/images/AboutUs.png";
import Mission from "../../Assests/images/mission.webp";
import Vision from "../../Assests/images/vision.webp";
import Team from "../../Assests/images/Team.png";
import { useSelector } from "react-redux";
import { getAllUsersData } from "../../Services/Operations/UserApi";
import { FaInbox } from "react-icons/fa";
function Aboutus() {
  const [userData, setUserData] = useState([]); // Corrected here

  useEffect(() => {
    const fetchStudentFeeData = async () => {
      try {
        const data = await getAllUsersData();
        console.log(data.data);
        setUserData(data.data);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching student fee data:", error);
      }
    };

    fetchStudentFeeData();
  }, []);
  return (
    <div className="  py-20  flex items-center justify-center flex-col gap-8">
      <img
        src={AboutUs}
        alt="aboutUs"
        className="h-28 shadow-2xl rounded-b-3xl shadow-[#4880ff] "
      />
      <h1 className="shadow-text text-4xl font-bold text-[#4880ff]">
        About Us
      </h1>
      <p className="w-4/5 text-center text-lg text-richblack-600">
        At Garud Classes, we are passionate about education and committed to
        empowering our students. Our mission is to provide high-quality,
        personalized learning experiences that foster growth, curiosity, and
        success.My instittute name is garud classes write some content which i
        can write in about us section for our website we are providibg education
      </p>
      <div className=" w-4/5">
        <div className="flex items-center gap-12">
          <img
            src={Mission}
            alt="mission"
            className="h-56 shadow-2xl rounded-3xl leading-5   shadow-[#4880ff] "
          />
          <p className="text-lg font-bold">
            Our mission at Garud Classes is to provide a transformative
            educational experience that equips students with the knowledge,
            skills, and values to thrive in a rapidly evolving world. We are
            committed to delivering high-quality teaching, personalized
            mentoring, and holistic development to nurture well-rounded
            individuals who contribute positively to society.
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-12">
          <img
            src={Vision}
            alt="mission"
            className="h-56 shadow-2xl rounded-3xl leading-5   shadow-[#4880ff] "
          />
          <p className="text-lg font-bold">
            At Garud Classes, our vision is to be a beacon of educational
            excellence, empowering students to become leaders and innovators in
            their chosen fields. We aspire to cultivate a learning community
            where every student is inspired to dream big, think critically, and
            achieve their highest potential.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={Team} alt="Team" className="h-28  " />
        <h1 className="shadow-text text-4xl font-bold text-[#4880ff]">
          Our Team
        </h1>
        <p className="w-4/5 text-center text-lg text-richblack-600">
          At Garud Classes, we believe that the expertise and dedication of our
          faculty are integral to our mission of empowering students to reach
          their full potential. Join us and experience the difference of
          learning from educators who are passionate about your succes
        </p>
        <div className="flex justify-center gap-5 items-center">

          {userData
            .filter((user) => user.accountType === "Admin")
            .map((user) => (
              <div key={user._id} className="flex border p-4 bg-white rounded-2xl item-center justify-center flex-col gap-3">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="h-32 shadow-2xl  w-32 rounded-full"
                />
                <h2 className="text-2xl text-center font-bold capitalize">
                  {user.firstName} {user.lastName}
                </h2>
                <p className=" text-center">Founder</p>
                <p className="flex items-center gap-3 "><FaInbox fontSize={24}/>{user.email}</p>
           </div>
            ))}
          {userData
            .filter((user) => user.accountType === "Instructor")
            .map((user) => (
                <div key={user._id} className="flex border p-4 bg-white rounded-2xl item-center justify-center flex-col gap-3">
                <img
                  src={userData.image}
                  alt={userData.firstName}
                  className="h-32 w-32 shadow-2xl rounded-full"
                />
                <h2 className="text-2xl text-center font-bold capitalize">
                  {user.firstName} {user.lastName}
                </h2>
                <p className=" text-center">Instructor</p>
                <p className="flex items-center gap-3 "><FaInbox fontSize={24}/>{user.email}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
