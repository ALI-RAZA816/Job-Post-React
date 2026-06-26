import React from 'react'
import { ImFilesEmpty } from "react-icons/im";

export default function NoPost() {
  return (
    <div style={{minHeight:'50vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <ImFilesEmpty className='text-center fs-1 text-secondary' />
            <h3 className='fw-bold text-secondary fs-5 text-uppercase mt-3'>No posts</h3>
        </div>
    </div>
  )
}
