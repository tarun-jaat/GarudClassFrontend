import React, { useEffect, useState } from "react";
import RatingStars from "../../../Common/RatingStar";
import GetAvgRating from "../../../../Utils/getAVGRating";
import { FaCalendar, FaRupeeSign } from "react-icons/fa";
import moment from "moment";
import { Button } from "@mui/material";
import { BiBookReader, BiSolidOffer } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";
function CardBatches({ batches }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  const formatDate = (date, format) => moment(date).format(format);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    const count = GetAvgRating(batches?.ratingAndReviews);
    setAvgReviewCount(count);
    console.log(batches);
  }, []);
  if (!batches) {
    return <div>No data available</div>;
  }
  // const offerValue = batches?.batchFees + 500;
  return (
    <div className="border-2 h-full bg-white border-blue-100 p-2 flex flex-col justify-start w-[325px] rounded-lg">
      <h1 className="font-bold min-h-16 float-left w-full px-2 text-2xl ">
        {batches?.batchName}
      </h1>
      <div className="flex items-center justify-center w-full">
        <img
          className="h-44 w-64 border shadow-md shadow-richblack-100 rounded-2xl object-cover bg-blue-100"
          src={batches?.thumbnail}
          alt={batches?.batchName}
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-richblack-500 ">
          for {batches?.category?.name} Students
        </h1>
        <RatingStars Review_Count={avgReviewCount} Star_Size={18} />
      </div>
      <div className="mt-2 flex">
        <h1 className="text-xs flex items-center gap-2 font-medium text-richblack-500 ">
          <FaCalendar fontSize={14} /> Starts on{" "}
          {formatDate(batches?.batchStartDate, "YYYY-MM-DD")} || Ends on{" "}
          {formatDate(batches?.batchEndDate, "YYYY-MM-DD")}
        </h1>
      </div>
      {token ? (
        <></>
        
      ) : (
        <div className="mt-2 ">
          <div className="text-sm   font-semibold  text-richblack-50 ">
            Get Benefits
          </div>
          <div className="flex mt-2 px-2 items-center justify-start gap-2 flex-wrap">
            <h1 className="p-2 border bg-blue-5 w-fit rounded-3xl">
              Daily Quiz Practice{" "}
            </h1>
            <h1 className="p-2 border bg-blue-5 w-fit rounded-3xl">DPP's </h1>

            <h1 className="p-2 border bg-blue-5 w-fit rounded-3xl">
              Notes Designed By experts{" "}
            </h1>
          </div>
        </div>
      )}

      <hr className="my-2" />
      <div className=" flex items-center justify-between">
        <div className="text-2xl flex gap-2 items-center font-semibold text-blue-200 ">
          <div>
            <p className="flex items-center">
              {<FaRupeeSign />} {batches?.batchFees}
            </p>
            <p className="text-sm text-center underline underline-offset-4 text-richblack-200 font-light">
              For all Batch
            </p>
          </div>{" "}
          {/* <p className=" text-richblack-400  font-normal text-lg line-through">
            {offerValue}
          </p> */}
        </div>
        <div className="text-caribbeangreen-600 h-fit flex py-2 w-44 rounded-2xl  px-2 bg-caribbeangreen-50">
          <BiSolidOffer fontSize={28} /> exclusive offers
        </div>
      </div>
      <hr className="my-2" />

      <div>
        {token ? (
          <div className="flex items-center justify-center gap-2 mt-2">
            <button className="md:p-2 p-1 border-2 border-blue-100  text-sm md:text-md flex hover:scale-95 items-center duration-100  w-[50%] gap-2 justify-center  rounded-md ">
              Add to cart{" "}
              <RiShoppingCart2Fill className="md:text-[24px] text-[18px]" />
            </button>
            <button
              onClick={() =>
                navigate(`/dashboard/batch-details/${batches.batchName}/${batches._id}`, {
                  state: { batchId: batches._id },
                })
              }
              className="md:p-2 p-1 hover:border-2  bg-blue-100  text-white  hover:scale-95 duration-100  w-1/2 text-md flex items-center gap-2 rounded-md "
            >
              Know More <BiBookReader className="md:text-[24px] text-[18px]" />
            </button>
          </div>
        ) : (
          <Link
            to={"/signup"}
            className="py-2 w-full text-center hover:scale-105 transition-all ease-in-out duration-150  text-white font-semibold rounded-lg border-blue-100 border-2  bg-blue-200"
          >
            Enroll Now
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardBatches;
