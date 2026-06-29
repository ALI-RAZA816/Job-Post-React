// Import React to enable JSX and component creation
import React, { useContext } from 'react'

// Import custom CSS module for styling this component
import style from '../styles/ApplyJobForm.module.css';

// Import images to display in the component
import image from '../assets/asfjlwkj34l23jk4lajfl22asfljksuowerjlk3453.PNG'
import image1 from '../assets/yibei-geng--UdYbiywGeg-unsplash.jpg'

// Import icons from react-icons library
import { MdPublic } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { AppContext } from '../context/AppContext';

export default function ApplyJobForm() {

  const {applicantJob, applyjobChangeHandler, submitApplication, quickApply, applyErr} = useContext(AppContext);

  return (
    <section>
      {/* Main container with Bootstrap grid */}
      <div className="container">
        <div className="row py-5">
          {/* Left column: job details and description */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className={`${style.jobdetail}`}>
              {/* Header with logo, job title and company */}
              <div className='d-flex'>
                <div className={`${style.img} me-4`}>
                  <img src={image} alt="" />
                </div>
                <div>
                  <h2 className='mb-0 fw-bold'>{applicantJob.title}</h2>
                  <p className='mb-0'>{applicantJob.company}</p>
                </div>
              </div>
              {/* Job metadata: type, location, salary */}
              <div className={`${style.jobtype} d-flex mt-3`}>
                <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'>
                  <MdPublic className='fs-6 me-2' />{applicantJob.location}
                </span>
                <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'>
                  <IoMdTime className='fs-6 me-2' />{applicantJob.jobType}
                </span>
                <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'>
                  <MdOutlinePayments className='fs-6 me-2' />${applicantJob.minsalar}k-${applicantJob.maxsalary}k
                </span>
              </div>
            </div>

            {/* Detailed content: role description, requirements, company info */}
            <div className={`${style.content} mt-5`}>
              <h3 className='mb-3'>Description</h3>
              <p>
                {applicantJob.description}
              </p>

          
              {/* Company information block with logo and description */}
              <div className={`${style.company} mt-4 rounded-3 p-4`}>
                <h3 className='mb-3'>The Company</h3>
                <div className='row'>
                  <div className="col-3 rounded-3 overflow-hidden">
                    <img src={image1} className='rounded-3 img-fluid' alt="" />
                  </div>
                  <div className="col-9">
                    <h3 style={{color:'#C0C1FF'}}>CloudSphere Systems</h3>
                    <p>
                      CloudSphere is a pioneer in global edge computing. We empower developers to deploy
                      code instantly across thousands of nodes with unmatched security and speed. Our
                      mission is to decentralize the cloud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Quick Apply form */}
          <div className={`col-lg-4 mb-4 mb-lg-0 ${style.quickApply}`}>
            <form action="" className={`${style.information} rounded-3 p-4`} >
              <h3>Quick Apply</h3>
              <div>
                <span>Personal Information</span>
                {/* Full Name field */}
                <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                  <label htmlFor=""  className='form-label mb-1'>Full Name</label>
                  <input type="text" name='fullname' value={quickApply.fullname} onChange={applyjobChangeHandler}  className='bg-transparent border-0 text-white' />
                {applyErr.nameErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Name is required</span>}
                </div>
                {/* Email Address field */}
                <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                  <label htmlFor=""  className='form-label mb-1'>Email Address</label>
                  <input type="text" name='email' value={quickApply.email} onChange={applyjobChangeHandler} className='bg-transparent border-0 text-white' />
                  {applyErr.emailErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Email is required</span>}
                </div>
                {/* Address field */}
                <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                  <label htmlFor=""  className='form-label mb-1'>Address</label>
                  <input type="text" name='address' value={quickApply.address} onChange={applyjobChangeHandler} className='bg-transparent border-0 text-white' />
                  {applyErr.addressErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Address is required</span>}
                </div>

                <div>
                  <span>Social Links</span>
                  {/* GitHub Profile field */}
                  <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                    <label htmlFor=""  className='form-label mb-1'>GitHub Profile</label>
                    <input type="text" name='github' value={quickApply.github} onChange={applyjobChangeHandler} className='bg-transparent border-0 text-white' />
                    {applyErr.githubErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Please provide Github profile</span>}
                  </div>
                  {/* LinkedIn Profile field */}
                  <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                    <label htmlFor="" className='form-label mb-1'>Linkedin Profile</label>
                    <input type="text" name='linkedin'  value={quickApply.linkedin} onChange={applyjobChangeHandler}  className='bg-transparent border-0 text-white' />
                    {applyErr.linkedinErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Please provide Linkedin profile</span>}
                  </div>
                  {/* Portfolio Website field */}
                  <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                    <label htmlFor="" className='form-label mb-1'>Portfolio Website</label>
                    <input type="text" name='portfolio' value={quickApply.portfolio} onChange={applyjobChangeHandler}  className='bg-transparent border-0 text-white' />
                    {applyErr.portfolioErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Please provide Portfolio profile</span>}
                  </div>
                </div>

                <div>
                  <span>Additional</span>
                  <div>
                    {/* Expected Salary (Min) field */}
                    <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                      <label htmlFor="" className='form-label mb-1'>Expected Salary (Min USD)</label>
                      <input type="number" name='minsalary'  value={quickApply.minsalary} onChange={applyjobChangeHandler}  className='bg-transparent border-0 text-white' />
                      {applyErr.minsalaryErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Please provide Min expected salary</span>}
                    </div>
                    {/* Expected Salary (Max) field */}
                    <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                      <label htmlFor="" className='form-label mb-1'>Expected Salary (Max USD)</label>
                      <input type="number" name='maxsalary'  value={quickApply.maxsalary} onChange={applyjobChangeHandler}  className='bg-transparent border-0 text-white' />
                      {applyErr.maxsalaryErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Please provide Max expected salary</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter textarea */}
              <div className={`${style.coverLetter} mt-3`}>
                <label htmlFor='' className='form-label'>Cover Letter</label>
                <textarea name="letter" value={quickApply.letter} onChange={applyjobChangeHandler} className='form-control' placeholder='Why are you the perfect fit for this role?' id=""></textarea>
                {applyErr.maxsalaryErr && <span className='text-danger text-capitalize d-inline-flex mb-0' style={{fontSize:'12px'}}>Field is required</span>}
              </div>

              {/* Submit application button */}
              <button onClick={(event)=> submitApplication(event,applicantJob.id,applicantJob.title, applicantJob.requiredskill)} className='d-flex align-items-center mt-3 py-2 justify-content-center btn'>
                Submit Application<VscSend className='ms-2' />
              </button>
              {/* Save for later button */}
              <button className='d-flex align-items-center mt-2 py-2 justify-content-center btn'>
                Save for later
              </button>
              {/* Terms & Privacy notice */}
              <span className='d-inline-flex text-center text-capitalize mt-3' style={{fontSize:'15px'}}>
                By applying, you agree to our Terms of Service and Privacy Policy.
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}