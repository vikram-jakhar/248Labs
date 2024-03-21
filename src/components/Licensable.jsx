import React from 'react'
import PlayVideo from '../assets/image/PlayVideo.webp'

const Licensable = () => {
  return (
    <>
      <div className="bg-black position-relative  z-1">
        <span className='Elipse3 '></span>
        <div className='container '>
          <h2 className='fs-lg fw-bold font_black text-white text-center pt-75'>A rich, inhabited, and licensable world.</h2>
          <img src={PlayVideo} alt="PlayVideo" className=' w-100  mt-4 mb-4 ' />
          <p className='fs-1sm fw-normal font_flex max_793 text-light1 text-center mx-auto '> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.</p>

        </div>
      </div>

    </>
  )
}

export default Licensable
