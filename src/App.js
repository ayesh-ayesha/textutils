// import logo from './logo.svg';

import './App.css';
import Alert from './components/Alert.js';
import About from './components/About';
import Navbar from './components/Navbar';
import WorkText from './components/WorkText.js';
// import Counter from './components/Counter';
import React,{useState} from 'react';
import './components/style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {
//         path: "/",
//         element: <WorkText />
//       },
//       {
//         path: "/about",
//         element: <About />
//       }
//     ]
//   },
// ]);

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode or light mode or not
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }

 const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
    document.title='TextUtils-Light Mode'

    // setInterval(() => {
    //   document.title='TextUtils is Amazing website '
    // }, 2000);
    // setInterval(() => {
    //   document.title='Install TextUtils now '
    // }, 1500);
  }else{
    setMode('dark')
    document.body.style.backgroundColor='grey'
    showAlert("Dark mode has been enabled","success")
    document.title='TextUtils-Dark Mode'

  }
 }
  return (
<>
<BrowserRouter>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <Alert alert={alert}/>
  
  <Routes>
     <Route exact path="/about" element={<About/>}></Route>
     <Route exact path="/" element={<WorkText showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
  </Routes>
  {/* <Counter title="Counter"/>  */}
  </div>
  </BrowserRouter>
  </>

    
  );
}

export default App;
