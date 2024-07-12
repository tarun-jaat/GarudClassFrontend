import React from "react";
import { useEffect,useState, useRef } from "react";
import Slideshow from "../../Components/Core/LandingPage/SlideShow";
import OurSelections from "../../Components/Core/LandingPage/OurSelections";
import Anouncement from "../../Components/Core/LandingPage/Anouncement";
import Card from "../../Components/Core/LandingPage/Explore Carrer/Card";
import "./Main.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Social from "../../Components/Core/LandingPage/Social";
import CardSlideShow from "../../Components/Core/LandingPage/Course/CardSlideShow";
import CardBatches from "../../Components/Core/LandingPage/Batches/CardBatches";
import WhyUs from "../../Components/Core/LandingPage/WhyUs/WhyUs";
import Banner from "../../Components/Core/LandingPage/Banner";
import Footer from "../../Components/Core/LandingPage/Footer";
/// import ContactUsForm from '../../Components/Common/ContactUsForm'
import RaiseAnyQuery from "../../Components/Common/RaiseAnyQuery";
import Navbar from "../../Components/Common/Navbar";
import MainComponent from "../../Components/Core/LandingPage/MainComponent";
import { getAllBatches } from "../../Services/Operations/BatchApi";
function Main() {
  const [batches, setBatches] =useState([]);
  useEffect(() => {
    getAllBatches().then((result) => {
      setBatches(result);
      console.log(batches)
    });
  }, []);
  return (
    <div className="Landing-page  w-full">
      <Navbar />

      <Slideshow />
      <MainComponent />
      <RaiseAnyQuery />
      <div className=" text-center font-inter w-full mt-4 md:mt-16 flex ">
        <div className="max-w-full md:p-10 flex flex-col justify-center items-center gap-2 ">
          <p className=" Heading text-xl md:text-2xl text-richblack-700 underline font-extrabold ">
            Explore Your Carrier Path With Garud Classes
          </p>
          <p className="mt-4 text-sm md:text-lg text-richblack-600 md:w-[1000px]">
            Stay focused on your long-term goals while remaining adaptable to
            change. Remember, your career journey is a marathon, not a sprint –
            enjoy the ride!
          </p>
          <div className="flex justify-around items-center gap-3 mt-4 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Link className="md:p-3 p-2 flex text-md items-center h-fit border-2 border-blue-200 rounded-xl hover:border-0 hover:text-blue-200  hover:underline underline-offset-4 hover:text-xl">
              Explore All <IoIosArrowRoundForward fontSize={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative font-inter w-full mt-8 md:px-8 ">
        <div className="flex items-center justify-between px-4 pb-6">
          <p className="Heading  text-xl md:text-2xl  text-richblack-700 underline font-extrabold ">
            Online Courses
          </p>
          <Link className="md:p-3 p-1 flex text-md items-center h-fit border-2 border-blue-200 rounded-xl hover:border-0 hover:text-blue-200  hover:underline underline-offset-4 hover:text-xl">
            View All <IoIosArrowRoundForward fontSize={24} />
          </Link>
        </div>
        <div>
          <CardSlideShow />
        </div>
      </div>
      <div className="relative bg-Voilet py-6 md:px-8  mt-60">
        <div className="flex items-center justify-between py-8 md:py-0 px-4">
          <p className="Heading md:p-4 md:pb-8 text-xl md:text-2xl md:px-4  text-richblack-5 underline font-extrabold ">
            Our Batches
          </p>
          <Link className="md:p-3 p-1 flex text-md items-center h-fit border-2 text-richblack-50 border-richblack-200 rounded-xl hover:border-0 hover:text-white  hover:underline underline-offset-4 hover:text-xl">
            View All <IoIosArrowRoundForward fontSize={24} />
          </Link>
        </div>
        <div className="flex flex-wrap items-start gap-8 px-8 justify-start">
          {batches && batches.slice(0,3).map((batches) => {
            return <CardBatches key={batches._id} batches={batches} />
          })}
        </div>
      </div>
      <div className="explore flex flex-col gap-3 justify-between items-center text-center w-full p-4 md:p-8 mt-8 ">
        <strong className=" text-2xl md:text-4xl   ">Why Garud Classes</strong>
        <p className="md:w-4/5 text-md md:text-lg text-richblack-600">
          We prioritize excellence in education, ensuring every student receives
          personalized attention and top-notch guidance. Our experienced faculty
          is committed to nurturing your potential, preparing you for various
          tests with comprehensive and insightful teaching methods.
        </p>
        <WhyUs />
      </div>
      <Banner />
      <Social />
      <Footer />
    </div>
  );
}

export default Main;
