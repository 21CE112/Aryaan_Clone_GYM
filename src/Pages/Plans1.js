import React, { useState, useEffect } from 'react'
import vector3 from "../assets/vector3.svg";
import { Day5, Day6, Day3 } from '../data'

const Plans1 = () => {
  const [days, setDays] = useState('3 days');
  const [data, setData] = useState(Day3);

  
  useEffect(() => {
    
    // Use a useEffect to handle data updates after setting the days state
    if (days === '3 days') {
      setData(Day3);
    } else if (days === '5 days') {
      setData(Day5);
    } else if (days === '6 days') {
      setData(Day6);
    }
  }, [days]);


  const hmDays = (event) => {
    // var innerText = event.target.id;
    // console.log(innerText);
    setDays(event.target.id);
    console.log(days)

    // if(days === '3 days')
    // {
    //   setData(Day3)
    // }
    // else if(days === '5 days')
    // {
    //   setData(Day5)
    // }
    // else if(days === '6 days')
    // {
    //   setData(Day6)
    // }
  }

  return (
    <div className='bg-grey-40 m-0 py-10'>
      <div className="flex uppercase w-[40%] m-auto  font-oswald text-xl justify-between">
        <button id="3 days" onClick={hmDays} 
            className={`${days === '3 days' ? 'text-orange-400' : ''}`}>3 days</button>
        <button id="5 days" onClick={hmDays}
            className={`${days === '5 days' ? 'border-orange-400' : ''}`}>5 days</button>
        <button id="6 days" onClick={hmDays}
            className={`${days === '6 days' ? 'text-orange-400' : ''}`}>6 days</button>
      </div>
      <div className='pt-10'>
        {data.map((item) => (
          <div className=" cursor-pointer w-[50%] m-auto h-48  text-left text-4xl bg-[#0D1012] text-white font-oswald relative  my-8  shadow-black transition-transform transform scale-100 hover:scale-105  hover:bg-[#0D1012] rounded-xl">
            <img
              className="w-full h-full object-cover  rounded-xl"
              alt=""
              src={item.img}
            />
            <label className=" absolute uppercase left-8 text-xl font-small m-4 top-0">
              Day {item.Day}
            </label>
            <label className=" absolute uppercase left-8 text-3xl m-4 bottom-0">
              {item.Exercise}
            </label>
            <img
              className="absolute h-8 w-8 right-8 top-1/2 transform -translate-y-1/2"
              alt=""
              src={vector3}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans1
