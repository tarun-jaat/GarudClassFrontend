import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";



function ActiveCourses() {
    const hasActiveCourse = false;
    const animationContainer = useRef(null);
    

    useEffect(() => {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Animations/Animation2.json"),
      });
    }, [30000]);
  return (
    <div className='h-[200px] mt-2 border-2 rounded-xl bg-white border-richblack-400 w-[70%]'>
        {/* <p className='font-bold  text-3xl underline text-richblue-700 font-inter'>Recent</p> */}
        <div className='relative flex h-full gap-10 rounded-xl bg-pure-greys-50 bg-opacity-100 justify-center items-center border-l-4 border-richblue-700'>
        {hasActiveCourse ? (
            <p>There is an active course going on.</p>
          ) : (
            <>

             <p className="z-10 text-xl" >opp! ,No active course is going on.</p>
            </>
          )}
        </div>
    </div>
  )
}

export default ActiveCourses