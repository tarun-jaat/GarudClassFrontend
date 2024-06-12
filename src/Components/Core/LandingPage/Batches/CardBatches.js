import React from 'react'
import { FaLanguage } from 'react-icons/fa'
import { MdModelTraining } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsBookmarkCheckFill } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import Badge from '../../../Common/Badge';


const data=[
    {
        icon:<FaCalendarCheck/>,
        Title:"Starts from 21 may",
    },
    {
        icon:<IoTimerSharp/>,
        Title:"Evening",
    },
    {
        icon:<MdModelTraining/>,
        Title:"Mode - Offline",
    },
    {
        icon:<FaChalkboardTeacher/>,
        Title:"Lokesh Sir,",
    },
    
]

export default function CardBatches() {
  return (
    <div className='border relative shadow-lg shadow-richblack-400 hover:bg-richblack-5 p-4 w-[300px] md:w-[350px] gap-2 flex flex-col rounded-xl'>
        
        <img className=' rounded-lg' src='https://th.bing.com/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?rs=1&pid=ImgDetMain' alt='batches'/>
        <div className='flex items-center justify-between px-3 gap-4'>
        <div className='flex items-center gap-2'>
            <FaLanguage fontSize={28} />

            <p className='px-2 bg-richblack-25 rounded-full'>Hindi</p>

            </div>
        <div className='flex items-center gap-2'>
            <TbUsersGroup/>
            <p>
                70
            </p>
        </div>
        </div>
        <strong className='text-xl md:text-2xl '>Eklavya Neet Batch {"(Offline)"}</strong>
        {data.map((Key,index)=>(
            <div className='flex items-center justify-start gap-4 text-richblack-700 text-md font-bold '>
                <p className='md:text-xl text-md text-richblack-500'>
                    {Key.icon} 
                </p>
                <p>
                    {Key.Title}
                </p>
            </div>
        ))}
        <Link className='border-2 text-lg border-[#3397d1] items-center justify-center gap-2 flex px-2 py-2 text-center rounded-lg hover:scale-90'>
        <BsBookmarkCheckFill fontSize={20}/>
         Enroll Now
        </Link>
        <div className=' absolute flex items-center justify-center badge h-6 w-24 md:h-8 md:w-32 rotate-45 text-center text-white font-bold right-[-37px] top-2 '>
        New
    </div>
    </div>
  )
}
