// Import React to enable JSX and component creation
import React from 'react'

// Import icons from react-icons library
import { FaArrowRight } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { MdOutlineTerminal } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineBolt } from "react-icons/md";

// Import custom CSS module for styling the HomePage
import style from '../styles/HomePage.module.css';

// Import images to display in the component
import image from '../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import image2 from '../assets/luis-gonzalez-jgzdwJWCPDI-unsplash.jpg'

export default function HomePage() {
    return (
        <>
            {/* Hero Section - displays main headline, description, and call-to-action buttons */}
            <section className='vh-100 d-flex align-items-center'>
                <div className='container'>
                    <div className="row">
                        {/* Left column with heading and buttons */}
                        <div className={`col-md-6 ${style.right_box}`}>
                            <div>
                                <h1 style={{ fontSize: '3rem' }} className='text-white fw-bold'>
                                    The Bridge Between <span style={{ color: '#DAE2FD' }}>Top Tech</span> Talent and Global Opportunities.
                                </h1>
                                <p className='my-4 text-secondary lh-base fs-5'>
                                    A high-performance ecosystem designed for elite developers. Showcase your code, verify your skills, and match with the world's most innovative engineering teams.
                                </p>
                                <div className='d-flex '>
                                    <button className='btn py-3 me-3 border'>Hire top developers <FaArrowRight /></button>
                                    <button className='btn border py-3'>Find your dream job</button>
                                </div>
                            </div>
                        </div>
                        {/* Right column with hero image (hidden on smaller screens) */}
                        <div className="col-6 d-none d-md-block overflow-hidden rounded-3 p-0 left-box">
                            <div >
                                <img src={image} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - displays key metrics like verified devs, open positions, average salary, match time */}
            <section className='stats border-top border-bottom border-secondary' style={{ backgroundColor: '#060E20', padding: '4rem 0' }}>
                <div className="container p-0">
                    <div className="row p-0 g-0">
                        {/* Stat 1: Verified Developers */}
                        <div className="col-sm-6 mb-5 mb-md-0 col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h1 className='m-0 text-center fw-bold text-lowercase' style={{ fontSize: '2.8rem', color: '#BAC1FF' }}>50K+</h1>
                            <p className=' lh-1 m-0' style={{ color: '#efefef', fontSize: '.8rem' }}>Verified Devs</p>
                        </div>
                        {/* Stat 2: Open Positions */}
                        <div className="col-sm-6 mb-5 mb-md-0 col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h1 className='m-0 text-center fw-bold text-lowercase' style={{ fontSize: '2.8rem', color: '#3FDEA3 ' }}>2.4K</h1>
                            <p className='flh-1 m-0' style={{ color: '#efefef', fontSize: '.8rem' }}>Open positinos</p>
                        </div>
                        {/* Stat 3: Average Salary */}
                        <div className="col-sm-6 mb-5 mb-md-0 col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h1 className='m-0 text-center fw-bold text-lowercase' style={{ fontSize: '2.8rem', color: '#4CD7F6' }}>$140K</h1>
                            <p className='lh-1 m-0' style={{ color: '#efefef', fontSize: '.8rem' }}>Avg.Salary</p>
                        </div>
                        {/* Stat 4: Match Time */}
                        <div className="col-sm-6 mb-0 col-sm-5 mb-5 mb-md-0 col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h1 className='m-0 text-center fw-bold text-lowercase' style={{ fontSize: '2.8rem', color: '#BAC1FF' }}>15min</h1>
                            <p className='lh-1 m-0' style={{ color: '#efefef', fontSize: '.8rem' }}>Match time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - displays three cards highlighting key features of the platform */}
            <section style={{ padding: '10rem 0' }}>
                <div className="container">
                    {/* Section header */}
                    <div className="row">
                        <div className={`col-12 ${style.hiringBox}`}>
                            <h1 className={style.hiringHd}>Precision Engineering for Hiring</h1>
                            <p className={style.hiringTxt}>We've automated the signal-to-noise ratio in tech recruitment. Get straight to the technical truth.</p>
                        </div>
                    </div>
                    {/* Cards row */}
                    <div className="row">
                        {/* Card 1: Rich Profiles */}
                        <div className="col-md-6 col-lg-4">
                            <div className="cards h-100">
                                <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                    <div className={style.user_icon}><FaRegUserCircle className={style.userIcon} /></div>
                                    <div>
                                        <span className='d-inline-block mb-3'>Rich Profiles</span>
                                        <p className='mb-4'>Go beyond CVs. Link GitHub repos, showcase live deployments, and present verified skill endorsements directly in your profile.</p>
                                        {/* GitHub activity progress indicator */}
                                        <div className={`${style.git_progress} px-3 py-3`}>
                                            <p className='text-white d-flex justify-content-between'><span>GitHub Activity</span><span>Top 1%</span></p>
                                            <div className='d-flex'>
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
                        {/* Card 2: Verified Projects */}
                        <div className="col-md-6 mt-md-0 mt-3 col-lg-4">
                            <div className="cards h-100">
                                <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                    <div className={style.user_icon}><MdOutlineVerified className={style.userIcon} /></div>
                                    <div>
                                        <span className='d-inline-block mb-3'>Verified Projects</span>
                                        <p className='mb-4'>Trust but verify. Our automated system analyzes public contributions to ensure skills match the claims made on profiles.</p>
                                        {/* Tech stack tags example */}
                                        <div className={style.tech_stack}>
                                            <button className='btn me-2 p-0'>PHP</button>
                                            <button className='btn me-2 p-0'>Larvel</button>
                                            <button className='btn p-0'>React</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3: Smart Matching */}
                        <div className="col-md-6 mt-3 mt-lg-0 col-lg-4">
                            <div className="cards h-100">
                                <div className={`${style.cards_content} h-100 px-5 py-4`}>
                                    <div className={style.user_icon}><CiServer className={style.userIcon} /></div>
                                    <div>
                                        <span className='d-inline-block mb-3'>Smart Matching</span>
                                        <p className='mb-4'>Our proprietary algorithm maps technical debt, stack compatibility, and team culture to find the perfect long-term fit.</p>
                                        {/* Progress bar for algorithm */}
                                        <div className={style.progress_container}>
                                            <div className={style.progress_bar}>
                                                <p className='mb-0 text-white fw-bold' >Optimization Algorithm v2.4</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Scale / Developer Experience Section - two-column layout */}
            <section style={{ backgroundColor: '#060E20', padding: '10rem 0' }}>
                <div className="container">
                    <div className="row p-0">
                        {/* Left column: image with overlay text */}
                        <div className={`col-6 d-none d-md-block p-0 overflow-hidden position-relative ${style.imageX}`}>
                            <div className={style.overlay}>
                                <h2 className='fw-bold'>Global Scale</h2>
                                <p>Access talent across 180 countries without the administrative overhead of international hiring.</p>
                            </div>
                            <img src={image2} className='img-fluid h-100 rounded-3 overflow-hidden' alt="" />
                        </div>
                        {/* Right column: Developer Experience cards and feature boxes */}
                        <div className="col-md-6">
                            <div className="row p-0 g-0">
                                {/* Developer Experience card */}
                                <div className={`col-12 rounded-3 ${style.terminal_box}`}>
                                    <MdOutlineTerminal className='fs-2 mb-4' />
                                    <h2 className='fs-3 fw-bold mb-3'>Developer Experience First</h2>
                                    <p>Built by developers who understand that a job is more than just a ticket—it's a mission.</p>
                                </div>
                                {/* Security feature box */}
                                <div className="col-6 pe-2 pt-3">
                                    <div className={`rounded-4 py-5 d-flex justify-content-center align-items-center flex-column ${style.security}`}>
                                        <div className={style.securityIcon}>
                                            <MdOutlineSecurity />
                                        </div>
                                        <p className='fw-bold mb-0'>Security</p>
                                        <p className='text-center'>Bank-grade payroll encryption</p>
                                    </div>
                                </div>
                                {/* Instant feature box */}
                                <div className="col-6 ps-2 pt-3">
                                    <div className={`rounded-4 py-5 d-flex justify-content-center align-items-center flex-column ${style.thunderbolt}`}>
                                        <div className={style.thunderIcon}>
                                            <MdOutlineBolt />
                                        </div>
                                        <p className='fw-bold mb-0'>Instant</p>
                                        <p className='text-center'>Onboard in less than 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Hiring Call-to-Action Section */}
            <section className={style.futureHiring}>
                <div className="container">
                    <div className="row">
                        <div className={`col-12 d-flex text-center ${style.content} justify-content-center align-items-center flex-column`}>
                            <h1 className='mb-4 fw-bold'>Ready to build the future?</h1>
                            <p className='fs-5 text-center'>
                                Whether you're scaling an engineering team or looking for your next challenge, DevConnect <br className='d-none d-lg-block' /> is the specialized platform for your success.
                            </p>
                            <div className='mt-4'>
                                <button className={`btn rounded-3 me-3 button ${style.join}`}>Join as a Developer</button>
                                <button className={`btn rounded-3 button ${style.specialist}`}>Hire a Specialist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}