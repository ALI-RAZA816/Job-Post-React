import React from "react"
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

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
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
          </Routes>
        </main>
        <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
