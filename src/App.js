import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar.js'
import Form from './components/Form.js'
import About from './components/About.js';
import Alert from './components/Alert.js';
function App() {

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Form/>
        {/* <About /> */}
        <Alert/>
      </div>
    </>
  );
}

export default App;
