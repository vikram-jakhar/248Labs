import React, { useState } from 'react'
import logo from '../assets/Svg/logo.svg'
import Comanbtn from './Comanbtn'

const Herosec = () => {
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    };
    return (
        <>
            <div className='hero-bg max_1920 d-flex  flex-column '>

                <div className="container">
                    <nav className='d-flex align-items-center justify-content-between mt-3    '>

                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className={`${nav ? "left-0" : "left-100 "} d-flex align-items-center  gap-4 mobileView `}>
                            <li><a href="#About" className='list fs-1sm text-light1 fw-normal font_flex '>About Us</a></li>
                            <li><a href="#ourTeam" className='list fs-1sm text-light1 fw-normal font_flex '>Our Team</a></li>
                            <li><a href="#Roadmap" className='list fs-1sm text-light1 fw-normal font_flex pe-lg-4 pe-0'>Roadmap</a></li>
                            <li><a href="#" > <Comanbtn text='Contact Us' /></a></li>
                        </ul>
                        <label className=' d-lg-none' onClick={show}>
                            {nav ? (
                                <div className='position-relative  z-40'>
                                    <span className=' navmenu'></span>
                                    <span className='navmenu2 '></span>
                                </div>
                            ) : (
                                <div className='position-relative  z-40'>
                                    <span className=' navmenu3'></span>
                                    <span className='navmenu3'></span>
                                    <span className=' navmenu3'></span>
                                </div>
                            )}
                        </label>


                    </nav>
                </div>
                <div className='flex-grow-1 d-flex align-items-center  justify-content-center flex-column  '>
                    <h1 className='fs-1lg text-center text-white font_flex fw-bold max_873 mx-auto '>
                        Changing the way games are made
                    </h1>
                    <p className='fs-1md text-light1 font_flex fw-normal'>Redefining the future of play</p>
                </div>

            </div>



        </>
    )
}

export default Herosec
