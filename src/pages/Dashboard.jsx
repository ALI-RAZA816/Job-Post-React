// Import React and useContext hook for consuming the AppContext
import React, { useContext } from 'react'

// Import custom CSS module for styling the Dashboard
import style from '../styles/Dashboard.module.css';

// Import various icons from react-icons
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";


// Import Link for navigation between routes
import { Link } from 'react-router-dom';

// Import AppContext to access shared state and functions
import { AppContext } from '../context/AppContext';

// Import NoPost component to display when no jobs are posted
import NoPost from '../component/NoPost';

// Import Draftsjob component (though not used directly here, it might be used elsewhere)
import Draftsjob from './Draftsjob';

export default function Dashboard() {
    // Destructure posts, deletepost, editposthandler, and drafts from context
    const { posts, deletepost, editposthandler, drafts, savejob, application } = useContext(AppContext);
    

    return (
        <section>
            <div className="container">
                {/* Dashboard header row */}
                <div className="row py-4">
                    <div className={`col-12 ${style.dashboard_title}`}>
                        <h1>Recruiter Dashboard</h1>
                        <p>Welcome back</p>
                    </div>
                </div>

                {/* Summary cards row - each card displays a metric and links to relevant page */}
                <div className="row">
                    {/* Active Jobs card - links to /jobs */}
                    <div className={`col-md-6 col-lg-3`}>
                        <Link to="/jobs" className='text-decoration-none'>
                            <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                                <MdWorkOutline style={{ color: '#DAE2FD' }} className='fs-2 mb-3' />
                                <span>Active Jobs</span>
                                <h2 className='mt-1'>{posts.length <= 9 ? `0${posts.length}` : posts.length}</h2>
                            </div>
                        </Link>
                    </div>

                    {/* Total Applicants card - links to /applications */}
                    <div className={`col-md-6 mt-4 mt-md-0 col-lg-3`}>
                        <Link to="/applications" className='text-decoration-none'>
                            <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                                <MdOutlineGroup style={{ color: '#4CD7F6' }} className='fs-2 mb-3' />
                                <span>Total Applicants</span>
                                <h2 className='mt-1'>{application.length <= 9 ? `0${application.length}` : application.length}</h2>
                            </div>
                        </Link>
                    </div>

                    {/* Drafts card - links to /drafts, shows count of drafts */}
                    <div className={`col-md-6 mt-4 mt-lg-0 col-lg-3`}>
                        <Link to="/drafts" className='text-decoration-none'>
                            <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                                <AiOutlineThunderbolt style={{ color: '#4BD89F' }} className='fs-2 mb-3' />
                                <span>Drafts</span>
                                <h2 className='mt-1'>{drafts.length <= 9 ? `0${drafts.length}` : drafts.length}</h2>
                            </div>
                        </Link>
                    </div>

                    {/* Saved Jobs card - links to /savejob */}
                    <div className={`col-md-6 mt-4 mt-lg-0 col-lg-3`}>
                        <Link to="/savejob" className='text-decoration-none'>
                            <div className={`p-4 ${style.cards} d-flex flex-column rounded-3`}>
                                <FaRegSave style={{ color: '#4b60d8' }} className='fs-2 mb-3' />
                                <span>Saved Job</span>
                                <h2 className='mt-1'>{savejob.length <= 9 ? `0${savejob.length}` : savejob.length}</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Main content row: posted jobs list and quick actions */}
                <div className="row">
                    {/* Left column - list of posted jobs */}
                    <div className={`col-lg-8 ${style.jobs}`}>
                        <div className=' mt-5 mb-3 d-flex justify-content-between align-items-center'>
                            <h1>Manage Posted Jobs</h1>
                            <span>View Archieve <FaArrowRight /></span>
                        </div>
                        <div className="postedJobs">
                            {/* If no posts, show the NoPost component; otherwise map through posts */}
                            {posts.length === 0 ? <NoPost /> : posts.map((item, index) => {
                                 const applicantCount = application.filter(app => app.jobid === item.id).length;
                                return (
                                    <div key={index} className={`${style.jobcards} mb-3 p-4 d-md-flex justify-content-between rounded-3`}>
                                        <div>
                                            {/* Job title */}
                                            <h2 className="title">{item.title}</h2>
                                            {/* Skills/tags for the job */}
                                            <div className={`${style.stacks} flex-wrap`}>
                                                {item.requiredskill.map(skill => {
                                                    return <button className='my-1' key={skill}>{skill}</button>
                                                })}
                                            </div>
                                            {/* Post date */}
                                            <div className='d-flex'>
                                                <span className='d-inline-flex mb-0 me-2'><MdOutlineGroup className='fs-5 me-2'/>{applicantCount} Applicants</span>
                                                <span className='d-inline-flex mb-0'><MdOutlineCalendarToday className='fs-6 me-2' />Posted: {item.postDate}</span>
                                            </div>
                                        </div>
                                        {/* Action buttons: edit, delete, view applications */}
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <Link to='/edit'>
                                                <div onClick={() => editposthandler(index)} className={`${style.edit} editbutton me-3 rounded-3`}>
                                                    <MdOutlineModeEdit />
                                                </div>
                                            </Link>
                                            <div onClick={() => deletepost(index)} className={`${style.delete} me-3 rounded-3`}>
                                                <RiDeleteBinLine />
                                            </div>
                                            <Link to='/applications'><button className={`${style.viewApplication}`}>View Applicants</button></Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right column - Quick Actions sidebar */}
                    <div className="col-lg-4 position-relative">
                        <div className={`${style.quick_Actions} p-4 rounded-3 mt-4`}  style={{position:'sticky',top:'100px',left:'0'}}>
                            <span className='mb-4 d-inline-flex'>Quick Actions</span>
                            {/* Button to post a new job */}
                            <button className='d-flex justify-content-center align-items-center'>
                                <Link to='/postjob' className='text-decoration-none' style={{ color: '#1d21e0' }}>
                                    <FaPlus className='me-2' />Post New Job
                                </Link>
                            </button>
                            {/* Button to search developers */}
                            <button className='d-flex justify-content-center align-items-center mt-3'>
                                <MdOutlinePersonSearch className='me-2 fs-5' />Search Developers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}