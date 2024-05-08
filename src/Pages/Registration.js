// import ellipse from "./Assest/ellipse-2@2x.png"
import line from "../assets/RegImg.png";
import {React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast'


function Registration(props) {
  const mobileNoValidate = (MobileNO)=>{
      if(MobileNO.length==10)
      {
        return false;
      }
      return true
  }
  const emailValidate = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? true  
    : false;

    const passwordValidate = (pass,cpass)=>{
      const validPass = /[`!@#$%^&*()_+\-=[\]{};':",.<>|\\?~]/g;
        let error = null
        if(!(validPass.test(pass)))
        {
          // return toast.error("Password must contain atleast one special character..!!")
          return "special"
        }
        if(pass.length < 8 || cpass.length < 8)
        {
           return "length"
        }
        // return error;
    }
  const [username,setUsername] = useState("");
	const [email,setEmail] = useState("");
	const [password,setpassword] = useState("");
	const [cpass,setCpass] = useState("");
  const [Gender,setGender] = useState("");
  const [DOB,setDOB] = useState("");
  const [MobileNO,setMobileNO] = useState("");
  const [Age,setAge] = useState("");
  const [Address,setAddress] = useState("");
  const [HealthStatus,setHealthStatus] = useState("");
  const [Fullname,setFullname] = useState("");
  const [errmessAge,setErr] = useState("")
  const [MarriAgeStatus,setMarriAgeStatus] = useState("");
  const navigate=useNavigate();
	//const num = Math.floor(Math.random()*1000000);
	//const otp=num.toString(); 
	const collectData = async()=>{
	 	if(password===cpass)
	 	{
	// 			props.setOtp(otp);
	// 			setErr("") 
      const passval = passwordValidate(password,cpass)
      if(emailValidate(email))
      {
        return toast.error("Invalid Email")
      }
      else if(passval==="length")
      {
        return toast.error("Password must be consist of atleast 8 characters")
      }
      else if(passval==="special")
      {
        return toast.error("Password must contain atleast one special character..!!")
      }
      else if(mobileNoValidate(MobileNO))
      {
        return toast.error('Mobile number should contain 10 digits..!!')
      }
      else{
		console.log(username,email)
		let result = await fetch("http://localhost:8000/register",{
	  method:"post",
		body:JSON.stringify({username,password,Fullname,email,MobileNO,Gender,DOB,Age,Address,HealthStatus,MarriAgeStatus,payment:"false"}),
	headers:{
	'Content-Type':'application/json'
		}
	});
			result = await result.json();
				if(result){
          localStorage.setItem('user',JSON.stringify({result}))
				navigate("/Select_packAge");
			 	}
				else
				{
					navigate("/login");
				}
			}
    }
			else
			 {
			 	setErr("passwords are not matching..!!")
        console.log(errmessAge)
        return toast.error("passwords are not matching..!!")
       }
      
      }
  return (
    <>
    <Toaster></Toaster>
      <div className="flex flex-col h-full w-full bg-[#353535] justify-center text-white ">
        <form
          className="  max-w-[700px] flex flex-col mb-8 h-full w-full mx-auto p-8 px-8 rounded-lg text-base "
          action=""
        >
          <h2 className="text-4xl mb-12 mt-12 dark:text-white font-bold text-center font-Oswald">
            Registration
          </h2>

          <input
            type="text"
            className="rounded h-12 bg-neutral-700 mt-2 p-2 my-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
            placeholder="Username"value={username} onChange={(e)=>{setUsername(e.target.value)}} required
          />

          <div className=" h-12 m-0 p-0 my-2 flex flex-row  justify-between">
            <input
              type="password"
              className="rounded  w-80  h-12 mr-3 my-2 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="password"value={password} onChange={(e)=>{setpassword(e.target.value)}}
              required
            />

            <input
              type="password"
              className="rounded w-80 h-12 my-2 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Confirm password"value={cpass} onChange={(e)=>{setCpass(e.target.value)}}
              required
            />
          </div>

          <div className="my-6">
            <img src={line} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="rounded w-80 h-12 my-2 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
            placeholder="Fullname" value={Fullname} onChange={(e)=>{setFullname(e.target.value)}}
            required
          />

          <div className=" h-12 m-0 p-0 my-2 flex flex-row  justify-between">
            <input
              type="text"
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Gender"value={Gender} onChange={(e)=>{setGender(e.target.value)}}
              required
            />

            <input
              type="email"
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className=" h-12 m-0 p-0 my-4 flex flex-row  justify-between  ">
            <input
              type="number"
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Age"value={Age} onChange={(e)=>{setAge(e.target.value)}}
              required
            />

            <input
              type="date"
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Date of Birth"value={DOB} onChange={(e)=>{setDOB(e.target.value)}}
              required
            />
          </div>

          <input
            type="text"
            className="rounded  h-12 bg-neutral-700  p-2 my-4  focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
            placeholder="Address"value={Address} onChange={(e)=>{setAddress(e.target.value)}}
            required
            />

          <div className="h-12 m-0 p-0   mb-4 flex flex-row  justify-between ">
            <input
              type="text"
              name=""
              id=""
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Mobile number"value={MobileNO} onChange={(e)=>{setMobileNO(e.target.value)}}
              required />

            <input
              type="text"
              name=""
              id=""
              className="rounded  w-80  my-2 h-12 mr-3 bg-neutral-700 mt-2 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none"
              placeholder="Marriage Status"value={MarriAgeStatus} onChange={(e)=>{setMarriAgeStatus(e.target.value)}}
               />
              </div> 
            {/* <input
              type="radio"
              name="MarriAgeStatus"
              id="married"
              className=" h-5 w-5 mt-4"value={MarriAgeStatus} onChange={(e)=>{setMarriAgeStatus(e.target.value)}}
            />
            <label className="mt-3 mr-4" htmlFor="married">
              Married
            </label>
            <input
              type="radio"
              name="MarriAgeStatus"
              id="unmarried "
              className=" h-5 w-5 mt-4"
            />
            <label className="mt-3 mr-4" htmlFor="unmarried">
              Unmarried
            </label>*/}
          

          <input
            type="text"
            placeholder="Health problem"
            className=" rounded  h-12 bg-neutral-700 mt-4 p-2 focus:border-white-500 focus:bg-neutral-600 focus:outline-none mb-2"
            value={HealthStatus} onChange={(e)=>{setHealthStatus(e.target.value)}}
          />
        </form>
        <div className=" flex flex-row justify-center mt-3 p-3 mb-4">
          <input type="checkbox" className="h-5 w-5 mr-2 mt-3" name="" id="" 
            required
          />
          <label htmlFor="" className="text-center text-xl   p-2">
            Please enroll me as a member of your gymnasium. The information given
            above is correct to the best of my knowledge.
          </label>
          {/* <button href="/" onClick={collectData} className="loginn" id="openbtnn">Register</button> */}
        </div>
        <button onClick={collectData} id="openbtnn" className="h-12 w-full my-5 py-2 bg-orange-400 text-2xl font-bold font-sans ">Register</button>

      </div>
    </>
  );
          }          


export default Registration;
