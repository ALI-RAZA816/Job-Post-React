import React from 'react'
import style from '../styles/Dashboard.module.css';
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Dashboard() {
  return (
    <section>
        <div className="container">
            <div className="row py-4">
                <div className={`col-12 ${style.dashboard_title}`}>
                    <h1>Recruiter Dashboard</h1>
                    <p>Welcome back</p>
                </div>
            </div>
            <div className="row">
                <div className={`col-md-6 col-lg-4`}>
                    <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                        <MdWorkOutline style={{color:'#DAE2FD'}} className='fs-2 mb-3' />
                        <span>Active Jobs</span>
                        <h2 className='mt-1'>456</h2>
                    </div>
                </div>
                <div className={`col-md-6 mt-4 mt-md-0 col-lg-4`}>
                    <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                        <MdOutlineGroup style={{color:'#4CD7F6'}} className='fs-2 mb-3' />
                        <span>Total Applicants</span>
                        <h2 className='mt-1'>12</h2>
                    </div>
                </div>
                <div className={`col-md-6 mt-4 mt-lg-0 col-lg-4`}>
                    <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                        <AiOutlineThunderbolt style={{color:'#4BD89F'}} className='fs-2 mb-3' />
                        <span>Drafts</span>
                        <h2 className='mt-1'>12</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`col-lg-8 ${style.jobs}`}>
                    <div className=' mt-5 mb-3 d-flex justify-content-between align-items-center'>
                        <h1>Manage Posted Jobs</h1>
                        <span>View Archieve <FaArrowRight /></span>
                    </div>
                    <div className="postedJobs">
                        <div className={`${style.jobcards} mb-3 p-4 d-md-flex justify-content-between rounded-3`}>
                            <div>
                                <h2 className="title">Senior Rust Engineer</h2>
                                <div className={`${style.stacks}`}>
                                    <button>Systems</button>
                                    <button>Infrastructure</button>
                                    <button>Remote</button>
                                </div>
                                <span><MdOutlineCalendarToday className='fs-6 me-2' />Posted 2026/05/02</span>
                            </div>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div className={`${style.edit} me-3 rounded-3`}><MdOutlineModeEdit /></div>
                                <div className={`${style.delete} me-3 rounded-3`}><RiDeleteBinLine /></div>
                                <Link to="/view"><button className={`${style.viewApplication}`}>View Application</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${style.quick_Actions} p-4 rounded-3 mt-4`}>
                        <span className='mb-4 d-inline-flex'>Quick Actions</span>
                        <button className='d-flex justify-content-center align-items-center'><Link to='/postjob' className='text-decoration-none' style={{color: '#1d21e0'}}><FaPlus className='me-2' />Post New Job</Link></button>
                        <button className='d-flex justify-content-center align-items-center mt-3'><MdOutlinePersonSearch className='me-2 fs-5'/>Search Developers</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
