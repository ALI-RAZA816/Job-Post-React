import React, { useContext, useState } from 'react'
import { ImFilesEmpty } from "react-icons/im";
import { AppContext } from '../context/AppContext';

export default function NoPost() {

  const {application} = useContext(AppContext);
  
  return (
    <div style={{minHeight:'50vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <ImFilesEmpty className='text-center fs-1 text-secondary' />
            {application.length === 0 ?  <h3 className='fw-bold text-secondary fs-5 text-uppercase mt-3'>No Applications Yet</h3> : <h3 className='fw-bold text-secondary fs-5 text-uppercase mt-3'>No posts</h3>}
        </div>
    </div>
  )
}
