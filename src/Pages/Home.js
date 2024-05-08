import React from 'react'
import hero_page from '../assets/hero_page.jpg'
import logo from '../assets/logo.png'
import { BsArrowRight } from 'react-icons/bs'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import { about } from '../data'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useNavigate,useLocation } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast'
const Home = () => {
  var arr = [2, 3, 6, 7]
  const location = useLocation()
  const navigate = useNavigate()
  const handleGetStart = async()=>{
    // console.log("hello")
    let userId = localStorage.getItem('user')
    userId = JSON.parse(userId)
    console.log(userId)
    if(userId){
      console.log("inside")
      let result = await fetch("http://localhost:8000/getUser",{
        method:"post",
        body:JSON.stringify({userId:userId.result}),  
        headers:{ 
          "Content-Type":"application/json"
        } 
      })
      result = await result.json() 
      if(result.gymPlan==='no')
      {
        setTimeout(()=>{
          navigate('/Select_package')
        },1000)
        return toast.error("You must buy a plan for getting started")
      }
      else if(result.gymPlan==='yes')
      {
        navigate('/Plans1')
      }
    }
    else
    {
      return toast.error("Please Login to see your purchased plans")
    }
  }
  return (
    <div className="bg-[#353535]">
    <Toaster></Toaster>
      <div className="uppercase relative text-7xl font-bold font-oswald">
        <img
          src={hero_page}
          className="width: 100%; max-width: 100%; h-full"
        ></img>
        <div className="absolute bottom-48 left-[450px]">discover your </div>
        <div className="absolute bottom-[117px] left-[500px]">
          <spam className="text-orange-400">fitness</spam> destiny
        </div>

        {/* <div className="absolute top-0 flex justify-between space-x-[770px] px-20 bg-transparent">
          <div className="w-40" id="logo">
            <picture>
             
              <img src={logo}></img>
            </picture>
          </div>
          <div className="flex space-x-9 pt-5 font-oswald font-normal tracking-wide text-lg ">
            <div className=' my-auto text-grey-40 hover:text-orange-400'><Link to="trainers">HOME</Link></div>
            <div className=" my-auto text-grey-40 hover:text-orange-400"><Link to="trainers">TRAINERS</Link></div>
            <div className=" my-auto text-grey-40 hover:text-orange-400"><Link to="packages">PACKAGES</Link></div>
            <div className="  bg-orange-400 pt-2 px-3 capitalize rounded-sm drop-shadow-lg hover:drop-shadow-xl">
              Create Account
            </div>
          </div>
        </div> */}
      </div>

      <div className="bg-grey-40 flex justify-around px-20 py-3 uppercase font-oswald gap-x-16 h-48">
        <div id="welcome_text" className="m-auto w-2/3 lg:text-lg sm:text-sm  ">
          We are thrilled to introduce you to a comprehensive exercise data
          entry service and a tailored workout schedule platform that will
          revolutionize the way you approach your fitness journey
        </div>

        <div className="p-2 m-auto sm:p-3 bg-orange-400 flex align-middle">
          {/* <div className="m-auto px-3 lg:text-[1.0rem] sm:text-sm uppercase whitespace-nowrap ">
            Get Started
          </div> */}
          <div className=' m-auto px-3 lg:text-[1.0rem] sm:text-sm uppercase whitespace-nowrap'>
          <Link onClick={handleGetStart}  className={` ${location.pathname === '/Plans1' ? 'border-b-2 border-orange-400' : ''}`}>GET STARTED</Link></div>
          <div className="m-auto pr-3">
            <BsArrowRight />
          </div>
        </div>
      </div>

      <div className="p-10 py-16 bg-gray-80">
        <div className="relative flex w-3/4 justify-between m-auto">
          <div className=" ">
            <img src={pic1} className="h-96 w-96 opacity-20" />
            <div className="absolute font-oswald font-bold text-3xl text-[#dddddd] uppercase top-64 left-10 opacity-20">
              transform your body
            </div>
          </div>
          <div>
            <img src={pic2} className="h-96 w-96 opacity-20" />
            <div className="absolute font-oswald font-bold text-3xl text-[#dddddd] uppercase top-64 right-16 opacity-20">
              commit to be fit
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-grey-40 ">
        <div className=" w-3/4 m-auto flex flex-wrap">
          {about.map((about) => (
            <div
              className={`w-[50%] p-12  border-[#dddddd] text-center font-oswald + ${
                about.id % 2 == 0 ? 'border-b-2' : 'border-b-2 border-r-2'
              } 
              + ${about.id > 6 ? 'border-b-0' : ''}
              + ${
                arr.includes(about.id)
                  ? 'uppercase text-2xl text-orange-400'
                  : ''
              }`}
            >
              {about.title}
            </div>
          ))}
        </div>

        <div className="absolute rotate-90 font-oswald font-black top-40 left-[-66px] text-7xl  text-[#dddddd]">
          ABOUT
        </div>
      </div>

      {/* <Footer/> */}
    </div>

    
  )
}

export default Home
