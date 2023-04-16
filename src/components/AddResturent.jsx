import React, { useState } from 'react'

const AddResturent = () => {
  const [images_number,setImagesNamber] = useState(["image"]);
  console.log(images_number);
  return (
    <div
      className='h-screen w-screen flex justify-center items-center'>
      <form 
        className="w-[70vw] h-fit bg-white p-2 flex flex-col rounded-sm shadow-md -mt-[10vh]">
          <p 
            className='text-2xl text-center my-2'
            >Add A New Resturent</p>
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='Name' />
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='City' />
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='Cuisine' />
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='Price' />
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='Main Image' />
          <div className="flex justify-between">
            <p>Images</p>
            <button
              onClick={()=>{
                setImagesNamber([...images_number,images_number[0]]);
              }}
              >+</button>
          </div>
          <input type="text"
            className='bg-gray-200 px-1 outline-none my-2 rounded-sm'
            placeholder='Image' />
      </form>
    </div>
  )
}

export default AddResturent