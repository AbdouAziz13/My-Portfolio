import React from "react";
import formulaire from "../assets/icons/formulaire.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import FormPoppup from "./Poppup/FormPoppup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const Navigate = useNavigate()
  const [openPoppup, setOpenPoppup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4of2kw9",
        "template_35m8ith",
        form.current,
        "m-ijiOVtayfVK5u33"
      )
      .then(
        (result) => {
          setOpenPoppup(true)
          console.log(result);
          window.scrollTo({ top: 0, behavior: "smooth" });
          alert("messagé bien envoyé")
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <div className=" flex justify-center items-center my-3 mt-4 rounded ">
        <FormPoppup openMe={openPoppup} closeMe={setOpenPoppup} />
      </div>
    

      <div className="  max-w-[1200px] flex justify-between p-2 mx-auto px-3 items-center text-center  py-4 mt-3">
        <h2 className=" text-3xl md:text-4xl font-bold cursor-pointer" onClick={()=>Navigate("/")}>
          Az<span className=" text-blue-700 " >.</span>
        </h2>
        <button className="px-3 py-2 border border-cyan-600  font-semibold border-b-4 border-r-2  ">
          dite bonjour!
        </button>
      </div>

      <div className=" w-full border-l mt-5 border-b border-[#7280FF] border-opacity-10">
        <img
          src={formulaire}
          className=" rounded-full w-20 border-2 p-3 mx-auto hover: border-[#7280FF]"
          alt=""
        />
        <p className=" md:px-40 md:text-2xl text-center text-xl font-bold font-mono my-3 mx-10">
          Merci d'avoir pris le temps de nous contacter. Comment puis-je vous
          aider aujourd'hui?
        </p>
      </div>
      <div className="  flex ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" mx-auto flex  flex-col gap-2 pb-4 "
        >
          <label className="text-md text-gray-400">Nom :</label>
          <input
            type="text"
            name="user_name"
            className="border border-[#7280FF] rounded-md py-1 p-2"
          />
          <label className="text-md text-gray-400">Email :</label>
          <input
            type="email"
            name="user_email"
            className="border border-[#7280FF] rounded-md py-1 p-2"
          />

          <label className="text-md text-gray-400">Message :</label>
          <textarea
            name="message"
            className=" p-2 border border-[#7280FF]  rounded-md py-1 w-[400px] h-[200px]"
          />
          <button
            type="submit"
            value="Send"
            className="px-3 py-2 border border-black font-semibold border-b-4 border-r-2 mt-3 bg-[#7280FF] text-white md:mt-18 pb-3"
           
          >
            envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulaire;
