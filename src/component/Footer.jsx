import React from 'react'
import style from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className="container">
            <div className="row py-5 border-bottom">
                <div className={`col-6 ${style.first_box}`}>
                    <h2>DevConnect</h2>
                    <p>© 2024 DevConnect. Built for developers by <br /> developers.</p>
                </div>
                <div className={`col-sm-6 col-md-2 ${style.second_box}`}>
                    <span className='mb-3 d-inline-block'>Platform</span>
                    <ul className='nav flex-column'>
                        <li>About</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className={`col-sm-6 col-md-2 ${style.third_box}`}>
                    <span className='mb-3 d-inline-block'>Community</span>
                    <ul className='nav flex-column'>
                        <li>Discussions</li>
                        <li>Open Source</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div className={`col-2 ${style.fourth_box}`}>
                    <span className='mb-3 d-inline-block'>Social</span>
                    <ul className='nav flex-column'>
                        <li>Twitter/X</li>
                        <li>Linkedin</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 py-4 text-center text-white"><p className='mb-0'>© 2024 DevConnect. All Right Reserved</p></div>
        </div>
    </footer>
  )
}
