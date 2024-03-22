import React from 'react'
import Domin from '../assets/image/domin.webp'
import Comanbtn from './Comanbtn'

const Companions = () => {
    return (
        <>
            <div className='bg-black max_1920 pb-75 position-relative z-1 overflow-x-clip '>
                <span className='Elipse2 position-absolute '></span>
                <div className='container '>
                    <img src={Domin} alt="Dominimg" className='w-100 mt-75 ' />
                    <div className="row">
                        <div className="col-lg-3">
                            <div className=' d-flex flex-column flex-lg-column flex-md-row  flex-SM-column  justify-content-lg-start justify-content-md-around align-items-lg-start align-items-center  '>
                                <button className='dominbtn fs-2sm font_flex fw-bold'>name@domain.com</button>
                                <Comanbtn text='Make Your Move' padding='makebtn' />
                            </div>

                        </div>
                        <div className="col-lg-9">
                            <p className='fs-1sm font-flex fw-normal text-light1 max_793 text-capitalize mt-25  '>Unveiled is a unique <span className=' fw-semibold text-white'>collectible card game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence. </p>
                            <p className='fs-1sm font-flex fw-normal text-light1 max_793 text-capitalize '>You play <span className='fw-semibold text-white'>a rogue merchant trader</span> allied to a noble house, alongside your <span className='fw-semibold text-white'>cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.</p>
                            <p className='fs-1sm font-flex fw-semibold text-white  text-capitalize '>What’s your next move?</p>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Companions
