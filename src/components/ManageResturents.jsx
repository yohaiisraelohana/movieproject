import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRating,deleteResturent } from '../redux/features/resturentSlice';
import {AiOutlineEdit,AiOutlineDelete,AiOutlineArrowRight} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const ManageResturents = () => {
  const {resturents,rating} = useSelector(store => store.resturentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(updateRating());
  },[]);
  

  const hundleDelete = (id) => {
    dispatch(deleteResturent(id));
  }


  return (
    <div className=' w-screen flex flex-wrap justify-center pb-4 relative h-screen overflow-y-auto'>
      <button 
        onClick={()=>navigate(-1)}
        className=' absolute top-4 right-4 text-2xl'
        ><AiOutlineArrowRight/>
      </button>
      <p className='w-[80%] mt-[5vh] text-2xl border-b border-black'>Details</p>
      <div className="flex justify-between bg-white w-[80%] p-2">
        <p className='text-lg' >resturents: <span className=' text-base'>{resturents.length}</span></p>
        <p className="text-lg">rate: <span className='text-base'>{rating}
            {rating && new Array(5-rating.length).fill(`$`).map((d,i)=>(
              <span key={i} className=' text-gray-400' >{d}</span>
            ))}</span>
        </p>
      </div>

      <div className='w-[80%] mt-[5vh] text-2xl border-b border-black flex justify-between items-center'>
        <p>Resturents List</p>
        <button 
          className='text-lg bg-white rounded-md px-2 m-1'
          onClick={() => navigate(`/addResturent`)}
          >Add</button>
      </div>
      <div className="flex flex-wrap justify-between bg-white w-[80%]">
        {resturents.map((r)=>(
          <div className="w-full border-b border-gray-200 p-2 rounded-sm flex justify-between" key={r.id}>
            <Link to={`/resturent/${r.id}`} className='text-lg'>{r.name}</Link>
            <div className="flex text-lg items-center">
              <button 
                onClick={()=>navigate(`/editResturent/${r.id}`)}
                className=' hover:text-yellow-600'
                ><AiOutlineEdit />
              </button>
              <button 
                onClick={()=>hundleDelete(r.id)}
                className='hover:text-red-800'
                ><AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageResturents