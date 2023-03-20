//react imports
import React from 'react'

//icons imports
import {SiThemoviedatabase} from 'react-icons/si'


const NavBar = () => {
  return (
    <div className=' absolute w-screen flex justify-center z-10' >
            <div className="mt-5 flex w-5/6 justify-between items-center">
                <div className="logo w-3/12 flex">
                  <span className='text-white text-6xl'><SiThemoviedatabase/></span>
                </div>
                <div className="search w-3/12 flex justify-center">
                  <input type="text" />
                </div>
                <div className="menu w-3/12 flex justify-end">
                  <span className='text-white'>cart</span>
                </div>
            </div>
    </div>
  )
}

export default NavBar