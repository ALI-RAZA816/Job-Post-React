import React from 'react'
import style from '../styles/PostJob.module.css'
import { MdWork } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";


export default function PostJob() {
    const jobTypes = ['Full-time', 'Contract', 'Part-time', 'Freelance','Internship'];
    const additionbenefits = ["Remote-first","Health Insurance","401(k) Match","Paid Time off","Learning Budget","Home Office Stipend"]
  return (
    <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-xl-8">
                    <div className={`${style.jobpost_hd}`}>
                        <h2 className='mb-1'>Create Job Posting</h2>
                        <p>Attract top-tier developers with a clear and detailed job description.</p>
                    </div>
                    <form action="">
                        <div className={`${style.job_basics} p-4 rounded-3`}>
                            <h2 className='mb-3'><MdWork className='me-2' />Job Basics</h2>
                            <div className="row p-0">
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Job Title</label>
                                    <input type="text" className='form-control' placeholder='e.g. Senior Rust Engineer' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Company Name</label>
                                    <input type="text" className='form-control' placeholder='e.g. Techflow System' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Location</label>
                                    <input type="text" className='form-control' placeholder='e.g. Remote, New York etc.' />
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Job Type</label>
                                    <select name="" className='form-select' id="">
                                        {jobTypes.map(item=>{
                                            return <option key={item} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.job_description} rounded-3 p-4 mt-5`}>
                            <h2>Description & Requirements</h2>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label text-uppercase'>Job Description</label>
                                <textarea name="" className='form-control' id="" placeholder='Describe the role, day-to-day responsibilities, and team culture'></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className='text-uppercase form-label'>Required Technologies</label>
                                <input type="text" placeholder='Add skills...' className='form-control' />
                            </div>
                        </div>
                        <div className={`${style.salary} rounded-3 p-4 mt-5`}>
                            <h2><MdOutlinePayments className='me-2' />Salary & Benefit</h2>
                            <div className='row p-0'>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Min Salary (USD)</label>
                                    <input type="number" className='form-control' placeholder='1000' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Max Salary (USD)</label>
                                    <input type="number" className='form-control' placeholder='20000' />
                                </div>
                                <div>
                                    <label htmlFor="" className='form-label mb-3 text-uppercase'>Additional Benefits</label>
                                    <div>
                                        <div className='row p-0 g-0'>
                                        {additionbenefits.map(item =>{
                                            return  <div class="col-md-3 form-check form-check-inline">
                                                            <input style={{height:'20px',width:'20px'}} class="form-check-input mb-2" type="checkbox" value={item} id={item}/>
                                                            <label class="form-check-label ms-2" style={{fontSize:'15px'}} for={item}>
                                                                {item}
                                                            </label>
                                                    </div>})}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4">
                    <div className='p-md-3 mt-4 mt-md-0'>
                        <div className={`${style.job_preview} p-4 rounded-3`}>
                            <div className='d-flex mb-3 align-items-center justify-content-between'>
                                <h2>Post Preview</h2>
                                <span className='rounded-1 text-uppercase py-1 px-2'>Live Preview</span>
                            </div>
                            <div className={`${style.preview_detail} p-4 rounded-3`}>
                                <div className='d-flex align-items-center'>
                                    <div className={`${style.corporate} me-3 rounded-2 d-flex justify-content-center align-items-center`}><MdCorporateFare className={style.corporate_icon} /></div>
                                    <div>
                                        <h2 className='m-0'>Job Title Preview</h2>
                                        <span>Company Name</span>
                                    </div>
                                </div>
                                <div className='py-3 border border-secondary border-start-0 border-top-0 border-end-0'>
                                    <span className='fw-normal me-5'><CiLocationOn /> Location</span>
                                    <span className='fw-normal'><CiClock2 /> Full-time</span><br />
                                    <span className='fw-normal mt-2 d-inline-block'><HiOutlineCurrencyDollar /> $0k - $0k</span>
                                </div>
                                <a href="" className='d-inline-block mt-2' style={{color:'#27e0a6',fontSize:'14px'}}>View Details</a>
                            </div>
                            <div className={`mt-4 d-flex flex-column text-center ${style.publishJob}`}>
                                <button>Publish Job Listing</button>
                                <button className='mt-2'>Save as Drafts</button>
                                <span className='d-inline-block mt-3'>By publishing, you agree to our Terms of Service and Privacy Policy. Your listing will be live for 30 days.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
