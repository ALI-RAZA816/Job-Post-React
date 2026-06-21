import React, { useContext } from 'react'
import style from '../styles/Navbar.module.css';
import { FaRegBell } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { AppContext } from '../context/AppContext';
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';



export default function Navbar() {
    
    const {show, showSidebar, hideSidebar} = useContext(AppContext);

  return (
    <header className='py-3 border border-secondary border-start-0 border-end-0'>
    <nav className={style.navbar}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <HiBars3CenterLeft onClick={showSidebar} className={`${style.barsIcon} text-white fs-1 me-3`} />
                    <Link className={`${style.title} navbar-brand fs-3 me-3 fw-bold`} to='/'>DevConnect</Link>
                    <ul className={`nav ${show === true ? `${style.show}` : ''}`}>
                        <HiXMark onClick={hideSidebar} className={`${style.xmark} text-white fs-2`} />
                        <li className="nav-item"><Link className={`nav-link ${style.links}`} to="/jobs">Jobs</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${style.links}`} to="dashboard">Dashboard</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${style.links}`} to='/savejob'>Save Jobs</Link></li>
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    <div className={`${style.search} d-none d-md-flex align-items-center rounded-2`}>
                        <IoSearchSharp className='text-white mx-2 fs-5' /><input type="text" className={`${style.search_box} border-0 bg-transparent`} placeholder='Search talent....' />
                    </div>
                    <FaRegBell className={`${style.bell} mx-4`}/>
                    <MdOutlineDarkMode className={`${style.darkmode}  me-3`} />
                    <Link to='/postjob'> <button className={`btn text-nowrap  ${style.post_job}`}>Post Job</button></Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
