import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#050507';
      showalert("Dark Mode Enabled", "Success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled", "Success")
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <main className='container my-4 ' mode={mode}>
        <label htmlFor="textbox" className="form-label my-5 text-primary" showalert={showalert}><h1>Try Welltext - The Text Analyzer</h1></label>
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Form mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/about" element={<About mode={mode} togglemode={togglemode} />} />
          <Route path="/contact" element={<Contact mode={mode} togglemode={togglemode} />} />
        </Routes>
      </main>
    </>
  )
}

export default App;