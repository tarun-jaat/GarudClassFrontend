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
    <div className="relative border-2 border-richblue-500 bg-richblue-700 font-inter text-richblue-5 w-[70%] rounded-2xl h-[200px] px-6 py-5">
      <div className='z-100'>
        <p className="text-4xl font-bold ">
          Welcome Back <span className="text-4x text-caribbeangreen-50 font-bold">{user?.firstName} {user?.lastName}</span>{" "}
        </p>
        <p className="mt-5 mb-5 text-richblue-5  text-sm font-edu-sa">
          "{quote.text}"  {"  "} (Author - :"{quote.author}")
        </p>
        
      </div>
    </div>
  );
}

export default UserBanner;
