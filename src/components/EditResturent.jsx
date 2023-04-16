import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux';
import { updateResturent, setSingleResturent } from '../redux/features/resturentSlice';

//assets
  //icons
    import {AiOutlinePlus,AiOutlineArrowRight} from 'react-icons/ai'
    import { useNavigate, useParams } from 'react-router-dom';



const EditResturent = () => {
  const [images_number,setImagesNamber] = useState([]);
  const {handleSubmit,register,formState:{errors},reset} = useForm();
  const {presented_resturent} = useSelector(store => store.resturentReducer);
    const {id} = useParams();

  const dispatch = useDispatch()
  const navigate = useNavigate();


    useEffect(() => {
        dispatch(setSingleResturent(id));
    },[]);

    useEffect(()=>{
        console.log( presented_resturent);
        if(presented_resturent.images !== undefined){
            setImagesNamber([...presented_resturent.images]);
        }
        console.log(images_number);
    },[presented_resturent])


  const update_Resturent  = (data) => {
    
    const images = [];
    for (let index = 0; index < images_number.length; index++) {
      images.push(data[images_number[index]]);
    }

    const new_resturant = {
        id:presented_resturent.id,
        name:(data.Name.length > 0 ? data.Name : presented_resturent.name),
        city:(data.City.length > 0 ? data.City : presented_resturent.city),
        cuisine:(data.Cuisine.length > 0 ? data.Cuisine : presented_resturent.cuisine),
        price:(data.Price.length > 0 ? data.Price : presented_resturent.price),
        main_image:(data["Main Image"].length > 0 ? data["Main Image"] : presented_resturent.main_image),
        description:(data.Description.length > 0 ? data.Description : presented_resturent.description),
        images:images_number
    };

    console.log(new_resturant);
    dispatch(updateResturent(new_resturant));
  }


  return (
    <div
      className='h-screen w-screen flex justify-center items-center overflow-y-auto relative'>
      <button 
        onClick={()=>navigate(-1)}
        className=' absolute top-4 right-4 text-2xl'
        ><AiOutlineArrowRight/>
      </button>
      <form onSubmit={handleSubmit(update_Resturent)}
        className="w-[70vw] h-fit bg-white p-2 flex flex-col rounded-sm shadow-md -mt-[10vh]">
          <p 
            className='text-2xl text-center my-2'
            >Edit Resturent</p>
          <input type="text"
            {...register("Name",{minLength:0})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Name && "border border-red-800"}`}
            placeholder='Name'
            defaultValue={presented_resturent.name} />
          {errors?.Name && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("City",{minLength:0})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.City && "border border-red-800"}`}
            placeholder='City'
            defaultValue={presented_resturent.city} />
          {errors?.City && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("Cuisine",{minLength:0})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Cuisine && "border border-red-800"}`}
            placeholder='Cuisine'
            defaultValue={presented_resturent.cuisine} />
          {errors?.Cuisine && <span className='text-sm text-red-800 -mt-1'>This field is required</span> } 

          <input type="text"
            {...register("Price",{minLength:0})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors.Price && "border border-red-800"}`}
            placeholder='Price'
            defaultValue={presented_resturent.price} 
            />
          {errors?.Price && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <input type="text"
            {...register("Main Image",{minLength:0})}
            className={`bg-gray-200 px-1 outline-none my-2 rounded-sm ${errors["Main Image"] && "border border-red-800"}`}
            placeholder='Main Image' 
            defaultValue={presented_resturent.main_image}/>
          {errors["Main Image"] && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <div className="flex justify-between px-1">
            <p>Images</p>

            <button type='button'
              onClick={()=>{
                setImagesNamber([...images_number,`Image ${Number(images_number.length + 1)}`]);
              }}
              ><AiOutlinePlus/>
            </button>

          </div>

          {images_number.map((i,index)=>(

            <div className="" key={index}>
              <input type="text"
                {...register(`${i}`)}
                className={`bg-gray-200 px-1 outline-none my-2 rounded-sm w-full ${errors[i] && "border border-red-800"}`}
                placeholder={i}
                defaultValue={i}/>
              {errors[i]?.type === 'required' && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }
            </div>

          ))}

          <textarea 
            {...register("Description",{minLength:0})}
            className={`border p-2 my-2 outline-none ${errors.Description && 'border-red-800'}`}
            placeholder='Description'
            defaultValue={presented_resturent.description}
            />
          {errors?.Description && <span className='text-sm text-red-800 -mt-1'>This field is required</span> }

          <div className="flex justify-center my-2">

            <button type='submit'
              className='w-1/4 rounded-md bg-black text-white'
              >Update
            </button>

          </div>
      </form>
    </div>
  )
}

export default EditResturent