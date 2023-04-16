//react imports
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


//layouts imports
import GuestLayout from '../layouts/GuestLayout'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                  <Route path="/" element={<GuestLayout/>}>

                  </Route>
                  <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
  }
  
  export default AppRoutes