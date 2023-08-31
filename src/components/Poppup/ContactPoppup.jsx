import React from 'react';
import {IoClose} from "react-icons/io5"
import { AiOutlineWhatsApp,AiFillPhone,} from "react-icons/ai";

const ContactPoppup = ({openPoppup , closePoppup}) => {
    if(!openPoppup) return null

    return (
        <div className=' md:w-[300px] md:h-[200px] w-[300px] h-[200px] rounded-md shadow-lg  text-center absolute bg-white'>
        <IoClose className='absolute right-0 cursor-pointer mr-3 mt-2' onClick={()=>closePoppup(false)}/>
        
           <ul className='  gap-2 flex flex-col justify-center items-center mt-10'>
            <li className=' flex items-center gap-2'>
                <AiOutlineWhatsApp color='green' size={26}/>
                <p>70-706-61-75</p>
            </li>
            <li className='flex items-center gap-2'  >
                <AiFillPhone color='green' size={26}/>
                <p>70-706-61-75</p>
            </li>
            <button className='bg-green-700 text-white px-3 py-1 rounded my-2'  onClick={()=>closePoppup(false)}>ok</button>
           </ul>
        </div>
    )
};

export default ContactPoppup;