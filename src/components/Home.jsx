import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ResturentCard from './ResturentCard';



const Home = () => {
  const {resturents} = useSelector(store => store.resturentReducer);
  const [searched_resturents,setSearchedResturents] = useState([]);
  const search_input_ref = useRef();


  const hundleSearch = () => {
    console.log(search_input_ref.current.value);
  }

  console.log(resturents);
  return (
    <div className='w-screen flex flex-wrap justify-center items-start h-screen overflow-y-auto'>
      <p className='my-2 text-white text-3xl text-center drop-shadow-lg font-bold font-sans' >Find your table in any occasion</p>
      <input type="text"
        ref={search_input_ref}
        onChange={() => hundleSearch()}
        className='p-1 text-center rounded-md outline-none shadow-md' />

      <div className="w-[80%] h-fit border grid grid-cols-2 gap-3 my-3">
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