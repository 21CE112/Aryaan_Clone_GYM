import React from "react";
//import vector from "./vector.svg";
import vector3 from '../assets/vector3.svg'


const Days = (props) => {
  const { day } = props;

  return (
    <div>
      {day.map((item) => (
        <div className=" cursor-pointer w-full h-48  text-left text-4xl bg-[#0D1012] text-white font-oswald relative  my-8  shadow-black transition-transform transform scale-100 hover:scale-105  hover:bg-[#0D1012] rounded-xl">
          <img
            className="w-full h-full object-cover  rounded-xl"
            alt=""
            src={item.img}
          />
          <label className=" absolute uppercase left-8 font-medium m-4 top-0">
            Day {item.Day}
          </label>
          <label className=" absolute uppercase left-8 m-4 bottom-0">
            {item.Exercise}
          </label>
          <img
            className="absolute h-12 w-12 right-8 top-1/2 transform -translate-y-1/2"
            alt=""
            src={vector3}
          />
        </div>
      ))}
    </div>
  );
};

export default Days;
