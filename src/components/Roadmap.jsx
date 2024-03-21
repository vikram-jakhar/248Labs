
import React from "react";
import india from "../assets/Svg/India.svg";
import Aus from "../assets/Svg/Aus.svg";
import USA from "../assets/Svg/USA.svg";
import roadmapLOgo from "../assets/Svg/roadmapLogo.svg";
import STAR from "../assets/Svg/STAR.svg";
const Roadmap = () => {
    return (
        <section id="Roadmap" className=" bg-black pt-sm-5 position-relative z-1 overflow-x-clip    "  >
            <span className="Elipse6"></span>
            <h1 className=' fs-xl fw-bold font_flex position-absolute Roadmapo_flow text-gray1 z-n1 '>Roadmap</h1>
            <div className="Roadmapbg ">
                <div className=" container pt-sm-5 mt-sm-5 ">
                    <span className=" d-flex align-items-center justify-content-center ">
                        <p className="RoadButton fw-bold font_flex fs-sm1 m-0 d-inline-block gradient-border-mask">
                            Road map
                        </p>
                    </span>
                    <h2 className=" text-center pb-5 fw-bold fs-lg font_flex mb-0 pt-3 text-white">
                        Milestones and markers
                    </h2>
                    <span className="py-5 d-sm-block "></span>
                    <div className="row justify-content-between  position-relative RoadmapLine z-1 ">
                        <img src={roadmapLOgo} alt="roadmapLOgo" className="RoadmapLOGo " />
                        <div className="col-sm-5 ps-5 ps-sm-0 "></div>
                        <div className="col-sm-5 ps-5 ps-sm-0  pb-sm-5 pt-5 mt-1"            >
                            <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column  position-relative w-100 text-center z-1 ">
                                    <span className="fw-normal font_flex fs-1md  fs-2xl ceo ">
                                        Oct 2014
                                    </span>
                                    <p className=" mb-0 fw-normal pt-2 fs-1md  text-light2 font_flex">
                                        Hired our first employee
                                    </p>
                                    <div className="ellipes-card-roadmap"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0">
                            <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                                    <span className="fw-normal font_flex fs-1md mb-1 fs-2xl ceo ">
                                        Nov 2014
                                    </span>
                                    <p className="mb-0 fw-normal pt-2 fs-1md  text-light2 font_flex">
                                        Launched Bitcoin wallet
                                    </p>
                                    <div className="ellipes-card-roadmap"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-5 ps-sm-0 "></div>
                        <div className="col-sm-5 ps-5 ps-sm-0 "></div>
                        <div className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0">
                            <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                                    <span className="fw-normal font_flex fs-1md mb-1 fs-2xl ceo ">
                                        Oct 2015
                                    </span>
                                    <p className="mb-0 fw-normal pt-2 fs-1md  text-light2 font_flex">
                                        1st prize by Bit angels at Coin Agenda, Las Vegas
                                    </p>
                                    <div className="ellipes-card-roadmap"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5 mb-sm-5 mb-0">
                            <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                                    <span className="fw-normal font_flex fs-1md mb-1 fs-2xl ceo">
                                        Jan 2020
                                    </span>
                                    <div className=" d-flex align-items-center gap-3 justify-content-center pt-2">
                                        <p className=" mb-0 text-nowrap fw-normal fs-2xl lh-27 text-light1">
                                            launch On
                                        </p>
                                        <img src={india} alt="india" width={21} />
                                        <img src={Aus} alt="Aus" width={22} />
                                        <img src={USA} alt="USA" width={22} />
                                    </div>
                                    <div className="ellipes-card-roadmap"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-5 ps-sm-0 "></div>
                        <div className="col-sm-5 ps-5 ps-sm-0 "></div>
                        <div
                            data-aos="fade-left"
                            className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5"
                        >
                            <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                                    <span className="fw-normal font_flex fs-1md mb-1 fs-2xl ceo ">
                                        Oct 2014
                                    </span>
                                    <p className="mb-0 fw-normal pt-2 fs-1md  text-light2 font_flex">
                                        Trusted by 10 Millions+ Users
                                    </p>
                                    <img src={STAR} alt="STAR" />
                                    <div className="ellipes-card-roadmap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ellipes-roadmap"></div>
        </section>
    );
};

export default Roadmap;
