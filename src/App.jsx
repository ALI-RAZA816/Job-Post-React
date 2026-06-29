import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./component/Footer";
import ContextProvider from "./context/AppContext";
import Jobs from "./pages/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import ApplyJobForm from "./pages/ApplyJobForm";
import SavedJob from "./pages/SavedJob";
import ViewApplication from "./pages/ViewApplication";
import EditPost from "./pages/EditPost";
import ModalBox from "./component/ModalBox";
import Draftsjob from "./pages/Draftsjob";
import Applications from "./pages/Applications";


function App() {
  
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
        <ModalBox />
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/postjob' element={<PostJob/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/applyjob' element={<ApplyJobForm/>}/>
            <Route path='/savejob' element={<SavedJob/>}/>
            <Route path='/view' element={<ViewApplication/>}/>
            <Route path='/edit' element={<EditPost/>}/>
            <Route path='/drafts' element={<Draftsjob/>}/>
            <Route path='/applications' element={<Applications/>}/>
          </Routes>
        </main>
        <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
