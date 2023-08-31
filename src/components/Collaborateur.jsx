import React from "react";
import papis from "../assets/papis.jpeg";
import seyni from "../assets/seyni.jpg";

const Collaborateur = () => {
  return (
    <div className=" p-2 w-full border-t ">
      <h1 className=" text-center md:text-3xl text-black ">Témoignages</h1>
      <div className=" p-6 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4  mx-auto px-10">
        <div className=" flex flex-col gap-2 text-center border p-7 rounded shadow-sm">
          <img
            src={papis}
            className=" rounded-full w-20 mx-auto object-cover "
            alt="pape mamadou diop"
          />
          <p className="  font-mono ">
            "Aziz est un communicateur clair avec la ténacité et la confiance
            nécessaires pour vraiment creuser dans des scénarios de conception
            délicats et la friction collaborative nécessaire pour produire un
            excellent travail."
          </p>
          <h1 className=" font-bold">Pape Mamadou diop</h1>
          <p className=" text-gray-600">Engineer & Trainer in Devops / Cloud</p>
        </div>

        <div className=" flex flex-col gap-2 text-center border p-7 rounded shadow-sm">
          <img
            src={seyni}
            className=" rounded-full w-20 h-20 mx-auto object-cover "
            alt="Seyni cissé Diop"
          />
          <p className="  font-mono ">
            "Aziz est un communicateur exceptionnel, doté d'une capacité
            d'écoute remarquable et d'un insatiable désir d'apprendre. Il sait
            comment prêter une oreille attentive aux besoins et aux idées des
            autres, ce qui lui permet de collaborer de manière efficace et de
            s'adapter rapidement aux scénarios de conception les plus complexes.
            Sa passion pour l'apprentissage continu transparaît dans son
            approche du travail, car il est toujours prêt à relever de nouveaux
            défis et à s'immerger dans de nouveaux domaines pour enrichir ses
            connaissances. Son attitude ouverte et curieuse en fait un membre
            précieux de toute équipe, car il apporte une perspective fraîche et
            un esprit collaboratif qui inspirent les autres à innover et à
            exceller."
          </p>
          <h1 className=" font-bold">Seyni Cissé Diop</h1>
          <p className=" text-gray-600">
            Consultant Defense et Sécurité et GRH PDG de GS7S
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborateur;
