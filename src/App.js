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
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [tText, settText] = useState('Notification')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const notify = () => toast.success(tText);
  // const changeNoti = (msg) => {
  //   settText(msg)
  //   notify()
  // }

  
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
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
            <TextForm settText={settText} notify={notify} showalert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>

        </Switch>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
