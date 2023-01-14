// import logo from './logo.svg';
// import './App.css';
import Header from './components/header/header';
import { useEffect, useRef, useState } from 'react';
// import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from './components/home/home';
// import Pages from './components/pages/pagesRoutes';
// import Dashboard from './components/dashboard/dashboard';
// import AllProducts from './components/pages/allProducts';
// import CustomerService from './components/pages/customerService';
import MainRouter from './mainRouter';
import Footer from './components/footer/footer';
// import Footer from './components/footer/Footer';
import Snav from './Test/Snav'




function App() {
const[viewMode,setViewMode]=useState();
const darkModeRef=useRef(null);



  useEffect(() => {
    const chartJsScript=document.createElement('script');
    chartJsScript.src="https://cdn.jsdelivr.net/npm/chart.js";
    chartJsScript.async=true;
    const script = document.createElement('script');
    script.src = "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js";
    script.async = true;
    document.body.appendChild(chartJsScript);
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
      document.body.removeChild(chartJsScript);
    }
  }, []);


  useEffect(()=>{
const mode=localStorage.getItem("tokariViewMode");
if(!mode){
  localStorage.setItem("tokariViewMode","light");
  setViewMode("light")
}else{
  setViewMode(mode);
}
  },[]);

useEffect(()=>{
if(viewMode=="light"){
darkModeRef.current.classList.remove('dark');
localStorage.removeItem('tokariViewMode')
}else if(viewMode==="dark"){
  darkModeRef.current.classList.add('dark');
  localStorage.setItem("tokariViewMode","dark");
}
},[viewMode]);

  

  return (
    
       <div  className=' relative w-full 'ref={darkModeRef}  >
       
        <Header viewMode={viewMode} setViewMode={setViewMode}/>
        <MainRouter/>
        <Footer/>
  
    </div>
  
   
  );
}

export default App;
