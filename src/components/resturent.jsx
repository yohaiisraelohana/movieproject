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
            <div className="w-[60vw] bg-white h-fit"></div>
        </div>
    </div>
  )
}

export default Resturent