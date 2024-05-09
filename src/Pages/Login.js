import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { useState } from 'react';
import logimage from '../assets/frame.png';
import UserIcon from '../assets/vector.svg';
import PasswdIcon from '../assets/vector1.svg';
//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {Toaster,toast} from 'react-hot-toast'

export default function Login(props) {
 
    
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
  //  const [err,Seterr] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    // useEffect(()=>{
    //     const author = localStorage.getItem('user');
    //     if(author)
    //     navigate('/');
    //   })
    const handleSubmit = async(e)=>{
      e.preventDefault()   
      console.log(e);
      // console.log("Hello")
        let result = await fetch("http://localhost:8000/login",{
            method:'post',
            body:JSON.stringify({username,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        // to check anything inside the backend property we should use the json i.e. object format
        result = await result.json();
        console.log(result.result)
        // const data={
        //     username:result.username,
        //     email:result.email,
        //     _id:result._id,
        //     type:"user"
        // }
        // props.setA(data)
        if(result.role==='User')
        {
          navigate('/');
          localStorage.setItem("user",JSON.stringify({result:result.result._id}))
          console.log('User Login Successful',result.result)
          toast.success("Logged In Successfully")
        }
        else if(result.role==='Admin')
        {
          navigate('/');
          localStorage.setItem("user",JSON.stringify({result:result}))
          console.log('Admin Login Successful',result.Admin_Result)
          toast.success("Logged In Successfully")
        }
        else
        {
          console.log(result)
          toast.error(result.result,{duration:5000})
        }


        // if(result.result.username)
        // {
        //     // we have to store the data inside localstorage in string format.
        //     // localStorage.setItem('user',JSON.stringify(data))
        //     navigate('/');
        // }
        // else
        // {
        //   navigate('/Registration')
        // }
      }
    
      

  return (
    <>
    <Toaster></Toaster>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img src={logimage} alt="" srcSet="" />
        </div>

        <div className="bg-neutral-700 flex flex-col justify-center h-full ">
          <form className="max-w-[450px] max-h-[500] w-full mx-auto p-8 px-8 rounded-lg">
            <h2 className="text-4xl mb-12 dark:text-white font-bold text-center font-Oswald">Login</h2>

            <div className="flex flex-col text-white py-2">
              <img className="h-5 w-5" src={UserIcon} alt="" srcSet="" />
              <input
                type="text"
                className="h-12 bg-neutral-500 mt-2 p-2 focus:border-white-500 focus:bg-neutral-700 focus:outline-none"
                placeholder="Username"value={username} onChange={(e)=>{setusername(e.target.value)}}
              />
            </div>
            <img className="h-6 w-6" src={PasswdIcon} alt="" srcSet="" />
            <div className="flex flex-col text-white py-4 ">
              <input
                className="h-12 bg-neutral-500 mt-2 p-2 focus:border-white-500 focus:bg-neutral-700 focus:outline-none"
                type="password"
                placeholder="Password"value={password} onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <div className="flex justify-end text-white py-2">
              <p></p>
              <p className="text-orange-400 cursor-pointer">forgot password? </p>
            </div>
            <button onClick={(e)=>{handleSubmit(e)}}  className="h-12 w-full my-5 py-2 bg-orange-400 text-2xl font-bold font-sans ">Login </button>
            <div className="flex justify-end text-right text-white">
              <p>Don't have an account ?</p>
              <Link
                to="/Registration" // Use the correct path here
                className={location.pathname==='/Registration'?'border-b-2 border-orange-400':''}>create one</Link>
            </div>
          </form>
          {/* {location.pathname==='/Login'?'border-b-2 border-orange-400':''} */}
        </div>
      </div>
    </>
  );
}
