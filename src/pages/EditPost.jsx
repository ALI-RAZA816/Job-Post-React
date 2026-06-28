import React, { useContext } from 'react'
import style from '../styles/PostJob.module.css'
import { MdWork } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from '../context/AppContext';


export default function EditPost() {

    const jobTypes = ['Full-time', 'Contract', 'Part-time', 'Freelance','Internship'];
    const additionbenefits = ["Remote-first","Health Insurance","401(k) Match","Paid Time off","Learning Budget","Home Office Stipend"];
    const {editjobtitle,
            editcompanyname,
            editlocation,
            editjobtype,
            editdescription,
            editminsalary,
            editmaxsalary,
            edittitlehandler,
            editcompanynamehandler,
            editlocationhandler,
            editjobtypehandler,
            editdescriptionhandler,
            deleteeditskillhandler,
            editarrskills,
            editpost,
            editskills,
            editadditional,
            editadditionalhandler,
            geteditskilllhandler,
            editminsalaryhandler,
            editmaxsalaryhandler} = useContext(AppContext);
  return (
    <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-xl-8">
                    <div className={`${style.jobpost_hd}`}>
                        <h2 className='mb-1'>Edit Job Posting</h2>
                        <p>Attract top-tier developers with a clear and detailed job description.</p>
                    </div>
                    <form action="">
                        <div className={`${style.job_basics} p-4 rounded-3`}>
                            <h2 className='mb-3'><MdWork className='me-2' />Job Basics</h2>
                            <div className="row p-0">
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Job Title</label>
                                    <input type="text" className='form-control' value={editjobtitle} onChange={edittitlehandler} name='editjobtitle' placeholder='e.g. Senior Rust Engineer' />
                                
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Company Name</label>
                                    <input type="text" className='form-control' value={editcompanyname} onChange={editcompanynamehandler} name='editcompanyname' placeholder='e.g. Techflow System' />
                                    
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Location</label>
                                    <input type="text" className='form-control' value={editlocation} onChange={editlocationhandler} name='editlocation' placeholder='e.g. Remote, New York etc.' />
                                   
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Job Type</label>
                                    <select name="editjobtype" value={editjobtype} onChange={editjobtypehandler} className='form-select' id="">
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
                                <textarea name="editjobdescription" value={editdescription} onChange={editdescriptionhandler} className='form-control' id="" placeholder='Describe the role, day-to-day responsibilities, and team culture'></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className='overflow-hidden text-uppercase form-label'>Required Technologies</label>
                                <div className='d-flex py-2 overflow-hidden flex-wrap align-items-center px-2 rounded-3' style={{backgroundColor:'#2D3449',border: '1px solid #283044'}}>
                                    {editarrskills.map((item, index)=>{
                                        return <span key={index} className='me-2 text-nowrap  my-1 mt-md-0'>{item}<RxCross2 onClick={()=> deleteeditskillhandler(index)} style={{cursor:'pointer'}} className='fs-6 ms-1' /></span>
                                    })}
                                    <input style={{outline:'none !important',boxShadow:'none'}} ref={editskills} onKeyDown={geteditskilllhandler} type="text" placeholder='Add skills...' className={`${editarrskills.length === 6 ? 'd-none' : 'd-block'} w-100 border-0 form-control`} />
                                </div>
                                <p className='text-secondary'>Press enter to add a tag. Recommend 3-5 core skills.</p>
                            </div>
                        </div>
                        <div className={`${style.salary} rounded-3 p-4 mt-5`}>
                            <h2><MdOutlinePayments className='me-2' />Salary & Benefit</h2>
                            <div className='row p-0'>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Min Salary (USD)</label>
                                    <input type="number" value={editminsalary} onChange={editminsalaryhandler} name='editminsalary' className='form-control' placeholder='1000' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label fw-bold text-uppercase'>Max Salary (USD)</label>
                                    <input type="number" value={editmaxsalary} onChange={editmaxsalaryhandler} name='editmaxsalary' className='form-control' placeholder='20000' />
                                </div>
                                <div>
                                    <label htmlFor="" className='form-label mb-3 text-uppercase'>Additional Benefits</label>
                                    <div>
                                        <div className='row p-0 g-0'>
                                        {additionbenefits.map(item => {
                                            return  <div key={item} className="col-md-3 form-check form-check-inline">
                                                            <input style={{height:'20px',width:'20px'}} className="form-check-input mb-2" checked={editadditional.includes(item.toLowerCase())} onChange={editadditionalhandler} type="checkbox" value={item} id={item}/>
                                                            <label className="form-check-label ms-2" style={{fontSize:'15px'}} htmlFor={item}>
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
                                        <h2 className='m-0 text-capitalize'>{editjobtitle ? editjobtitle : 'Job Title Preview'}</h2>
                                        <span className='text-capitalize'>{editcompanyname ? editcompanyname : 'Company Name'}</span>
                                    </div>
                                </div>
                                <div className='py-3 d-flex flex-wrap align-items-center border border-secondary border-start-0 border-top-0 border-end-0'>
                                    <span className='fw-normal me-5 d-flex align-items-center'><CiLocationOn className='me-1' /> {editlocation ? editlocation : 'Location'}</span>
                                    <span className='fw-normal me-5 d-flex align-items-center' ><CiClock2 className='me-1' /> {editjobtype ? editjobtype : 'Job Type'}</span><br />
                                    <span className='fw-normal d-flex align-items-center'><HiOutlineCurrencyDollar className='me-1' /> ${editminsalary ? editminsalary : '0'}k - ${editmaxsalary ? editmaxsalary : '0'}k</span>
                                </div>
                                <a href="" className='d-inline-block mt-2' style={{color:'#27e0a6',fontSize:'14px'}}>View Details</a>
                            </div>
                            <div className={`mt-4 d-flex flex-column text-center ${style.publishJob}`}>
                                <button onClick={editpost}>Edit Job Post</button>
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
