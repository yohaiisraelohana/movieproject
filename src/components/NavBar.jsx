//react imports
import React from 'react'

//icons imports
import {SiThemoviedatabase} from 'react-icons/si'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'

const NavBar = ({setApiReq}) => {
  return (
    <div className=' absolute w-screen flex justify-center z-10' >
            <div className="mt-5 flex w-5/6 justify-between items-center">
                <div className="logo w-3/12 flex">
                  <span className='text-white text-6xl'><SiThemoviedatabase/></span>
                </div>
                <div className="search w-3/12 flex justify-center">
                  <input type="text"
                      className='rounded-md outline-none px-2 w-full'
                      onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                          setApiReq(`s=${e.target.value}&apikey=d628e0b4`);
                        }
                      }} />
                </div>
                <div className="menu w-3/12 flex justify-end">
                  <span className='text-white  flex'>
                    <AiOutlineShoppingCart className='px-1 text-3xl'/>
                    <FaUserCircle className='px-1 text-3xl'/>
                  </span>
                </div>
            </div>
    </div>
  )
}

export default NavBar