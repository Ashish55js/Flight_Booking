import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import Banner from "../assets/Images/banner.mp4"

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>

        <div className='text-center text-4xl font-semibold mt-7'>
            Welcome to
            <HighlightText text={"Flight Booking App"} />
        </div>
        <button className='mt-10 text-2xl bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Book Flight Now
        </button>
        <div className='mx-3 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

          </div>

      {/*Footer */}
      {/* <Footer /> */}

    </div>
  )
}

export default Home
