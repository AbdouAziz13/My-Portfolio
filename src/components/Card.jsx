import React from "react";

const Card = (props) => {
  const {
    cardTitle,
    cardImg,
    cardDesc,
    cardDesc2,
    cardThings,
    cardTools2,
    cardTools,
  } = props.data;

  return (
    <div className=" md:bg-white bg-gray-100 rounded-md  h-auto">
      <div className="mx-auto p-3 w-full">
        <img src={cardImg} alt="" className="mx-auto w-10 pt-4" />
        <p className="text-center  text-2xl md:text-3xl font-bold py-2">
          {cardTitle}
        </p>
        <p className="text-center md:text-start text-sm px-3 md:text-sm py-4">
          {cardDesc}
        </p>
        <p className=" text-[#7280FF] text-center ">{cardDesc2}</p>
        <p className="text-center font-bold py-4">{cardThings}</p>
        <p className="text-[#7280FF] text-center py-2">{cardTools2}</p>
        <div className="">
          {cardTools.map((tools) => {
            return (
              <div className=" text-center pb-3">
                <p className=" font-mono font-semibold">{tools}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
