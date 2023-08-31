import React from 'react';
import {IoClose} from "react-icons/io5"
import success from "../../assets/icons/success.svg"


const FormPoppup = ({openMe , closeMe}) => {
 if(!openMe) return null


    return (
        <div className='relative bg-white shadow-md w-full mx-10 md:mx-[300px] '>
        <IoClose className='absolute right-0 cursor-pointer mr-3 mt-2' onClick={closeMe(false)}/>
             <img src={success} alt="" className=' w-10 mx-auto' />
            <p className='text-center py-5'>Votre message a était envoyé avec succes</p>
    
        </div>
    );
};

export default FormPoppup;