import React from 'react'
import Comanbtn from './Comanbtn'

const Keepup = () => {
    return (
        <>
            <div className='keepup d-flex max_1920 flex-column justify-content-center align-items-center '>
                <div className='KeepBox text-center  '>
                    <h4 className='fs-lg text-white fw-bold font_flex text-center '>What’s Next</h4>
                    <p className='fs-1sm  fw-semibold font_flex text-white mb-2'>92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
                    <p className='fs-1sm  fw-normal font_flex text-light2 mb-4 '> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
                    <Comanbtn text='Try to keep up' />

                </div>
            </div>

        </>
    )
}

export default Keepup
