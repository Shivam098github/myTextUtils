import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='black'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Alert/> */}
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
