import React, { useState,useRef} from 'react';
import { MdOutlineQuestionAnswer } from "react-icons/md";
import ContactUsForm from './ContactUsForm';
import useOnClickOutside from '../../Hooks/OnClickOutside';


function RaiseAnyQuery() {
    const [showContactForm, setShowContactForm] = useState(false);

    const ref = useRef(null);


    const handleClick = () => {
        setShowContactForm(true);
    }

    const handler = () => {
      setShowContactForm(false)
      console.log('Click occurred outside the element!');
    };
    useOnClickOutside(ref, handler);


  return (
    <div className=' fixed z-50 top-[60%] left-0 ' >
        <button className='flex rotate-360 px-2 text-white font-semibold gap-3 items-center translate-x-[-75%] transition-all ease-in-out rounded-e-3xl duration-100 hover:translate-x-0 py-3 bg-blue-300'
        onClick={handleClick}>
        Raise Any Query!
    
        <MdOutlineQuestionAnswer fontSize={"28px"}/>
        </button>
        {showContactForm &&
        <div className=' absolute bottom-[-150px]' ref={ref}>
         <ContactUsForm/>
         </div>}
    </div>
  )
}

export default RaiseAnyQuery