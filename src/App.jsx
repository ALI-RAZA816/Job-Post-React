import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <HomePage/>
    </main>
    </>
  )
}

export default App
