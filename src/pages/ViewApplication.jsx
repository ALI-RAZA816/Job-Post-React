import React from 'react'
import style from '../styles/ViewApplication.module.css';
import image from '../assets/adfjlkasfjiuhkajsdhfiukajsdfkashfkjsahfkjhsairka2342jaksj234hj2222hkj4532asf.PNG'
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { HiExternalLink } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";


export default function ViewApplication() {
  return (
    <section>
        <div className="container">
            <div className="row py-4">
                <h1 className={`${style.applicationHd} mb-4`}>Senior Rust Engineer Application</h1>
                <div className="col-lg-8">
                    <div className="application_view">
                        <div className={`${style.profile} mb-4 rounded-3 p-3 row`}>
                            <div className={`col-2 p-0 border rounded-3 overflow-hidden ${style.image}`}>
                                <img src={image} className='img-fluid' alt="" />
                            </div>
                            <div className="col-10">
                                <div className="d-flex justify-content-between align-items-center pb-3">
                                    <div className='ms-3'>
                                        <h3>Alex Chen</h3>
                                        <p>Senior Developer @</p>
                                        <p>Email</p>
                                    </div>
                                    <div className='d-md-flex align-items-center '>
                                        <div className={`${style.icon} d-flex mb-2 mb-md-0 me-md-2 align-items-center py-2 rounded-3 px-3`}><MdOutlineEmail  className='me-2 fs-4'/>Email</div>
                                        <div className={`${style.icon} d-flex align-items-center py-2 rounded-3 px-3`}><FiMessageSquare className='me-2 fs-4' />Message</div>
                                    </div>
                                </div>
                                <div className={`${style.additional} border border-secondary border-bottom-0 pt-2 border-start-0 border-end-0 d-flex justify-content-between align-items-center`}>
                                    <div className='d-flex ps-3 flex-column'>
                                        <span className='fw-bold'>Location</span>
                                        <span className='fw-bold'>San Francisco, CA</span>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span className='fw-bold'>Desired Salary</span>
                                        <span className='fw-bold'>$120k - $150k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.coverletter} rounded-3`}>
                            <div className='d-flex border-bottom align-items-center py-3 px-4 justify-content-between'>
                                <span className='fs-5 mb-0 d-inline-flex'>Cover Letter</span>
                                <span className='text-uppercase d-inline-flex mb-0'>Submitted at : <span className='fw-normal'>2026/05/06</span></span>

                            </div>
                            <div className={`${style.letter} py-3 px-4`}>
                                <p>Dear Hiring Team,<br /><br />
                                I’ve been following DevConnect’s progress in the high-performance computing space for quite some time, and I am thrilled to apply for the Senior Rust Engineer position. With over 8 years of experience in systems programming and a deep passion for memory safety and concurrency, I believe I can make significant contributions to your core infrastructure. <br /><br />
                                In my current role at CloudScale Systems, I led the migration of our data ingestion pipeline from Python to Rust, resulting in a 40% reduction in latency and a 60% decrease in cloud infrastructure costs. I am particularly interested in how DevConnect utilizes WASM for edge computing, a field where I have recently published several open-source modules. <br /><br />
                                I look forward to discussing how my technical background in high-concurrency systems can help DevConnect scale its next generation of services.
                                <br />
                                <br />
                                Best regards,
                                Alex Chen</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${style.social_links} p-4 rounded-3`}>
                        <span className='fs-5 d-inline-flex mb-3'>Professional Links</span>
                        <div className='mb-2 github d-flex align-items-center rounded-2 py-2 px-3'><IoIosCode className='me-2 fs-5' /> GitHub Profile<HiExternalLink className={style.shareLink} /></div>
                        <div className='mb-2 portfolio d-flex align-items-center rounded-2 py-2 px-3'><GrLanguage className='me-2 fs-5' />Porftolio Link<HiExternalLink className={style.shareLink} /></div>
                        <div className='mb-2 linkedin d-flex align-items-center rounded-2 py-2 px-3'><CiLinkedin className='me-2 fs-5' />Linkedin<HiExternalLink className={style.shareLink} /></div>
                    </div>
                    <div className={style.btn}>
                        <button className='btn w-100 py-2 d-flex align-items-center justify-content-center mt-3'><FaRegCalendar className='me-2' />Schedule Interview</button>
                        <button className='btn w-100 py-2 d-flex align-items-center justify-content-center mt-2'><RxCrossCircled style={{color:'#fd7a7a9f'}} className='fs-4 me-2'/>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
