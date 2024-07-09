import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";


const quotes = [
    { id: 1, text: 'The mind is not a vessel to be filled but a fire to be kindled', author: 'Plutarch' },
    { id: 2, text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn', author: 'Xunzi' },
    { id: 3, text: 'The technology itself is not transformative. It’s the school, the pedagogy, that is transformative', author: 'Tanya Byron' },
  ];



function UserBanner() {
      

  const { user } = useSelector((state) => state.profile);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // const navigate = useNavigate();

  return (
    <div className="relative border-2 border-richblue-500 bg-richblue-700 font-inter text-richblue-5 w-full md:w-[70%] rounded-2xl h-[150px] md:h-[200px] p-2 md:px-6 md:py-5">
      <div className=''>
        <p className="md:text-4xl font-bold ">
          Welcome Back <span className="text-4x text-caribbeangreen-50 capitalize font-bold">{user?.firstName} {user?.lastName}</span>{" "}
        </p>
        <p className="md:mt-5 md:mb-5 mt-2 text-richblue-5 text-xs md:text-sm font-edu-sa">
          "{quote.text}"  {"  "} (Author - :"{quote.author}")
        </p>
        
      </div>
    </div>
  );
}

export default UserBanner;
