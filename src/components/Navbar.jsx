import React from "react";
import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" max-w-[1200px] flex justify-between p-2 mx-auto px-3 items-center text-center  py-4 mt-3">
        <h2 className=" text-3xl md:text-4xl font-bold cursor-pointer"  onClick={()=>navigate("/")}>
          Az<span className=" text-blue-700 ">.</span>
        </h2>
        <button
          className="px-3 py-2 border border-cyan-600  font-semibold border-b-4 border-r-2"
          onClick={() => navigate("/formulaire")}
        >
          dite bonjour!
        </button>
      </div>
      <div className=" max-w-[300px] md:max-w-[400px]  mx-automt-10 shadow-md w-full mx-auto rounded-sm mt-10 ">
        <div className=" w-full ">
          <ul className="flex py-5 justify-center gap-10 md:gap-20 ">
            <li className=" cursor-pointer hover:translate-y-1 duration-200">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <IoMdContact size={30} />
              </Link>
            </li>

            <li className=" cursor-pointer hover:translate-y-1 duration-200">
              <Link
                to="projet"
                spy={true}
                smooth={true}
                offset={-150}
                duration={1000}
              >
                <AiOutlineFundProjectionScreen size={30} />
              </Link>
            </li>
            <li className=" cursor-pointer hover:translate-y-1 duration-200">
              <AiFillHome size={30} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
