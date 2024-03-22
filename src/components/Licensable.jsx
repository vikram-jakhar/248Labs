import React, { useState } from 'react'
import PlayVideo from '../assets/image/PlayVideo.webp'
import playIcon from '../assets/image/playIcon.webp'
import video from '../assets/video/video.mp4'

const Licensable = () => {
  const [modl, setmodl] = useState(false);
  const open = () => {
    setmodl(true);
  };
  const close = () => {
    setmodl(false);
  };
  if (modl === true) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }
  return (
    <>
      <div className="bg-black max_1920 position-relative  z-1">
        <span className='Elipse3 '></span>
        <div className='container '>
          <h2 className='fs-lg fw-bold font_black text-white text-center pt-75'>A rich, inhabited, and licensable world.</h2>
          <div className='position-relative '>
            <img src={PlayVideo} alt="PlayVideo" className=' pos  w-100  mt-4 mb-4 ' />
            <img onClick={open} src={playIcon} alt="playIcon" width={55} height={55} className=' position-absolute playIcon' />
            {modl && (
              <div
                onClick={close}
                className="backdrop-blur-md bakdrop flex justify-center items-center h-screen top-[0] w-screen fixed left-0 z-20 "
              >
                <div className="m ">
                  <div className={`${modl ? "" : ""} `}>
                    <div className="position-relative d-flex justify-content-center ">

                      <iframe
                        className="video" width={50} height={20}
                      autoCorrect='on' allowFullScreen
                        src={video} type="video/mp4"
                      >
                      </iframe>

                      <div onClick={close} className="z_20 position-relative cursor-pointer group ">
                        <span className="d-flex bg-black  arow1"></span>
                        <span className="d-flex bg-black  arow2"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className='fs-1sm fw-normal font_flex max_793 text-light1 text-center mx-auto '> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.</p>

        </div>
      </div>

    </>
  )
}

export default Licensable
