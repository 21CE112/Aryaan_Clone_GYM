import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='footer bg-[#3f3f3f] font-oswald py-16 text-[#dddddd] flex p-10 justify-around'>
        <div className='tags uppercase  space-y-3'>
          <div>trainers</div>
          <div>packages</div>
          <div>inquiry</div>
        </div>
        <div className='w-40 leading-7'>
        3rd Floor, Mahalaxmi Complex, Near Hanuman Mandir, Harni, Vadodara, Gujarat 390022
        </div>
        <div className='space-y-2'>
          <div>Email@Examle.com</div>
          <div>+9191919191</div>
          <div className='flex gap-5 text-2xl'>
            <FaFacebookSquare/>
            <FiInstagram/>
          </div>
        </div>
      </div>
  )
}

export default Footer