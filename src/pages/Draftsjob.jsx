// Import React and useContext hook for accessing shared state
import React, { useContext } from 'react'

// Import custom CSS module for styling the Draftsjob component
import style from '../styles/Jobs.module.css'

// Import icons from react-icons library
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG'
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { IoBookmark } from "react-icons/io5";
import NoPost from '../component/NoPost';

export default function Draftsjob() {
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Destructure drafts and setters from AppContext
    const {
        drafts,
        setdraftindex,
        setjobtitle,
        setcompanyname,
        setlocation,
        setjobtype,
        setdescription,
        setminsalary,
        setarrskills,
        setadditional,
        setmaxsalary
    } = useContext(AppContext);

    // Handler to load a draft into the post form and navigate to /postjob
    const postdrafthandler = (index) => {
        // Store the index of the draft being edited
        setdraftindex(index);
        // Get the specific draft from the drafts array
        const editdraft = drafts[index];
        // Populate all form fields with draft data
        setjobtitle(editdraft.title);
        setcompanyname(editdraft.company);
        setlocation(editdraft.location);
        setjobtype(editdraft.jobType);
        setdescription(editdraft.description);
        setminsalary(editdraft.minsalar);
        setmaxsalary(editdraft.maxsalary);
        setarrskills(editdraft.requiredskill);
        setadditional(editdraft.benefits);
        // Navigate to the post job page where user can edit and publish
        navigate('/postjob');
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <div className='job_container'>
                            {/* Header section for the drafts page */}
                            <div className={style.sorting}>
                                <h2>Your current drafts</h2>
                                <p>Keep track of opportunities you're interested in.</p>
                            </div>
                            {/* If there are no drafts, show the NoPost component; otherwise map through drafts */}
                            {drafts.length === 0 ? <NoPost /> : drafts.map((draft, index) => {
                                return (
                                    <div key={index} className='jobs mb-3'>
                                        <div className={`${style.jobs_card} d-md-flex`}>
                                            {/* Company logo image */}
                                            <div className={`${style.img} mb-3 mb-md-0`}>
                                                <img src={image} alt="" />
                                            </div>
                                            {/* Job details section */}
                                            <div className={`${style.job_details} w-100`}>
                                                <h3 className='mb-3'>{draft.title}</h3>
                                                <ul>
                                                    <li>{draft.company}</li>
                                                    <li><CiLocationOn className='fs-6 me-2' />{draft.location} ({draft.jobType})</li>
                                                </ul>
                                                {/* Required skills tags */}
                                                <div className={`flex-wrap ${style.tech_stacks} mt-2`}>
                                                    {draft.requiredskill.map((item, i) => {
                                                        return <button className='text-nowrap' key={i}>{item}</button>
                                                    })}
                                                </div>
                                                {/* Salary range and Continue button */}
                                                <div className={`${style.price} mt-4`}>
                                                    <span>${draft.minsalar}k - ${draft.maxsalary}k</span>
                                                    <div className='d-flex align-items-center'>
                                                        <button onClick={() => postdrafthandler(index)} className='btn'>Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}