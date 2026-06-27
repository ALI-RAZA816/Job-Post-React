import React, { useContext } from 'react'
import style from '../styles/ModalBox.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';



export default function ModalBox() {

  const {hidemodalbox, isPosted} = useContext(AppContext);
  
  return (
    <div className={`${style.modalcontainer} d-flex justify-content-center align-items-center vh-100 container-fluid`}>
        <div className={`${style.modalbox} ${isPosted === true ? `${style.zoomout}` : ''} shadow-lg col-4 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center`}>
            <FaXmark onClick={hidemodalbox} className={style.xmark} />
            <FaCircleCheck className={style.circlecheck} />
            <h2>Job Posted Successfully!</h2>
            <p className='text-center'>Your listing for <span>'Senior Rust Developer'</span> is now live and visible to developers.</p>
            <Link to="/dashboard"><button onClick={hidemodalbox}>Go to Dashboard</button></Link>
        </div>
    </div>
  )
}
