import React from 'react'
import Navbar from '../components/Navbar'
import {trainers} from '../data'
import profile1 from '../assets/profile1.jpg'
import Footer from '../components/Footer'

const Trainers = () => {
  return (
    <div className='bg-[#353535]'>
        {/* <Navbar/> */}
        <div className='relative'>
            <div className='absolute uppercase rotate-90 font-oswald font-black top-40 left-[-110px] text-7xl  text-grey-40/5'>trainers</div>


            <div className='w-[33%] text-center pt-16 m-auto tracking-wide text-grey-40 font-oswald space-y-4'>
                <h1 className='uppercase font-medium text-3xl'>our expert team</h1>
                <div className='text-grey-40/40'>Discover the expertise and passion our trainers bring to help you achieve your health and wellness goals</div>
            </div>

            <div className='py-24 space-y-12 font-oswald tracking-wider'>
                {trainers.map((id) => (
                    <div className='w-[50%] flex space-x-16 m-auto text-l text-grey-40 font-light bg-[#3f3f3f]   drop-shadow-lg'>
                        <div className=''>
                            <img className='h-64 w-60' src={profile1}></img>
                        </div>
                        <div className='p-5 space-y-6 '>
                            <div><spam className='text-orange-400 text-xl'>Name </spam>:- {id.name}</div>
                            <div><spam className='text-orange-400 text-xl'>Awards</spam> :- {id.awards}</div>
                            <div className='flex space-x-16'>
                                <div><spam className='text-orange-400 text-xl'>Experience</spam> :- {id.experience}</div>
                                <div><spam className='text-orange-400 text-xl'>Age </spam>:- {id.age}</div>
                            </div>
                            <div className='w-64 text-center m-auto text-grey-40/40 font-regular text-xl'>{id.slogan}</div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Trainers