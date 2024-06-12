// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// i
// // Icons
// import { FaStar } from "react-icons/fa"
// // Import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper"
// import ReviewCard from "./ReviewCard"

// // Get apiFunction and the endpoint
// // import { apiConnector } from "../../services/apiconnector"
// // import { ratingsEndpoints } from "../../services/apis"

// function ReviewSlider() {
// //   const [reviews, setReviews] = useState([])
// //   const truncateWords = 15

// //   useEffect(() => {
// //     ;(async () => {
// //       const { data } = await apiConnector(
// //         "GET",
// //         ratingsEndpoints.REVIEWS_DETAILS_API
// //       )
// //       if (data?.success) {
// //         setReviews(data?.data)
// //       }
// //     })()
// //   }, [])

//   // console.log(reviews)
// const Reviews=[<ReviewCard/>,<ReviewCard/>,<ReviewCard/>,<ReviewCard/>,<ReviewCard/>,]
//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//             {Reviews.map((review, i) => (
//           <SwiperSlide key={i}>
//             <ReviewCard />
//           </SwiperSlide>
//         ))}

//           {/* {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <Card/>
//               </SwiperSlide>
//             )
//           })} */}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider