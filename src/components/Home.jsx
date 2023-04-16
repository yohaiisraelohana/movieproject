import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ResturentCard from './ResturentCard';



const Home = () => {
  const {resturents} = useSelector(store => store.resturentReducer);
  const [searched_resturents,setSearchedResturents] = useState("");
  const search_input_ref = useRef();


  const hundleSearch = () => {
    if(search_input_ref.current.value.length === 0){
      setSearchedResturents([]);
    }else{
      setSearchedResturents(resturents.filter((r)=>{
        return (
          r.name.toLowerCase().includes(search_input_ref.current.value.toLowerCase()) || 
          r.city.toLowerCase().includes(search_input_ref.current.value.toLowerCase()) ||(
            r.cuisine && r.cuisine.toLowerCase().includes(search_input_ref.current.value.toLowerCase())
          ))
      }));
    }
    console.log(searched_resturents);
  }


  console.log(resturents);
  return (
    <div className='w-screen flex flex-wrap justify-center items-start h-screen overflow-y-auto'>
      <p className='my-2 text-white text-3xl text-center drop-shadow-lg shadow-black font-bold font-sans w-full' >Find your table in any occasion</p>
      <input type="text"
        ref={search_input_ref}
        onChange={() => hundleSearch()}
        className='p-1 text-center rounded-md outline-none shadow-md border-b border-black' />

      <div className="w-[80%] h-fit border grid grid-cols-2 gap-3 my-3 md:grid-cols-3 md:w-[90%] lg:grid-cols-4 ">
        {searched_resturents.length > 0 ? searched_resturents.map((r,i) => (
          <ResturentCard r={r} key={i} />
          ))
        :
          (resturents ? resturents.map((r,i) => (
          <ResturentCard r={r} key={i} />
          ))
        : <p>loading</p> )}
      </div>
    </div>
  )
}

export default Home