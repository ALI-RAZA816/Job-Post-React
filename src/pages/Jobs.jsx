import React from 'react'
import style from '../styles/Jobs.module.css'
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG'
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export default function Jobs() {

    const filters = ["React / Next.js", "Rust", "TypeScript", "Python/FastApi", "PostgreSQL"];
    const jobType = ["Part Time", "Contract", "Freelance"];
  
    return (
    <section>
        <div className="container">
            <div className="row py-3 min-vh-100">
                <div className="col-lg-3 ">
                    <div className={style.filter_container}>
                        <form>
                            <h3 className='fs-4 mb-3 d-flex fw-bold'><IoFilterSharp className='me-3 fs-3' />Filters</h3>
                            <div className={style.skills}>
                                <span className='text-uppercase fw-bold mb-2 d-inline-block'>Skills</span>
                                <div>
                                    {filters.map(item=>{
                                        return   <div key={item} class="form-check">
                                                    <input class="form-check-input" type="checkbox" value={item} id={item}/>
                                                    <label class={`form-check-label ms-1 ${style.filterName}`} for={item}>
                                                        {item}
                                                    </label>
                                                </div> 
                                    })}
                                </div>
                            </div>
                            <div className={`${style.location} my-4`}>
                                <span className='text-uppercase fw-bold mb-2 d-inline-block'>Location</span>
                                <select name="" className={`form-select text-white ${style.locationName}`} id="">
                                    <option value="" className='text-white'>Remote Anywhere</option>
                                    <option value="" className='text-white'>North America</option>
                                    <option value="" className='text-white'>Europe</option>
                                    <option value="" className='text-white'>Asia Pacific</option>
                                </select>
                            </div>
                            <div className={`${style.jobType}`}>
                                <span className='text-uppercase fw-bold mb-2 d-inline-block'>Job Type</span>
                                <div className="jobtype">
                                    {jobType.map(item=>{
                                        return <div key={item} class="form-check">
                                                    <input class="form-check-input" type="radio" name='jobtype' value={item} id={item}/>
                                                    <label class={`form-check-label ms-1 ${style.typename}`} for={item}>
                                                        {item}
                                                    </label>
                                                </div> 
                                    })}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className='job_container'>
                        <div className={style.sorting}>
                            <h2 className='mt-3'>Available Jobs</h2>
                            <p>Showing 42 matching technical positions</p>
                        </div>
                        <div className='jobs mb-3'>
                            <div className={`${style.jobs_card} d-md-flex `}>
                                <div className={`${style.img} mb-3 mb-md-0`}>
                                    <img src={image} alt="" />
                                </div>
                                <div className={`${style.job_details} w-100`}>
                                    <h3 className='mb-3'>Senior Frontend Engineer</h3>
                                    <ul>
                                        <li>Linear</li>
                                        <li><CiLocationOn className='fs-6 me-2' />San Francisco (Remote)</li>
                                    </ul>
                                    <div className={`${style.tech_stacks} mt-2`}>
                                        <button>React</button>
                                        <button>Next.js</button>
                                        <button>TypeScript</button>
                                        <button>Tailwand</button>
                                    </div>
                                    <div className={`${style.price} mt-4`}>
                                        <span>$140k - $200k</span>
                                        <div className='d-flex align-items-center'>
                                            <div className="save"><CiBookmark /></div>
                                            <button className='btn'>Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='jobs'>
                            <div className={`${style.jobs_card} d-md-flex`}>
                                <div className={`${style.img} mb-3 mb-md-0`}>
                                    <img src={image} alt="" />
                                </div>
                                <div className={`${style.job_details} w-100`}>
                                    <h3 className='mb-3'>Senior Frontend Engineer</h3>
                                    <ul>
                                        <li>Linear</li>
                                        <li><CiLocationOn className='fs-6 me-2' />San Francisco (Remote)</li>
                                    </ul>
                                    <div className={`${style.tech_stacks} mt-2`}>
                                        <button>React</button>
                                        <button>Next.js</button>
                                        <button>TypeScript</button>
                                        <button>Tailwand</button>
                                    </div>
                                    <div className={`${style.price} mt-4`}>
                                        <span>$140k - $200k</span>
                                        <div className='d-flex align-items-center'>
                                            <div className="save"><CiBookmark /></div>
                                            <button className='btn'>Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
