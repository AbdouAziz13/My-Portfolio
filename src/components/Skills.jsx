import React from 'react';
import {SKILLS} from "../data/Skills"
import Card from './Card';

const Skills = () => {
    return (
        <>
        <div className=' w-full py-10   '>
        <p className=' text-center pt-10 py-2 text-2xl font-bold text-[#7280FF] pb-6 '>/mes competences</p>
        <div className='mx-20 px-3 md:grid md:grid-cols-3  flex-col md:flex-row flex gap-6 border p-3 rounded-md shadow-md shadow-[#7280FF]  duration-200 '>
        
            {
                SKILLS.map((card)=>{
                    return  (
                         
                        <Card data={card}/>
                       
                    )


                })
            }
        </div>


        </div>
            
        </>
    );
};

export default Skills;