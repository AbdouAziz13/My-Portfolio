import React from "react";
import projet from "../assets/agile.png";
import { BsLightbulb } from "react-icons/bs";

const GestionProjet = () => {
  return (
    <div className="bg-gray-100 md:bg-white px-10 my-10 h-auto  ">
      <div className=" w-full mx-auto md:flex-row flex flex-col p-3  ">
        <div className=" h-[300px] rounded-lg bg-[#7280FF] p-3 ">
          <h1 className=" text-xl  py-2 font-bold md:text-3xl text-center  md:mt-7 text-white">
            Competences en developpement de agile{" "}
            <BsLightbulb className=" mx-auto " />{" "}
          </h1>
          <p className=" text-center md:mt-2  text-white px-10 font-mono">
            "Avec une solide expérience en gestion de projet agile, j'ai
            travaillé de manière efficace avec les équipes en adoptant une
            approche itérative, des cycles de développement courts et une
            communication transparente, garantissant ainsi des résultats réussis
            et une satisfaction élevée des parties prenantes."
          </p>
        </div>
        <div className="">
          <img
            src={projet}
            alt="monimage"
            className=" mx-auto py-3  object-cover md:w-[700px] "
          />
        </div>
      </div>
    </div>
  );
};

export default GestionProjet;
