import React from "react";
import img2 from "../assets/me.jpeg";
import { DiCodeigniter } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillPhone,
} from "react-icons/ai";
import ContactPoppup from "./Poppup/ContactPoppup";

const Apropos = () => {
  const [openAboutPoppup, setOpenAboutPoppup] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        id="about"
        className="relative justify-center items-center overflow-hidden md:px-8 md:mx-auto  w-full  bg-gray-100 md:my-10 my-5  flex flex-col md:flex-row md:gap-5"
      >
        <ContactPoppup
          openPoppup={openAboutPoppup}
          closePoppup={setOpenAboutPoppup}
        />
        <div className=" md:rounded-none md:h-full mx-auto md:w-[50%]  h-full bg-[#7280FF] w-[70%] py-7 mt-14 rounded-md ">
          <img
            src={img2}
            alt=""
            className="  md:w-30 h-30 w-20 h-20 rounded-full object-cover mx-auto mt-[-60px] "
          />
          <p className=" text-center text-2xl text-white font-bold pt-3">
            Abdou Aziz Mbengue
          </p>
          <p className=" text-center text-sm text-gray-100 font-mono px-9 mt-3">
            developpeur web fullstack et web designer{" "}
            <DiCodeigniter
              className=" mx-auto pt-2 hover:text-red-500  "
              size={35}
            />
          </p>
          <ul className=" flex gap-6 justify-center my-6">
            <a href="https://github.com/AbdouAziz13">
              {" "}
              <li className="text-white hover:scale-y-90 duration-300 cursor-pointer">
                <AiOutlineGithub size={27} />
              </li>
            </a>

            <a href="https://www.instagram.com/lokoazz23/?hl=fr">
              {" "}
              <li className="text-white hover:scale-y-90 duration-300 cursor-pointer">
                <AiFillInstagram size={27} />
              </li>
            </a>

            <li className="text-white hover:scale-y-90 duration-300 cursor-pointer">
              <AiOutlineWhatsApp
                size={27}
                onClick={() => setOpenAboutPoppup(true)}
              />
            </li>
            <li className="text-white hover:scale-y-90 duration-300 cursor-pointer">
              <AiFillPhone size={27} onClick={() => setOpenAboutPoppup(true)} />
            </li>
          </ul>
        </div>
        <div className="   w-full my-5 px-6 text-center md:py-10 md:text-start sm:px-8 mx-auto  ">
          <h1 className="text-center text-3xl md:text-4xl font-bold pb-2 md:text-start ">
            About-Me
          </h1>
          <p className=" md:max-w-[600px] md:text-start py-2 px-2 text-center  ">
            Le web design et le développement web fullstack sont bien plus
            qu'une simple passion pour moi. C'est une véritable obsession qui
            éveille en moi un enthousiasme débordant et une soif inextinguible
            d'apprendre et de créer.
          </p>
          <button
            className="px-3 py-2 border border-black font-semibold border-b-4 border-r-2 mt-3 hover:bg-[#7280FF] hover:text-white md:mt-18 pb-3"
            onClick={() => navigate("/formulaire")}
          >
            dite bonjour!
          </button>
        </div>
      </div>
    </>
  );
};

export default Apropos;
