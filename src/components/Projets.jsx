import React from "react";
import { PORTFOLIO } from "../data/Portfolio.js";
import CardPortfolio from "./CardPortfolio.jsx";

const Projets = () => {
  return (
    <div className="px-3 my-3" id="projet">
      <div className="px-3">
        <h1
          className=" text-center text-xl md:text-2xl font-bold text-[#7280FF]
            "
        >
          / Mes travaux récents
        </h1>
        <p className="text-center my-7 ">
          Voici quelques projets de conception passés sur lesquels j'ai
          travaillé. Vous voulez en voir plus ? Envoyez moi un email.
        </p>
        <div className=" grid md:grid-cols-3 gap-8 px-10 ">
          {PORTFOLIO.map((portfolio) => {
            return (
              <div className="flex mx-auto ">
                <CardPortfolio data={portfolio} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projets;
