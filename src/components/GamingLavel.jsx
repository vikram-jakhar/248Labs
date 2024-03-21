import React from 'react'
import Comanbtn from './Comanbtn'

const GamingLavel = () => {
    return (
        <>
            <div className='bg-black pb-75 position-relative  z-1 overflow-x-clip'>
                <div className='gamingBg d-flex   align-items-center '>
                    <div className='container d-flex justify-content-end   '>
                        <div className='box1'>
                            <h3 className='font-flex text-white fw-bold mb-32 fs-lg '>Level up your gaming experience</h3>
                            <div className='d-flex justify-content-start '>
                                <Comanbtn text='Play Unvilled' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GamingLavel
