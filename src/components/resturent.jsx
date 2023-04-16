import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSingleResturent } from '../redux/features/resturentSlice';

const Resturent = () => {
    const {id} = useParams();
    const {presented_resturent} = useSelector(store => store.resturentReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSingleResturent(id));
    },[]);
    console.log(presented_resturent);
    

  return (
    <div className='h-fit w-screen flex flex-wrap justify-center'>
        <img 
            className='h-[30vh] w-screen'
            src={`${presented_resturent.main_image}`} alt="" />
        <div className=" w-screen flex flex-wrap justify-center h-[70vh]">
            <div className="w-[80vw] bg-white h-fit z-10 -mt-[5vh] p-8 rounded-md">
                <p className='text-3xl border-b-2' >{presented_resturent.name}</p>
                <p>{presented_resturent.city}, {presented_resturent.cuisine} {presented_resturent.price}
                {presented_resturent.price && new Array(5-presented_resturent.price.length).fill(`$`).map((d,i)=>(
                 <span key={i} className=' text-gray-400' >{d}</span>
                 ))}
                </p>
                <p>{presented_resturent.description}</p>
                <div className="grid grid-cols-2">
                    {presented_resturent.images && presented_resturent.images.map((i)=>(
                        <img 
                        className='h-full w-full'
                        src={`${i}`} alt="" />
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Resturent