import React, { useContext } from 'react'
import style from '../styles/Jobs.module.css'
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG'
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { IoBookmark } from "react-icons/io5";
import NoPost from '../component/NoPost';


export default function Draftsjob() {

    const navigate =useNavigate();
    const {drafts,
        setdraftindex,
        setjobtitle,
            setcompanyname,
            setlocation,
            setjobtype,
            setdescription,
            setminsalary,
            setarrskills,
            setadditional,
            setmaxsalary} = useContext(AppContext);

            
    const postdrafthandler = (index)=>{
        setdraftindex(index);
        const editdraft = drafts[index];
        setjobtitle(editdraft.title);
        setcompanyname(editdraft.company);
        setlocation(editdraft.location);
        setjobtype(editdraft.jobType);
        setdescription(editdraft.description);
        setminsalary(editdraft.minsalar);
        setmaxsalary(editdraft.maxsalary);
        setarrskills(editdraft.requiredskill);
        setadditional(editdraft.benefits);
        navigate('/postjob');
    }
    return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                    <div className='job_container'>
                        <div className={style.sorting}>
                            <h2>Your current drafts</h2>
                            <p>Keep track of opportunities you're interested in.</p>
                        </div>
                        {drafts.length === 0 ? <NoPost/> : drafts.map((draft, index) => {
                            return <div key={index} className='jobs mb-3'>
                            <div className={`${style.jobs_card} d-md-flex`}>
                                <div className={`${style.img} mb-3 mb-md-0`}>
                                    <img src={image} alt="" />
                                </div>
                                <div className={`${style.job_details} w-100`}>
                                    <h3 className='mb-3'>{draft.title}</h3>
                                    <ul>
                                        <li>{draft.company}</li>
                                        <li><CiLocationOn className='fs-6 me-2' />{draft.location} ({draft.jobType})</li>
                                    </ul>
                                    <div className={` flex-wrap ${style.tech_stacks} mt-2`}>
                                        {draft.requiredskill.map((item, i)=>{
                                            return <button className='text-nowrap' key={i}>{item}</button>
                                        })}
                                    </div>
                                    <div className={`${style.price} mt-4`}>
                                        <span>${draft.minsalar}k - ${draft.maxsalary}k</span>
                                        <div className='d-flex align-items-center'>
                                            <button onClick={()=>postdrafthandler(index)} className='btn'>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
