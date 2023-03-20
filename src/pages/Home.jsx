import React from 'react'

//components imports
import Carusel from '../components/Carusel'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className=' h-screen'>
            <Carusel/>
        </div>
    </div>
  )
}

export default Home