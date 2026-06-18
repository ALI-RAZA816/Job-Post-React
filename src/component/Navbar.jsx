import React from 'react'
import style from '../styles/Navbar.module.css';
import { FaRegBell } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";


export default function Navbar() {
  return (
    <header class='py-3 border-bottom border-secondary border-top-0 border-left-0 border-right-0'>
    <nav className={style.navbar}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <a className={`${style.title} navbar-brand fs-3 me-3 fw-bold`}>DevConnect</a>
                    <ul class='nav'>
                        <li className="nav-item"><a className={`nav-link ${style.links}`} href="#">Jobs</a></li>
                        <li className="nav-item"><a className={`nav-link ${style.links}`} href="#">Dashboard</a></li>
                        <li className="nav-item"><a className={`nav-link ${style.links}`}>Developers</a></li>
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    <div className={`${style.search} d-flex align-items-center rounded-2`}>
                        <IoSearchSharp className='text-white mx-2 fs-5' /><input type="text" className={`${style.search_box} border-0 bg-transparent`} placeholder='Search talent....' />
                    </div>
                    <FaRegBell className={`${style.bell} mx-4 fs-5`}/>
                    <MdOutlineDarkMode className={`${style.darkmode}  me-3 fs-4`} />
                    <button className={`btn  ${style.post_job}`}>Post Job</button>
                </div>
            </div>
        </nav>
    </header>
  )
}
