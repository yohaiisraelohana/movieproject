 import React from 'react'
 
 const ResturentCard = ({r}) => {
   return (
    <div key={r.id}
        className="bg-white rounded-md shadow-md">
        <img 
          className='h-[15vh] w-full'
          src={`${r.main_image}`} alt="" />
        <div className="h-[15vh] w-full p-2 overflow-y-auto">
          <p className='text-lg font-bold'>{r.name}</p>
          <p>{r.city}, {r.cuisine}</p>
          <p>{r.price}
            {new Array(5-r.price.length).fill(`$`).map((d,i)=>(
              <span key={i} className=' text-gray-400' >{d}</span>
            ))}
          </p>
        </div>
    </div>
   )
 }
 
 export default ResturentCard