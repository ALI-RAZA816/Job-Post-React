import React, { useContext } from 'react'
import style from '../styles/Jobs.module.css'
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG'
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { IoBookmark } from "react-icons/io5";
import NoPost from '../component/NoPost';


export default function SavedJob() {

    const {savedjobs, deletesavejobhandler} = useContext(AppContext);

  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                    <div className='job_container'>
                        <div className={style.sorting}>
                            <h2>Saved Jobs</h2>
                            <p>Keep track of opportunities you're interested in.</p>
                        </div>
                        {savedjobs.length === 0 ? <NoPost/> :savedjobs.map((item, index)=>{
                        return <div key={index} className='jobs mb-3'>
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
                                                    <div className={`${style.bookmark} rounded-2 d-flex justify-content-center align-items-center me-3 text-white`}><IoBookmark onClick={()=>deletesavejobhandler(item.id)}/></div>
                                                    <Link to="/applyjob"><button className='btn'>Apply Now</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        })}
                        {/* <div className='jobs'>
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
                                            <div className={`${style.bookmark} rounded-2 d-flex justify-content-center align-items-center me-3 text-white`}><CiBookmark /></div>
                                            <Link to="/applyjob"><button className='btn'>Apply Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
