// Import React and useContext to consume the AppContext
import React, { useContext } from 'react'

// Import custom styles for the Jobs page (shared styles)
import style from '../styles/Jobs.module.css'

// Import icons for filtering, location, bookmark, etc.
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG'
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { IoBookmark } from "react-icons/io5";

// Import the NoPost component to show when there are no saved jobs
import NoPost from '../component/NoPost';

export default function SavedJob() {
    // Destructure savedjobs and deletesavejobhandler from AppContext
    const { savedjobs, deletesavejobhandler } = useContext(AppContext);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <div className='job_container'>
                            {/* Header section for the saved jobs page */}
                            <div className={style.sorting}>
                                <h2>Saved Jobs</h2>
                                <p>Keep track of opportunities you're interested in.</p>
                            </div>

                            {/* If there are no saved jobs, show the NoPost component; otherwise map through saved jobs */}
                            {savedjobs.length === 0 ? <NoPost /> : savedjobs.map((item, index) => {
                                return (
                                    <div key={index} className='jobs mb-3'>
                                        <div className={`${style.jobs_card} d-md-flex `}>
                                            {/* Company logo image */}
                                            <div className={`${style.img} mb-3 mb-md-0`}>
                                                <img src={image} alt="" />
                                            </div>
                                            {/* Job details */}
                                            <div className={`${style.job_details} w-100`}>
                                                <h3 className='mb-3'>{item.title}</h3>
                                                <ul>
                                                    <li>{item.company}</li>
                                                    <li className='text-capitalize'><CiLocationOn className='fs-6 me-2' />{item.location} ({item.jobType})</li>
                                                </ul>
                                                {/* Required tech stack tags */}
                                                <div className={`${style.tech_stacks} mt-2`}>
                                                    {item.requiredskill.map((item,i)=>{
                                                        return <button className='text-capitalize text-nowrap' key={i}>{item}</button>
                                                    })}
                                                    
                                                </div>
                                                {/* Salary and action buttons */}
                                                <div className={`${style.price} mt-4`}>
                                                    <span>$140k - $200k</span>
                                                    <div className='d-flex align-items-center'>
                                                        {/* Bookmark icon - click to unsave the job */}
                                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                                            <div className={`${style.bookmark} rounded-2 d-flex justify-content-center align-items-center me-3 text-white`}>
                                                                <IoBookmark onClick={() => deletesavejobhandler(item.id)} />
                                                            </div>
                                                            <span className='text-danger d-inline-flex me-3 mt-1' style={{fontSize:'12px',fontWeight:'normal'}}>Remove Job</span>
                                                        </div>
                                                        {/* Apply Now button links to the application form */}
                                                        <Link to="/applyjob">
                                                            <button className='btn'>Apply Now</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}