import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Analytics } from "@vercel/analytics/react"
import New from './components/New';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import NotFoundPage from './components/Notfound';
import Tools from './components/Tools';
import Download from './components/Download';
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 2500);
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
      <Analytics />
      <main className='container mt-4' mode={mode}>
        <div className="box fixed-top ">

          <Alert alert={alert} />

        </div>
        <Routes> <Route path="/" element={<Form mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/about" element={<About mode={mode} togglemode={togglemode} />} />
          <Route path="/contact" element={<Contact mode={mode} togglemode={togglemode} />} />
          <Route path="/tools" element={<Tools mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/updates" element={<New mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/download" element={<Download mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path='*' element={<NotFoundPage mode={mode} togglemode={togglemode} />} />
        </Routes>

      </main>

    </>
  )
}

export default App;