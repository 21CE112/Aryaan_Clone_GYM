import React from 'react'
// import hero_page from '../assets/hero_page.jpg'
import logo from '../assets/logo.png'
import { Link, useLocation} from 'react-router-dom'
//import Select_package from '../Pages/Select_package';

const AdminNavbar = () => {
  const location = useLocation();
  return (
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
        <div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="packages" 
              className={`${location.pathname === '/' ? 'border-b-2 border-orange-400' : ''}`}>Transaction</Link>
        </div>
        <div className=' my-auto text-grey-40 hover:text-orange-400'>
          <Link to="packages" 
              className={`${location.pathname === '/' ? 'border-b-2 border-orange-400' : ''}`}>Customer</Link>
        </div>
        <div className=' bg-orange-400 pt-2 px-3 rounded-sm drop-shadow-lg hover:drop-shadow-xl ' >
        <Link to="/Login" className={`${location.pathname === '/Login' ? 'border-b-2 border-orange-400' : ''}`}>sign in</Link></div>
      </div>
    </div>
  )
}

export default AdminNavbar
