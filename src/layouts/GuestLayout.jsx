import React from 'react'
import { Outlet } from 'react-router-dom'

//components imports
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const GuestLayout = () => {
  return (
    <div className='mt-[10vh] bg-gray-200'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default GuestLayout
