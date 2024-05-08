import React, { useEffect } from 'react'
import { useState } from 'react';
// import hero_page from '../assets/hero_page.jpg'
import logo from '../assets/logo.png'
import { Link, useLocation} from 'react-router-dom'
import Select_package from '../Pages/Select_package';
import { useNavigate } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast';
const Navbar = () => {
  const [user,setUser] = useState()
  useEffect(()=>{
    let u = localStorage.getItem('user')  
  u = JSON.parse(u)
  // console.log(u.result.role)
  setUser(u)
  })
  const location = useLocation();
  const navigate = useNavigate()
  const Logout = ()=>{
   localStorage.clear()
   toast.success("Logged Out Successfully..!!")
   navigate('/')
  }
  

  // const getAction = ()=>{
  //   let u = localStorage.getItem('user')
  //   u = JSON.parse(u)
  //   console.log(u)
  //   setUser(u)
  //   return u.role
  // }
  return (
    <>
    <Toaster></Toaster>
    <div className='flex justify-between px-20 pb-3 bg-[#353535]'>
      <div className="w-40" id="logo">
        <picture>
          {/* <source media="(min-width:650px)" srcset={hero_page}/> */}
          <img src={logo}></img>
        </picture>
      </div>
      <div className='flex space-x-9 pt-5 font-oswald font-normal tracking-wide text-lg '>
        <div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="/"  className={`${location.pathname === '/' ? 'border-b-2 border-orange-400' : ''}`}>HOME</Link></div>
        <div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="trainers"  className={` ${location.pathname === '/trainers' ? 'border-b-2 border-orange-400' : ''}`}>TRAINERS</Link></div>
        <div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="packages" 
              className={`${location.pathname === '/packages' ? 'border-b-2 border-orange-400' : ''}`}>PACKAGES</Link>
        </div>
       {user?user.result.role==='Admin' ?<div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="/customerlist" 
              className={`${location.pathname === '/packages' ? 'border-b-2 border-orange-400' : ''}`}>CUSTOMERS</Link>
        </div>:<></>:<></>}
        {user?user.result.role==='Admin' ?<div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="/transectionlist" 
              className={`${location.pathname === '/packages' ? 'border-b-2 border-orange-400' : ''}`}>TRANSACTIONS</Link>
        </div>:<></>:<></>}
        <div className=' bg-orange-400 pt-2 px-3 rounded-sm drop-shadow-lg hover:drop-shadow-xl ' >
        {
          user ? <button onClick={Logout} className='border-b-2 border-orange-400'>Logout</button>:<Link to="/Login" className='border-b-2 border-orange-400'>
Sign In
          </Link>
        }
        {/* <button onClick={handleClick} className={`${location.pathname === '/Login' ? 'border-b-2 border-orange-400' : ''}`}>{getAction?"Logout":"sign in"}</button></div> */}
      </div>
    </div>
    </div>
    </>
  )
}


export default Navbar;
