import { useCallback, useContext, useState } from 'react';
import style from '../styles/Applications.module.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { RiDeleteBinLine } from "react-icons/ri";
import NoPost from '../component/NoPost';
import { useNavigate } from 'react-router-dom';




export default function Applications() {

    const {application, setapplication, setviewDetail} = useContext(AppContext);
    const navigate = useNavigate();
    // Delete application handler
    const deleteApplicationHandler = (index)=>{
        const newApplication = application.filter((item, i)=> i != index);
        setapplication(newApplication);
    }

    const viewApplicationHandler = (index)=>{
        setviewDetail(application[index]);
        navigate('/view');
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <div className='job_container'>
                            {/* Header section for the saved jobs page */}
                            <div className={style.sorting}>
                                <h2 className={style.heading}>Application Management</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-12 oveflow-hidden shadow-lg mb-5 p-0 ${style.applicationContainer}`}>
                        {application.length === 0 ?<NoPost/> :<table className="table mb-0">
                            <thead>
                                <tr>
                                    <th className='py-3'>Candidate Name</th>
                                    <th className='py-3'>Job Role</th>
                                    <th className='py-3'>Applied</th>
                                    <th className='py-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {application.map((item, index)=>{
                                    return <tr key={index} className='align-middle '>
                                                <td >
                                                    <div className='d-flex align-items-center'>
                                                        <div className={`${style.profile} me-2 d-flex justify-content-center align-items-center`}><FaRegUser className={`${style.user}`} /></div>
                                                        <div className={`d-flex flex-column ${style.userDetail}`}>
                                                            <span className='d-inline-flex lh-1 mb-0'>{item.fullname}</span>
                                                            <span className='d-inline-flex lh-1 mb-0'>{item.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={`${style.role}`}>
                                                    <p>{item.role}</p>
                                                    <div>
                                                        {item.skills?.map((item, i)=>{
                                                            return <span key={i} className='me-2 text-capitalize'>{item}</span>
                                                        })}
                                                        
                                                    </div>
                                                </td>
                                                <td className={style.date}>{item.applydate}</td>
                                                <td><MdOutlineRemoveRedEye onClick={()=>viewApplicationHandler(index)} className={`${style.view} fs-3`} /><RiDeleteBinLine onClick={()=>deleteApplicationHandler(index)} className={`${style.delete} fs-4 ms-3`} /></td>
                                            </tr>
                                })}
                                {/* <tr className='align-middle'>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className={`${style.profile} me-2 d-flex justify-content-center align-items-center`}><FaRegUser className={`${style.user}`} /></div>
                                            <div className={`d-flex flex-column ${style.userDetail}`}>
                                                <span className='d-inline-flex lh-1 mb-0'>Elena</span>
                                                <span className='d-inline-flex lh-1 mb-0'>example@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`${style.role}`}>
                                        <p>Senior Rust Developer</p>
                                        <div>
                                            <span className='me-2'>React</span>
                                            <span>TypeScript</span>
                                        </div>
                                    </td>
                                    <td className={style.date}>23 Oct, 2026</td>
                                    <td><MdOutlineRemoveRedEye className={`${style.view} fs-3`} /></td>
                                </tr> */}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </section>
    )
}