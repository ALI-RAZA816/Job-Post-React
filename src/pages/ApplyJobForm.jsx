import React from 'react'
import style from '../styles/ApplyJobForm.module.css';
import image from '../assets/asfjlwkj34l23jk4lajfl22asfljksuowerjlk3453.PNG'
import image1 from '../assets/yibei-geng--UdYbiywGeg-unsplash.jpg'
import { MdPublic } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";

export default function ApplyJobForm() {
  return (
    <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-8 mb-4 mb-lg-0">
                    <div className={`${style.jobdetail}`}>
                        <div className='d-flex'>
                            <div className={`${style.img} me-4`}>
                                <img src={image} alt="" />
                            </div>
                            <div>
                                <h2 className='mb-0 fw-bold'>Senior Rust Engineer</h2>
                                <p className='mb-0'>CloudSphere Systems</p>
                            </div>
                        </div>
                        <div className={`${style.jobtype} d-flex mt-3`}>
                            <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'><MdPublic className='fs-6 me-2' />Remote</span>
                            <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'><IoMdTime className='fs-6 me-2' />Full-time</span>
                            <span className='d-flex me-2 align-items-center rounded-5 px-2 py-1'><MdOutlinePayments className='fs-6 me-2' />$120k-$120k</span>
                        </div>
                    </div>
                    <div className={`${style.content} mt-5`}>
                        <h3 className='mb-3'>About the Role</h3>
                        <p>At CloudSphere Systems, we are building the next generation of distributed edge computing. As a Senior Rust Engineer, you will lead the development of our high-performance core engine, focusing on memory safety, low-latency execution, and WASM-based orchestration. You'll work closely with our infra and protocol teams to push the boundaries of what's possible in decentralized systems.</p>
                        <div className='mt-5'>
                            <h3 className='mb-3'>Requirements</h3>
                            <ul className='nav'>
                                <li className='d-flex mb-3 align-items-center '><AiFillCheckCircle className={`me-2 fs-4`} style={{color:'#4EDEA3'}} />5+ years of systems programming experience, with 3+ years specifically in Rust.</li>
                                <li className='d-flex mb-3 align-items-center '><AiFillCheckCircle className={`me-2 fs-4`} style={{color:'#4EDEA3'}} />5+ years of systems programming experience, with 3+ years specifically in Rust.</li>
                                <li className='d-flex mb-3 align-items-center '><AiFillCheckCircle className={`me-2 fs-4`} style={{color:'#4EDEA3'}} />5+ years of systems programming experience, with 3+ years specifically in Rust.</li>
                                <li className='d-flex mb-3 align-items-center '><AiFillCheckCircle className={`me-2 fs-4`} style={{color:'#4EDEA3'}} />5+ years of systems programming experience, with 3+ years specifically in Rust.</li>
                            </ul>
                        </div>
                        <div className={`${style.company} mt-4 rounded-3 p-4`}>
                            <h3 className='mb-3'>The Company</h3>
                            <div className='row'>
                                <div className="col-3 rounded-3 overflow-hidden">
                                    <img src={image1} className='rounded-3 img-fluid' alt="" />
                                </div>
                                <div className="col-9">
                                    <h3 style={{color:'#C0C1FF'}}>CloudSphere Systems</h3>
                                    <p>CloudSphere is a pioneer in global edge computing. We empower developers to deploy code instantly across thousands of nodes with unmatched security and speed. Our mission is to decentralize the cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 mb-4 mb-lg-0 ${style.quickApply}`}>
                    <form action=""  className={`${style.information} rounded-3 p-4`}>
                        <h3>Quick Apply</h3>
                        <div>
                            <span>Personal Information</span>
                            <div className={`form-control d-flex flex-column mb-3 ${style.field}`}>
                                <label htmlFor="" className='form-label mb-1'>Full Name</label>
                                <input type="text" className='bg-transparent border-0 text-white' />
                            </div>
                            <div className={`form-control d-flex flex-column ${style.field}`}>
                                <label htmlFor="" className='form-label mb-1'>Email Address</label>
                                <input type="text" className='bg-transparent border-0 text-white' />
                            </div>
                        </div>
                        <div className={`${style.coverLetter} mt-3`}>
                            <label htmlFor='' className='form-label'>Cover Letter</label>
                            <textarea name="" className='form-control' placeholder='Why are you the perfect fit for this role?' id=""></textarea>
                        </div>
                        <button className='d-flex align-items-center mt-3 py-2 justify-content-center btn'>Submit Application<VscSend className='ms-2' /></button>
                        <button className='d-flex align-items-center mt-2 py-2 justify-content-center btn'>Save for later</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
