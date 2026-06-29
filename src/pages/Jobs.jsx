import React, { useContext, useState, useMemo } from 'react';
import style from '../styles/Jobs.module.css';
import { IoFilterSharp } from "react-icons/io5";
import image from '../assets/asrew7982304021341asdfjlSLDJKFOWERLKJA32423asfasdf.PNG';
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import NoPost from '../component/NoPost';
import { IoBookmark } from "react-icons/io5";

export default function Jobs() {
  // ── Filter options ──
  const skillsOptions = [
    "React / Next.js", "Rust", "TypeScript",
    "Python/FastApi", "PostgreSQL", "Larvel", "Php", "Ruby"
  ];
  const jobTypeOptions = ["Part Time", "Contract", "Freelance"];
  const locationOptions = [
    "Remote Anywhere", "North America", "Europe", "Asia Pacific"
  ];

  // ── Context data ──
  const { posts, savejobhandler, savejob, setjapplicantJob, searchQuery} = useContext(AppContext);

  // Navigation 
   const navigate = useNavigate();

  // ── Filter state ──
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Remote Anywhere");
  const [selectedJobType, setSelectedJobType] = useState("");

  // ── Handlers ──
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (e.target.checked) {
      setSelectedSkills(prev => [...prev, skill]);
    } else {
      setSelectedSkills(prev => prev.filter(s => s !== skill));
    }
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setSelectedJobType(e.target.value);
  };

  // ── Filter logic ──
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // 1. Skills: job must have at least one of the selected skills
      if (selectedSkills.length > 0) {
        const hasSkill = selectedSkills.some(skill =>
          post.requiredskill.some(ps => 
            ps.toLowerCase() === skill.toLowerCase()
          )
        );
        if (!hasSkill) return false;
      }

      // 2. Location: exact match (case‑insensitive)
      if (selectedLocation && selectedLocation !== "Remote Anywhere") {
        if (post.location.toLowerCase() !== selectedLocation.toLowerCase()) {
          return false;
        }
      }

      // 3. Job Type: exact match (case‑insensitive)
      if (selectedJobType) {
        if (post.jobType.toLowerCase() !== selectedJobType.toLowerCase()) {
          return false;
        }
      }

      // 4. Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = post.title.toLowerCase().includes(query);
        const inCompany = post.company.toLowerCase().includes(query);
        const inSkills = post.requiredskill.some(skill =>
          skill.toLowerCase().includes(query)
        );
        // Also include description if you want
        // const inDescription = post.description.toLowerCase().includes(query);
        if (!inTitle && !inCompany && !inSkills) {
          return false;
        }
      }
      return true;
    });
  }, [posts, selectedSkills, selectedLocation, selectedJobType, searchQuery]);

  // Get Job Detail for Application
  const getjobdetail = (index)=>{
    setjapplicantJob(posts[index]);
    navigate('/applyjob');
  }

  // ── Render ──
  return (
    <section>
      <div className="container">
        <div className="row py-3 min-vh-100">
          {/* ─── Filters Sidebar ─── */}
          <div className="col-lg-3" >
            <div className={style.filter_container} style={{position:'sticky',top:'100px',left:'0'}}>
              <form>
                <h3 className='fs-4 mb-3 d-flex fw-bold'>
                  <IoFilterSharp className='me-3 fs-3' />Filters
                </h3>

                {/* Skills */}
                <div className={style.skills}>
                  <span className='text-uppercase fw-bold mb-2 d-inline-block'>Skills</span>
                  <div>
                    {skillsOptions.map(item => (
                      <div key={item} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id={item}
                          checked={selectedSkills.includes(item)}
                          onChange={handleSkillChange}
                        />
                        <label className={`form-check-label ms-1 ${style.filterName}`} htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className={`${style.location} my-4`}>
                  <span className='text-uppercase fw-bold mb-2 d-inline-block'>Location</span>
                  <select
                    className={`form-select text-white ${style.locationName}`}
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    {locationOptions.map(loc => (
                      <option key={loc} value={loc} className='text-white'>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type */}
                <div className={style.jobType}>
                  <span className='text-uppercase fw-bold mb-2 d-inline-block'>Job Type</span>
                  <div className="jobtype">
                    {jobTypeOptions.map(item => (
                      <div key={item} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jobtype"
                          value={item}
                          id={item}
                          checked={selectedJobType === item}
                          onChange={handleJobTypeChange}
                        />
                        <label className={`form-check-label ms-1 ${style.typename}`} htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* ─── Job List ─── */}
          <div className="col-lg-9">
            <div className='job_container'>
              <div className={style.sorting}>
                <h2 className='mt-3'>Available Jobs</h2>
                <p>Showing {filteredPosts.length} matching technical positions</p>
              </div>

              {filteredPosts.length === 0 ? (
                <NoPost />
              ) : (
                filteredPosts.map((item, index) => (
                  <div key={index} className='jobs mb-3'>
                    <div className={`${style.jobs_card} d-md-flex`}>
                      <div className={`${style.img} mb-3 mb-md-0`}>
                        <img src={image} alt="" />
                      </div>
                      <div className={`${style.job_details} w-100`}>
                        <h3 className='mb-3'>{item.title}</h3>
                        <ul>
                          <li>{item.company}</li>
                          <li>
                            <CiLocationOn className='fs-6 me-2' />
                            {item.location} ({item.jobType})
                          </li>
                        </ul>
                        <div className={`${style.tech_stacks} text-nowrap flex-wrap mt-2`}>
                          {item.requiredskill.map((skill, i) => (
                            <button key={i} className='my-1 text-uppercase'>
                              {skill}
                            </button>
                          ))}
                        </div>
                        <div className={`${style.price} mt-4`}>
                          <span>${item.minsalar}k - ${item.maxsalary}k</span>
                          <div className='d-flex align-items-center'>
                            <div
                              onClick={() => savejobhandler(item.id)}
                              className={`${style.bookmark} ${
                                savejob.includes(item.id) ? style.savejob : ''
                              } rounded-2 d-flex justify-content-center align-items-center me-3 text-white`}
                            >
                              {savejob.includes(item.id) ? <IoBookmark /> : <CiBookmark />}
                            </div>
                              <button onClick={()=> getjobdetail(index)} className='btn'>Apply Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}