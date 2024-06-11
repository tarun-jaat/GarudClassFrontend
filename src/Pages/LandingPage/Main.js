import React from "react";
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
function Main() {
  return (
    <div className="Landing-page h-screen bg-richblack-5  w-full">
      <Slideshow />
      <div className="w-full px-10 flex flex-col md:flex-row justify-center h-[200px] md:h-[400px]  mt-5 gap-4 items-center">
        <OurSelections />
        <Anouncement />
      </div>
      {/* <ContactUsForm/> */}
      <div className=" text-center font-inter w-full mt-16 flex ">
        <div className="max-w-full  p-10 flex flex-col justify-center items-center gap-2 ">
          <p className=" Heading text-2xl text-richblack-700 underline font-extrabold ">
            Explore Your Carrier Path With Garud Classes
          </p>
          <p className="mt-4 text-lg text-richblack-600 w-[1000px]">
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
            <Link className="p-3 flex text-md items-center h-fit border-2 border-blue-200 rounded-xl hover:border-0 hover:text-blue-200  hover:underline underline-offset-4 hover:text-xl">
              Explore All <IoIosArrowRoundForward fontSize={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative font-inter w-full mt-8 px-8 ">
        <div className="flex items-center justify-between px-4 pb-6">
          <p className="Heading text-2xl  text-richblack-700 underline font-extrabold ">
            Online Courses
          </p>
          <Link className="p-3 flex text-md items-center h-fit border-2 border-blue-200 rounded-xl hover:border-0 hover:text-blue-200  hover:underline underline-offset-4 hover:text-xl">
            View All <IoIosArrowRoundForward fontSize={24} />
          </Link>
        </div>
        <div>
          <CardSlideShow />
        </div>
      </div>
      <div className="relative px-8 mt-60">
        <div className="flex items-center justify-between px-4">
          <p className="Heading p-4 pb-8 text-2xl px-4  text-richblack-700 underline font-extrabold ">
            Our Batches
          </p>
          <Link className="p-3 flex text-md items-center h-fit border-2 border-blue-200 rounded-xl hover:border-0 hover:text-blue-200  hover:underline underline-offset-4 hover:text-xl">
            View All <IoIosArrowRoundForward fontSize={24} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <CardBatches />
          <CardBatches />
          <CardBatches />
        </div>
      </div>
      <div className="explore flex flex-col gap-3 justify-between items-center text-center w-full p-8 mt-8 ">
        <strong className=" text-4xl   ">
          Why Garud Classes
        </strong>
        <p className="w-4/5 text-lg text-richblack-600">
        We prioritize excellence in education, ensuring every student receives personalized attention and top-notch guidance. Our experienced faculty is committed to nurturing your potential, preparing you for various tests with comprehensive and insightful teaching methods.
        </p>
        <WhyUs/>
      </div>
      <Banner/>
      <Social />
      <Footer/>
    </div>
  );
}

export default Main;
