import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {packages} from '../data'

const Packages = () => {
  return (
    <div className='bg-[#353535]'>
        {/* <Navbar/> */}
        <div className='relative m-0'>
            <div className='absolute uppercase rotate-90 font-oswald font-black top-40 left-[-120px] text-7xl  text-grey-40/5'>PACKAGES</div>


            <div className='w-[33%] text-center pt-16 m-auto tracking-wide text-grey-40 font-oswald space-y-4'>
                <h1 className='uppercase font-medium text-3xl'>Membership packages</h1>
                <div className='text-grey-40/40'>Explore our membership plans and find the perfect fit for your fitness journey. From flexible options for busy schedules to comprehensive packages for dedicated enthusiasts, we have the right plan to help you reach your goals.</div>
            </div>

            <div className='py-24 space-y-12 font-oswald tracking-wider'>
                {packages.map((ind) => (
                    <div className='w-[40%] p-8 m-auto text-grey-40 bg-[#3f3f3f] drop-shadow-xl'>
                        <div className='text-3xl uppercase text-orange-400'>{ind.title}</div>
                        <div className='flex space-x-40 mt-5 justify-between'>
                            <div className='pt-1'>Without personal trainer</div>
                            <div><spam className='text-xl text-orange-400'>₹{ind.price1}</spam> /{ind.time}</div>
                        </div>
                        <div className='flex space-x-40 mt-2  justify-between'>
                            <div>Personal trainer</div>
                            <div><spam className='text-xl text-orange-400'>₹{ind.price2}</spam> /{ind.time}</div>
                        </div>
                    </div>
                ))}
            </div>
           
            
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Packages