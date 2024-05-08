import React from "react";
import {  Link } from "react-router-dom";
//import pic2 from '../assets/pic2.jpg'

import pushImage from "../assets/push.png";
import pullImage from "../assets/pull.png";
import legImage from "../assets/leg.png";
import chestImage from "../assets/chest.png"
import Days from "./Days";
import sholderImage from "../assets/sholder.png"
import backImage from "../assets/back.png"


const Main = () => {
  const Day3 = [
    {
      Day: 1,
      Exercise: "push",
      img: pushImage,
    },
    {
      Day: 2,
      Exercise: "pull",
      img: pullImage,
    },
    {
      Day: 3,
      Exercise: "leg",
      img: legImage,
    },
  ];

  const Day5 = [
    {
      Day: 1,
      Exercise: "push",
      img: pushImage,
    },
    {
      Day: 2,
      Exercise: "pull",
      img: pullImage,
    },
    {
      Day: 3,
      Exercise: "leg",
      img: legImage,
    },
    {
      Day: 4,
      Exercise: "sholder",
      img: sholderImage,
    },
    {
      Day: 5,
      Exercise: "back",
      img: backImage,
    },
  ];

  const Day6 = [
    {
      Day: 1,
      Exercise: "push",
      img: pushImage,
    },
    {
      Day: 2,
      Exercise: "pull",
      img: pullImage,
    },
    {
      Day: 3,
      Exercise: "leg",
      img: legImage,
    },
    {
      Day: 4,
      Exercise: "sholder",
      img: sholderImage,
    },
    {
      Day: 5,
      Exercise: "back",
      img: backImage,
    },
    {
      Day: 6,
      Exercise: "chest",
      img: chestImage,
    },
  ];
  return (
    <div className=" flex flex-col  h-full w-full bg-[#353535]  justify-item-center  px-48 font-oswald ">
            <div className=" h-24 text-4xl text-white mx-2 my-8 text-center pt-6 bg-[#353535] rounded-2xl">
                  <div>
                      <Link to="/day3">
                          <label className="mx-16 cursor-pointer hover:text-[#ED8133]">3 Days </label>
                        </Link>
                        <Link to="/day5">
                          <label className="mx-16 cursor-pointer hover:text-[#ED8133]">5 Days </label>
                        </Link>
                        <Link to="/day6">
                          <label className="mx-16 cursor-pointer hover:text-[#ED8133]">6 Days </label>
                        </Link>
                  </div>
            </div>
          {/* <Route exact path="/day3" element={<Days day={Day3}></Days>} />
            <Route exact path="/day5" element={<Days day={Day5}></Days>} />
            <Route exact path="/day6" element={<Days day={Day6}></Days>} /> */}
        
    </div>
  );
};

export default Main;
