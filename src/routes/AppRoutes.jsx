//react imports
import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//layouts imports
import GuestLayout from '../layouts/GuestLayout'

//components imports
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  useEffect(()=>{
    //http://localhost:3000/blogsProject/
  },[])
    return (
        <Router>
            <Routes>
                  <Route path="/" element={<GuestLayout/>}>
                    <Route path='/' element={<Home/>}/>
                  </Route>
                  <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
  }
  
  export default AppRoutes