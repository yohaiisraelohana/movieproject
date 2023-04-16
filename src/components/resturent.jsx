import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSingleResturent } from '../redux/features/resturentSlice';

//icons imports
import {AiOutlineArrowRight} from 'react-icons/ai'

const Resturent = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {presented_resturent} = useSelector(store => store.resturentReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setSingleResturent(id));
    },[]);
    console.log(presented_resturent);
    

  return (
    <div className='h-fit w-screen flex flex-wrap justify-center relative overflow-y-auto'>
        <img 
            className='h-[35vh] md:h-[50vh] lg:h-[70vh]  w-screen'
            src={`${presented_resturent.main_image}`} alt="" />
        <button 
            onClick={()=>navigate(-1)}
            className="text-white font-bold text-xl absolute top-2 right-4">
            <AiOutlineArrowRight/>
        </button>
        <div className=" w-screen flex flex-wrap justify-center h-[70vh]">
            <div className="w-[80vw] bg-white h-fit z-10 -mt-[5vh] p-8 rounded-md md:-mt-[10vh] lg:-mt-[20vh]">
                <p className='text-3xl border-b-2' >{presented_resturent.name}</p>
                <p>{presented_resturent.city}, {presented_resturent.cuisine} {presented_resturent.price}
                {presented_resturent.price && new Array(5-presented_resturent.price.length).fill(`$`).map((d,i)=>(
                 <span key={i} className=' text-gray-400' >{d}</span>
                 ))}
                </p>
                <p>{presented_resturent.description}</p>
                <p className=' font-bold w-full border-b my-1'>{presented_resturent.images && presented_resturent.images.length + " photos"}</p>
                <div className="grid grid-cols-2 gap-1">
                    {presented_resturent.images && presented_resturent.images.map((i,index)=>(
                        <img 
                        key={index}
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