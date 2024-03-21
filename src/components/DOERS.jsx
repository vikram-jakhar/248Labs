import React from 'react'

const DOERS = () => {
    const doers = [
        {
            heading: "World Building",
            para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
        },
        {
            heading: "Game Design",
            para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination."
        },
        {
            heading: "Art and Sound",
            para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down."
        },
    ]
    const Crdsdata = doers.map((doersdata, i) => (
        <div key={i} className='col-lg-4 d-flex justify-content-center align-items-center  '>
            <div className='bg-card mb-5 position-relative overflow-hidden  z-1  '>
                <h4 className=" m-0 text-white roboto-flex fs-lg1 pb-4 fw-bold  ">{doersdata.heading}</h4>
                <p className='text-light2 font_flex fs-sm fw-normal m-0 max_310 '>{doersdata.para}</p>
                <span className='ellipescards'></span>
            </div>
        </div>
    ))
    return (
        <>
            <div className='pt-121 bg-black mt1 position-relative overflow-x-clip z-1  '>
                <span className='Elipse1 position-absolute '></span>
                <h1 className=' fs-xl fw-bold font_flex position-absolute about-h text-gray1 z-n1 text-nowrap  '>About Us</h1>
                <div className='container'>
                    <div className="row pb-114 pt-sm-5 pt-0 ">
                        <div className="col-lg-6">
                            <div className=' d-flex mb-3'>
                                <p className='RoadButton fw-bold roboto-flex fs-sm1 m-0 gradient-border-mask'>DOERS OVER TALKERS</p>
                            </div>
                            <h2 className='font_flex fw-bold fs-lg text-white max_310 pb-75'>Game First.Always.</h2>
                        </div>
                        <div className='col-lg-6 pt-50 ps-lg-5 ps-3 mb-lg-0 mb-5'>
                            <h4 className='font_flex fw-medium fs-2sm text-white m-0 mb-2 pb-1'>This is difficult</h4>
                            <p className=' m-0 fs-1sm font_flex text-light2 fw-normal max-w-512'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold '>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                        </div>
                    </div>
                    <div className='row justify-content-center   pb-130'>
                        {Crdsdata}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DOERS;