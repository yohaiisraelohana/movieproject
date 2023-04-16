import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addResturent } from '../redux/features/resturentSlice';

//assets
  //icons
  import {AiOutlinePlus,AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



const AddResturent = () => {
  const [images_number,setImagesNamber] = useState([]);
  const {handleSubmit,register,formState:{errors},reset} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate();


  console.log(images_number);
  console.log(errors);

  const add_Resturent  = (data) => {
    const images = [];
    for (let index = 0; index < images_number.length; index++) {
      images.push(data[images_number[index]]);
    }
    console.log(images);
    const new_resturant = {
      name:data.Name,
      city:data.City,
      cuisine:data.Cuisine,
      price:data.Price,
      main_image:data["Main Image"],
      description:data.Description,
      images,
    }
    console.log(new_resturant);
    dispatch(addResturent(new_resturant));
  }


  return (
    <div
      className='h-screen w-screen flex justify-center items-center overflow-y-auto relative'>
      <button 
        onClick={()=>navigate(-1)}
        className=' absolute top-4 right-4 text-2xl'
        ><AiOutlineArrowRight/>
      </button>
      <form onSubmit={handleSubmit(add_Resturent)}
        className="w-[70vw] h-fit bg-white p-2 flex flex-col rounded-sm shadow-md -mt-[10vh]">
          <p 
            className='text-2xl text-center my-2'
            >Add A New Resturent</p>
          <input type="text"
            {...register("Name",{required:true})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Name && "border border-red-800"}`}
            placeholder='Name' />
          {errors?.Name?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("City",{required:true})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.City && "border border-red-800"}`}
            placeholder='City' />
          {errors?.City?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("Cuisine",{required:true})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Cuisine && "border border-red-800"}`}
            placeholder='Cuisine' />
          {errors?.Cuisine?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> } 

          <input type="text"
            {...register("Price",{required:true})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Price && "border border-red-800"}`}
            placeholder='Price' />
          {errors?.Price?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("Main Image",{required:true})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors["Main Image"] && "border border-red-800"}`}
            placeholder='Main Image' />
          {errors["Main Image"]?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <div className="flex justify-between px-1">
            <p>Images</p>

            <button type='button'
              onClick={()=>{
                setImagesNamber([...images_number,`Image ${Number(images_number.length + 1)}`]);
              }}
              ><AiOutlinePlus/>
            </button>

          </div>

          {images_number.map((i)=>(

            <div className="" key={i}>
              <input type="text"
                {...register(`${i}`,{required:true})}
                className={`bg-gray-200 px-1 outline-none my-2 rounded-sm w-full ${errors[i] && "border border-red-800"}`}
                placeholder={i} />
              {errors[i]?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }
            </div>

          ))}

          <textarea 
            {...register("Description",{required:true})}
            className={`border p-2 my-2 outline-none ${errors.Description && 'border-red-800'}`}
            placeholder='Description'
            />
          {errors?.Description?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <div className="flex justify-center my-2">

            <button type='submit'
              className='w-1/4 rounded-md bg-black text-white'
              >Add
            </button>

          </div>
      </form>
    </div>
  )
}

export default AddResturent