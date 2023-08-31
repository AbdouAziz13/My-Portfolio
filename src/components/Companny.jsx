import React from "react";
import nji from "../assets/nji.jpg";
import logoGs7 from "../assets/logo.jpg";
import {GoCommentDiscussion} from "react-icons/go"

const Companny = () => {
  return (
    <div className=" w-full  border-t  p-3 h-screen mt-28   ">
      <p className=" px-10 my-10 text-[#7280FF] text-center text-2xl md:text-2xl md:max-w-[800px] mx-auto font-bold ">
        Je suis fier d'avoir pu collaboré avec ses entreprises{" "}
      </p>
      <div className="mx-auto w-full flex justify-center gap-10">
        <img src={nji} alt="" className=" w-[70px] object-cover rounded-md " />
        <img
          src={logoGs7}
          alt=""
          className="  w-[70px] object-cover rounded-md "
        />
      </div>
      <div className="  flex flex-col mt-10 border-t ">
      <p className=" text-xl text-center md:text-3xl  mt-20 font-bold  text-black">interesser pour une collaboration ?</p>
      <p className=" font-mono text-center py-2 text-black ">
        Je suis toujours ouvert à discuter de travaux de conception de produits
        ou d'opportunités de partenariat.
      </p>
     <p className="text-center">n'hesité pas a me envoyer un petit <span className=" text-blue-700 underline cursor-pointer ">mail</span> ! </p>
      </div>
    </div>
  );
};

export default Companny;
