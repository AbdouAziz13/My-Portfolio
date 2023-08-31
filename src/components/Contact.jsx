import React from "react";
import { CiCoffeeCup } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className=" px-10 mx-20 py-10 bg-[#01084a] my-12 rounded" id="contact">
      <div className="md:flex-row flex flex-col justify-center items-center gap-10 text-white">
        <h1 className=" md:text-3xl text-2xl font-bold">Commencer un projet</h1>
        <p className="  md:max-w-[400px] text-center px-3 md:text-start md:flex">
        Intéressé à travailler ensemble ? On devrait faire la queue pour discuter. je vais acheter le café
          <CiCoffeeCup size={50} className=" mx-auto " />
        </p>
        <button
          className=" border-2 border-blue-600 rounded text-white md:px-4 px-2 py-2"
          onClick={() => navigate("/formulaire")}
        >
          commençons !
        </button>
      </div>
    </div>
  );
};

export default Contact;
