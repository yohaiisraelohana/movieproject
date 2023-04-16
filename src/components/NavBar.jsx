import React from 'react'

//assets imports
  //images
  import logo from '../assets/logoImage.jpeg';
  //icons
  import {AiOutlineMenu} from 'react-icons/ai';


const NavBar = () => {
  const nav_options = ["Cart","Account","Add Resturent"];
  return (
    <div
        className=' absolute top-0 flex justify-center w-screen h-[10vh] bg-white border-b border-black px-[2vw]'>
        <div 
          className="flex justify-between w-full">
          <div 
            className="w-2/6 ">
            <img 
              className='h-full'
              src={logo} alt="" />
          </div>
          <div className="w-1/6 h-full flex justify-evenly items-center">
            <div className="md:hidden text-3xl">
              <AiOutlineMenu/>
            </div>
            {nav_options.map((option)=>(
              <div className=" hidden md:block text-2xl" key={option}>
                {option}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default NavBar