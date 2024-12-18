// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import './App.css';
import React,{useState} from 'react';
import Alert from './component/Alert';
// import About from './component/About';




function App() {
  const [mode, setMode] = useState('light');
  

  const [alert, setalert] = useState(null);


  const showAlert = (message,type)=>{
       setalert({
        msg : message,
        type : type
       })

       setTimeout(() => {
        setalert(null);
       }, 2000);
  }

 


  const toggleMode =() =>{
    if(mode === 'light')
    {
      
      setMode('dark');
     
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title ='TextUtils - Dark Mode';

      setInterval(() => {
        document.title ='TextUtils  is Amazing Mode';
      }, 2000);

      setInterval(() => {
        document.title =' Install TextUtils Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled","success");
      document.title ='TextUtils - light Mode';
    }
  }

   
  
  return ( 
   
<>
<Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
{/* <Alert alert="This is Aler"/> */}
<Alert alert={alert}/>
<div className="container my-3 " >
<TextFrom heading="Enter the text to analyze below"  showAlert={showAlert} mode={mode}  />
{/* <About/> */}

</div>

</>


    
  );
}

export default App;
