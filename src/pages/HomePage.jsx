import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import style from '../styles/HomePage.module.css';
import image from '../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiServer } from "react-icons/ci";


export default function HomePage() {
  return (
    <>
        <section class='vh-100 d-flex align-items-center'>
            <div className='container'>
                <div className="row">
                    <div className={`col-6 ${style.right_box}`}>
                        <div>
                            <h1 style={{fontSize:'3rem'}} class='text-white fw-bold'>The Bridge Between <span style={{color:'#DAE2FD'}}>Top Tech</span> Talent and Global Opportunities.</h1>
                            <p className='my-4 text-secondary lh-base fs-5'>A high-performance ecosystem designed for elite developers. Showcase your code, verify your skills, and match with the world's most innovative engineering teams.</p>
                            <div>
                                <button className='btn py-3 me-3 border'>Hire top developers <FaArrowRight /></button>
                                <button className='btn border py-3'>Find your dream job</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 shadow-lg overflow-hidden rounded-3 p-0 left-box">
                        <div>
                            <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class='stats border-top border-bottom border-secondary' style={{backgroundColor:'#060E20',padding:'4rem 0'}}>
            <div className="container p-0">
                <div className="row p-0 g-0">
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                        <h1 class='m-0 text-center fw-bold text-lowercase' style={{fontSize:'2.8rem',color:'#BAC1FF'}}>50K+</h1>
                        <p class=' lh-1 m-0' style={{color:'#efefef',fontSize:'.8rem'}}>Verified Devs</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                        <h1 class='m-0 text-center fw-bold text-lowercase' style={{fontSize:'2.8rem',color:'#3FDEA3 '}}>2.4K</h1>
                        <p class='flh-1 m-0' style={{color:'#efefef',fontSize:'.8rem'}}>Open positinos</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                        <h1 class='m-0 text-center fw-bold text-lowercase' style={{fontSize:'2.8rem',color:'#4CD7F6'}}>$140K</h1>
                        <p class='lh-1 m-0' style={{color:'#efefef',fontSize:'.8rem'}}>Avg.Salary</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                        <h1 class='m-0 text-center fw-bold text-lowercase' style={{fontSize:'2.8rem',color:'#BAC1FF'}}>15min</h1>
                        <p class='lh-1 m-0' style={{color:'#efefef',fontSize:'.8rem'}}>Match time</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className={`col-12 ${style.hiringBox}`}>
                        <h1 class={style.hiringHd}>Precision Engineering for Hiring</h1>
                        <p class={style.hiringTxt}>We've automated the signal-to-noise ratio in tech recruitment. Get straight to the technical truth.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="cards h-100">
                            <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                <div className={style.user_icon}><FaRegUserCircle className={style.userIcon} /></div>
                                <div>
                                    <span className='d-inline-block mb-3'>Rich Profiles</span>
                                    <p className='mb-4'>Go beyond CVs. Link GitHub repos, showcase live deployments, and present verified skill endorsements directly in your profile.</p>
                                    <div className={`${style.git_progress} px-3 py-3`}>
                                        <p className='text-white d-flex justify-content-between'><span>GitHub Activity</span><span>Top 1%</span></p>
                                        <div class='d-flex'>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                            <div className={`${style.progress_dot} me-1`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cards h-100">
                            <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                <div className={style.user_icon}><MdOutlineVerified className={style.userIcon} /></div>
                                <div>
                                    <span className='d-inline-block mb-3'>Verified Projects</span>
                                    <p className='mb-4'>Trust but verify. Our automated system analyzes public contributions to ensure skills match the claims made on profiles.</p>
                                    <div className={style.tech_stack}>
                                        <button class='btn me-2 p-0'>PHP</button>
                                        <button class='btn me-2 p-0'>Larvel</button>
                                        <button class='btn p-0'>React</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cards h-100">
                            <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                <div className={style.user_icon}><CiServer className={style.userIcon} /></div>
                                <div>
                                    <span className='d-inline-block mb-3'>Smart Matching</span>
                                    <p className='mb-4'>Our proprietary algorithm maps technical debt, stack compatibility, and team culture to find the perfect long-term fit.</p>
                                    <div className={style.progress_container}>
                                        <div className={style.progress_bar}>
                                            <p class='mb-0 text-white fw-bold' >Optimization Algorithm v2.4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
