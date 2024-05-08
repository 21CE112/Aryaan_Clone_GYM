import './App.css';
import Home from './Pages/Home';
import Trainers from './Pages/Trainers';
import Navbar from './components/Navbar';
import Packages from './Pages/Packages';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Select_package from './Pages/Select_package';
import Registration from './Pages/Registration';
import { useState } from 'react';
import List from './Pages/transectionlist';
import List1 from './Pages/customerlist';
import Plans1 from './Pages/Plans1';

// import Main from './Pages/Main';
// import Days from './Pages/Days';
// import pushImage from "./assets/push.png";
// import pullImage from "./assets/pull.png";
//import legImage from "./assets/leg.png";
function App() {

  const [uplow,setUplow] = useState(true);
  
  return (
    <div className="">
  
       { uplow && ( 
        <>
          <Navbar/>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/packages" element={<Packages />} />
              {/* <Route path="select" element={<Select_package/>} /> */}
              <Route path="/select" element={<Select_package/>} />
              <Route path="/Registration" element={<Registration/>} />
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Select_package" element={<Select_package/>}/>
              <Route path="/transectionlist" element={<List/>}/>
              <Route path="/customerlist" element={<List1/>}/>
              {/* <Route path="/Main" element={<Main/>}/>
              <Route path="/Days" element={<Days day={Day3}/>}/> */}
              <Route path="/Plans1" element={<Plans1/>}/>



            </Routes>


          <Footer/>
        </>
      
        )}
    
        
    
    </div>    
  );
}

export default App;
