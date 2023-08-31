import React from "react";
import homeImg from "../assets/homeImg.png";
import homeSection from "../assets/icons/homeSection.svg"

const HomePage = () => {
  return (
    <>
      <div className=" max-w-[1240px] w-full  mx-aut md:h-screen">
        <div className="  w-full py-10 px-10">
          <h2 className=" font-bold text-center pb-3 text-2xl md:text-3xl md:text-center">
            Designer , developpeur frontend et backend
          </h2>
          <p className="text-center text-gray-500 md:text-2sm font-mono md:max-w-[600px] md:text-start mx-auto">
            Je suis{" "}
            <span className="text-blue-600 font-extrabold text-2xl">Aziz</span>{" "}
            un jeune developpeur passionné par tout ce qui est design et code
            bienvenu dans mon univers !
          </p>
        </div>
        <div className=" w-full mx-auto ">
            <img src={homeSection} alt="" className="w-[400px]  md:w-[700px] md:mt-20  mx-auto rounded shadow-sm py-4 px-2 "/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
