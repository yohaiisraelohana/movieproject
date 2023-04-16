import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

//assets imports
  //images
  import logo from '../assets/logoImage.jpeg';
  //icons
  import {AiOutlineMenu} from 'react-icons/ai';



const NavBar = () => {
  const nav_options = [{name:"Add Resturent",link:"addResturent"},{name:"Manage Resturents",link:"manageResturents"}];
  const navigate = useNavigate();
  const [show_menu,setShowMenue] = useState(false);
  return (
    <div
        className=' absolute top-0 flex justify-center w-screen h-[10vh] bg-white border-b border-black px-[2vw]'>
        <div 
          className="flex justify-between w-full">
          <Link to={'/'}
            className="w-2/6 ">
            <img 
              className='h-full'
              src={logo} alt="" />
          </Link>
          <div className="w-1/6 h-full flex justify-evenly items-center">
            <button 
              onClick={()=>setShowMenue(!show_menu)}
              className="md:hidden text-3xl">
              <AiOutlineMenu/>
            </button>
            {show_menu && 
                <div className="md:hidden absolute top-[10vh] w-screen flex flex-wrap z-20 right-0 bg-white">
                {nav_options.map((option)=>(
                  <button 
                    onClick={()=>{
                      setShowMenue(!show_menu);
                      navigate(`/${option.link}`)
                    }}
                    className="w-full text-center border-b border-black py-2 hover:bg-gray-200" key={option.name}>
                    {option.name}
                  </button>
                ))}
                </div>
            }

            {nav_options.map((option)=>(
              <Link to={`/${option.link}`}
                className=" hidden md:block text-2xl" key={option.name}>
                {option.name}
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default NavBar