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
          </Routes>
        </main>
        <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
