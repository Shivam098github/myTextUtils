import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  // const [tText, settText] = useState('')
  const changeNoti = (msg) => {
    
    
    // settText(msg);

    // console.log(msg)
    // console.log(tText)
    notify()
    // console.log(tText)
    function notify() {
      return toast.success(msg);
    }
  }
  
  
  
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    }
    )
    
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      changeNoti("Dark Mode Enabled")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      changeNoti("Light Mode Enabled")
    }
  }
  return (
    <>
      <Router>
        <ToastContainer/>
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm changeNoti={changeNoti} showalert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>

        </Switch>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
