// Import React to enable JSX and component creation
import React, { useContext } from 'react'

// Import custom CSS module for styling the ViewApplication component
import style from '../styles/ViewApplication.module.css';

// Import the image for the applicant's profile picture
import image from '../assets/adfjlkasfjiuhkajsdhfiukajsdfkashfkjsahfkjhsairka2342jaksj234hj2222hkj4532asf.PNG'

// Import icons from react-icons library for various UI elements
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { HiExternalLink } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function ViewApplication() {
    const {userApplication, viewDetail} = useContext(AppContext);
    return (
        <section>
            <div className="container">
                <div className="row py-4">
                    {/* Page heading */}
                    <h1 className={`${style.applicationHd} mb-4`}>{viewDetail.role}</h1>

                    {/* Left column: Applicant profile, cover letter, and details */}
                    <div className="col-lg-8">
                        <div className="application_view">
                            {/* Profile card: avatar, name, contact buttons, location, salary */}
                            <div className={`${style.profile} mb-4 rounded-3 p-3 row`}>
                                {/* Profile image container */}
                                <div className={`col-2 p-0 border rounded-3 overflow-hidden ${style.image}`}>
                                    <img src={image} className='img-fluid' alt="" />
                                </div>
                                {/* Profile details and action buttons */}
                                <div className="col-10">
                                    <div className="d-flex justify-content-between align-items-center pb-3">
                                        <div className='ms-3'>
                                            <h3>{viewDetail.fullname}</h3>
                                            <p>{viewDetail.role}</p>
                                            <p>{viewDetail.email}</p>
                                        </div>
                                        {/* Email and Message action buttons */}
                                        <div className='d-md-flex align-items-center '>
                                            <div className={`${style.icon} d-flex mb-2 mb-md-0 me-md-2 align-items-center py-2 rounded-3 px-3`}>
                                                <MdOutlineEmail className='me-2 fs-4'/>Email
                                            </div>
                                            <div className={`${style.icon} d-flex align-items-center py-2 rounded-3 px-3`}>
                                                <FiMessageSquare className='me-2 fs-4' />Message
                                            </div>
                                        </div>
                                    </div>
                                    {/* Additional info: location and desired salary */}
                                    <div className={`${style.additional} border border-secondary border-bottom-0 pt-2 border-start-0 border-end-0 d-flex justify-content-between align-items-center`}>
                                        <div className='d-flex ps-3 flex-column'>
                                            <span className='fw-bold'>Location</span>
                                            <span className='fw-bold'>{viewDetail.address}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Desired Salary</span>
                                            <span className='fw-bold'>${viewDetail.minsalary}k - ${viewDetail.maxsalary}k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cover letter section */}
                            <div className={`row ${style.coverletter} rounded-3`}>
                                <div className='d-flex border-bottom align-items-center py-3 px-4 justify-content-between'>
                                    <span className='fs-5 mb-0 d-inline-flex'>Cover Letter</span>
                                    <span className='text-uppercase d-inline-flex mb-0'>
                                        Submitted at : <span className='fw-normal'>{viewDetail.applydate}</span>
                                    </span>
                                </div>
                                <div className={`${style.letter} text-wrap py-3 px-4`}>
                                    <p className='text-wrap'>
                                       {viewDetail.letter}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Professional links and action buttons */}
                    <div className="col-lg-4">
                        {/* Social/Professional links card */}
                        <div className={`${style.social_links} p-4 rounded-3`}>
                            <span className='fs-5 d-inline-flex mb-3'>Professional Links</span>
                            <div className='mb-2 github d-flex align-items-center rounded-2 py-2 px-3'>
                                <a href={viewDetail.github} target='blank' className='text-decoration-none' style={{color:'#8E9AFF'}}><IoIosCode className='me-2 fs-5' /> GitHub Profile<HiExternalLink className={style.shareLink} /></a>
                            </div>
                            <div className='mb-2 portfolio d-flex align-items-center rounded-2 py-2 px-3'>
                                <a href={viewDetail.portfolio} target='blank' className='text-decoration-none' style={{color:'#8E9AFF'}}><GrLanguage className='me-2 fs-5' />Porftolio Link<HiExternalLink className={style.shareLink} /></a>
                            </div>
                            <div className='mb-2 linkedin d-flex align-items-center rounded-2 py-2 px-3'>
                               <a href={viewDetail.linkedin} target='blank' className='text-decoration-none' style={{color:'#8E9AFF'}}><CiLinkedin className='me-2 fs-5' />Linkedin<HiExternalLink className={style.shareLink} /></a> 
                            </div>
                        </div>

                        {/* Action buttons: Schedule Interview and Reject */}
                        <div className={style.btn}>
                            <button className='btn w-100 py-2 d-flex align-items-center justify-content-center mt-3'>
                                <FaRegCalendar className='me-2' />Schedule Interview
                            </button>
                            <button className='btn w-100 py-2 d-flex align-items-center justify-content-center mt-2'>
                                <RxCrossCircled style={{ color: '#fd7a7a9f' }} className='fs-4 me-2'/>Reject
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}