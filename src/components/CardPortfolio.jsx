import React from "react";

const CardPortfolio = (props) => {
  const {
    projetImg,
    projetDesc,
    projetButton,
    projetTools,
    projectTitle,
    projectLink,
    projectLink2,
    projetButton2,
    projectClassName,
    projectClassName2,
  } = props.data;

  return (
    <div className=" relative flex justify-center items-center">
      <img
        src={projetImg}
        alt=""
        className=" border opacity-70 w-[400px] h-[300px] rounded-lg  md:w-[400px] md:h-[300px] object-cover"
      />
      <div className=" justify-center items-center flex absolute rounded-lg top-0 left-0 bg-black bg-opacity-70 w-full h-full">
        <p className=" text-white text-center font-extrabold font-mono md:text-3xl">
         
          {projectTitle}
        </p>
      </div>
      <div className=" justify-center flex flex-col align-middle absolute text-white opacity-0 hover:opacity-100 hover:bg-black w-[400px] h-[300px] md:w-[400px] md:h-[300px] text-center rounded-lg duration-300">
        <p className=" text-xl md:text-2xl md:px-5 py-3">{projetDesc}</p>
        <a href={projectLink}>
       
          <button className= {projectClassName}>
            {projetButton}
          </button>
        </a>
        
        <a href={projectLink2}>
        <button className={projectClassName2}>
            {projetButton2}
          </button>
        </a>

        <p className=" font-mono font-bold  text-[#7280FF] py-3">
          {projetTools}
        </p>
      </div>
    </div>
  );
};

export default CardPortfolio;
