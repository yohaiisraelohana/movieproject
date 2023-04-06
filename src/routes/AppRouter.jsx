//react imports
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//components imports
import Home from '../pages/Home'
import Movie from '../components/Movie'
import GuestLayout from '../layouts/GuestLayout'
import MoviesByYear from '../components/MoviesByYear'


const AppRouter = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<GuestLayout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/movie/:id" element={<Movie/>}/> 
              <Route path="/year/:year" element={<MoviesByYear/>}/>
            </Route>  
          </Routes>
        </Router>
    </div>
  )
}

export default AppRouter