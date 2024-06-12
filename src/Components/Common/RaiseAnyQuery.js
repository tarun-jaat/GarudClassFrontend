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
    <div className=' fixed z-50 top-3/4 md:top-[60%] left-0 ' >
        <button className='flex rotate-360 px-2 text-white font-semibold gap-3 items-center translate-x-[-80%] md:translate-x-[-75%] transition-all ease-in-out rounded-e-3xl duration-100 hover:translate-x-0 p-2 md:py-3 bg-blue-300'
        onClick={handleClick}>
        Raise Any Query!
    
        <MdOutlineQuestionAnswer className='md:text-3xl text-2xl'/>
        </button>
        {showContactForm &&
        <div className=' absolute bottom-0 md:bottom-[-150px]' ref={ref}>
         <ContactUsForm/>
         </div>}
    </div>
  )
}

export default RaiseAnyQuery