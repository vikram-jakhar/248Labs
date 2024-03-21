import React from 'react'
import James_Vuong from '../assets/image/james_Vuong-img.webp'
import TriciaYong from '../assets/image/TriciaYong.webp'
import KevinLi from '../assets/image/KevinLi.webp'
import Ryan_Ang from '../assets/image/Ryan_Ang.webp'
import Dylan from '../assets/image/Dylan.webp'
import Ralf from '../assets/image/Ralf.webp'
import Jordan_Stratford from '../assets/image/Jordan_Stratford.webp'
import Jae_Sik_Choi from '../assets/image/Jae_Sik_Choi.webp'

const Expertise = () => {
    return (
        < >
            <div id='ourTeam' className='position-relative overflow-x-clip '>
                <span className="Elipse4"></span>
                <span className="Elipse5"></span>
                <h1 className=' fs-xl fw-bold font_flex position-absolute Our_Team text-gray1 z-n1 text-nowrap  '>Our Team</h1>
                <div className=' container pt-121 '>
                    <div className='text-center'>
                        <h6 className=' fs-1sm font_flex fw-normal ourteembtn ceo'>
                            Our Team
                        </h6>
                    </div>
                    <h3 className='fs-lg font-flex fw-bold text-center text-white'>Behind our expertise</h3>
                    <div className="row  gap-lg-0 gap-4  flex-lg-row ">
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={James_Vuong} alt="James_Vuong" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center  mt-md-0 mt-2 justify-content-md-start justify-content-center  gap-2  '>
                                            <h2 className='fs-md fw-semibold  font-flex text-white'>
                                                James Vuong
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Co-CEO)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an
                                        </p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-4'>impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={TriciaYong} alt="James_Vuong" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex mt-md-0 mt-2 justify-content-center justify-content-md-start  align-items-center gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Tricia Yong
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Co-CEO)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer                             </p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 '>products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={KevinLi} alt="KevinLi" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-center justify-content-md-start mt-md-0 mt-2 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Kevin Li
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Co-CEO)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His                                                                </p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-4 '>strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={Ryan_Ang} alt="Ryan_Ang" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-center justify-content-md-start mt-md-0 mt-2 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Ryan Ang
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Lorem Ipsum)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi </p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-5 '>products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={Dylan} alt="Dylan" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-md-start  justify-content-center  mt-2 mt-md-0 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Dylan
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Executive Producer)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.</p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-5 pb-5 '>Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={Ralf} alt="Ralf" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-center  justify-content-md-start  mt-2 mt-md-0 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Ralf
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Lorem Ipsum)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.</p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-4 '>Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <img src={Jordan_Stratford} alt="Jordan_Stratford" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-center justify-content-md-start mt-2 mt-md-0 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white text-nowrap '>
                                                Jordan Stratford
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal text-nowrap  '>(Creative Director)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development</p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-5 pb-5 '>for television with the world’s largest streaming producer.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center ">
                            <div className='cards'>
                                <div className="row align-items-center ">
                                    <div className="col-md-6">
                                        <img src={Jae_Sik_Choi} alt="Jae_Sik_Choi" className='w-100 imgw' />
                                    </div>
                                    <div className="col-md-6  ps-md-0">
                                        <div className='d-flex align-items-center justify-content-center  justify-content-md-start mt-2 mt-md-0 gap-2  '>
                                            <h2 className='fs-md fw-semibold font-flex text-white'>
                                                Jae Sik Choi
                                            </h2>
                                            <p className='ceo font-flex fs-1sm fw-normal '>(Lorem Ipsum)</p>
                                        </div>
                                        <p className='fs-1sm font_flex fw-normal  max_283 text-light2 mt-2 lh-24'>
                                            Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB</p>
                                    </div>
                                </div>
                                <p className=' fs-1sm font_flex fw-normal text-light2 max_530 lh-24 mt-2 mb-5'>Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.
                                </p>
                                <span className='ellipescards'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Expertise
