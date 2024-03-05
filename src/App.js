//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeaderBackgnd from './components/HeaderBackgnd';
import FormText from './components/FormText';
import Footer from './components/Footer';
import { useState } from 'react';
import Alert from './components/Alert';



//let name= "Rajat";
function App() {
  const [mode, setMode] = useState('light'); //Weather Dark mode is enabled or not??
  const [alert, setAlert] = useState(null); //Weather Dark mode is enabled or not??

  const showAlert = (message,type) =>{
    setAlert({
      mgs: message,
      type: type
    })

    setTimeout(()=>{
        setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#101112";
      showAlert("Dark Mode has been enabled!", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "";
      showAlert("Light Mode has been enabled!", "success");
    }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       First React App
    //     </a>
    //   </header>
    // </div>
    //<div className='blank'>Good</div>
    //   <>
    // <nav>
    //   <li> Home </li>
    //   <li> About </li>
    //   <li> contact </li>
    // </nav>
    // <div className='container'>
    //   <h1> Hello {name}</h1>
    //   <p>Applications built with just React usually have a single root DOM node. If you are in</p>
    // </div>
    // </>
    <>
    <Navbar title="React Project" about="About Us" mode={mode} toggleMode={toggleMode}/> 
    {/* comments : Sending Props from title and about in navbar */}
    <Alert alert={alert}/>
    <HeaderBackgnd mode={mode}/>
    <div className='container my-3'>   
    {<FormText showAlert={showAlert} mycustomheading="Enter the text below" mode={mode} />} 
    {/*{<About/>}*/}
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
