import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

import { SiZazzle } from "react-icons/si";
import { AiOutlineGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#3c48b4] md:h-[460px] h-[400px] flex flex-col justify-center items-center ">
      <div className="text-center mx-7 ">
        <h1 className=" flex justify-center text-5xl md:text-8xl font-extrabold text-white my-3">
          Azi
          <SiZazzle />
        </h1>
        <p className="text-xl text-gray-300">
          Vivre, apprendre et monter de niveau un jour à la fois.
        </p>
      </div>
      <div className=" flex gap-3  md:gap-9 my-7">
        <a href="https://www.linkedin.com/in/abdou-aziz-mbengue-38a4b4284/">
          <BsLinkedin
            className=" cursor-pointer hover:translate-y-[-10px]  duration-300"
            color="white"
            size={30}
          />
        </a>

        <a href="https://github.com/AbdouAziz13">
          <AiOutlineGithub
            className=" cursor-pointer hover:translate-y-[-10px]  duration-300"
            color="white"
            size={30}
          />
        </a>
        <a href="https://www.instagram.com/lokoazz23/?hl=fr">
          <AiFillInstagram
            className=" cursor-pointer hover:translate-y-[-10px]  duration-300"
            color="white"
            size={30}
          />
        </a>
      </div>
      <p className=" text-white mx-20 text-center">developpé entièrement par moi <span className=" underline cursor-pointer"> azizprofess@outlook.fr
        </span>
      </p>
      <p className=" text-white gap-2 flex justify-center items-center my-6  ">
        fait par <BiLogoReact color="white" size={30} />
        <BiLogoTailwindCss color="white" size={30} />
      </p>
    </div>
  );
};

export default Footer;
