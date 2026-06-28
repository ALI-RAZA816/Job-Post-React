import React, { useContext } from 'react'
import style from '../styles/ModalBox.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
import { TiDeleteOutline } from "react-icons/ti";
import { createPortal } from 'react-dom';


export default function ModalBox() {

  const {hidemodalbox, isPosted, jobtitle, modalMsg} = useContext(AppContext);

  if(!isPosted) return null;
  
  return createPortal(
      <div className={`${style.modalcontainer} d-flex justify-content-center align-items-center vh-100 container-fluid`}>
          <div className={`${style.modalbox} ${isPosted === true ? `${style.zoomout}` : ''} shadow-lg col-4 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center`}>
              <FaXmark onClick={hidemodalbox} className={style.xmark} />
              {modalMsg === 'delete' ? <TiDeleteOutline className='text-danger fs-1 mb-3' /> : '' || modalMsg === 'saveasdraft' ? <FaCircleCheck className={style.circlecheck} /> : '' || modalMsg === 'post' ? <FaCircleCheck className={style.circlecheck} /> :'' || modalMsg === 'update' ? <FaCircleCheck className={style.circlecheck} /> : ''}
              {modalMsg === 'delete' ? <h2 className='text-danger'>Job Deleted Successfully!</h2> : '' || modalMsg === 'saveasdraft' ? <h2>Job Draft Successfully!</h2> : '' || modalMsg === 'post' ? <h2>Job Posted Successfully!</h2> : '' || modalMsg === 'update' ? <h2>Job Updated Successfully!</h2> : '' }
              {modalMsg === 'delete' ? <p className='text-center'>Your listing for <span>'{jobtitle}'</span> is now delete and don't visible to developers.</p> : '' || modalMsg === 'saveasdraft' ? <p className='text-center'>Your listing for <span>'{jobtitle}'</span> is now draft and don't visible to developers.</p> : '' || modalMsg === 'post' ? <p className='text-center'>Your listing for <span>'{jobtitle}'</span> is now live and visible to developers.</p> : '' || modalMsg === 'update' ? <p className='text-center'>Your listing for <span>'{jobtitle}'</span> is now updated and visible to developers.</p> : ''}
              <Link to="/dashboard"><button onClick={hidemodalbox}>Go to Dashboard</button></Link>
          </div>
      </div>,
      document.getElementById('modal-box')
  )
}
