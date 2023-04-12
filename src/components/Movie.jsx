import React ,{ useState,useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from 'axios'

const Movie = () => {
  const [movie,setMovie] = useState();
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id);
  useEffect(()=>{
    setTimeout(()=>{
      if(id !== undefined){
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=d628e0b4`)
          .then(res=>setMovie(res.data));
      }
    },2000)
  },[id])

  console.log(movie);
  return (
    <div className={`h-screen w-screen flex items-center justify-center bg-slate-700 overflow-y-auto `}>
      <div className="">

        {movie ?
          <div className="w-[80vw] mt-[40vh] md:mt-[10vh] h-fit flex justify-center flex-wrap md:flex-nowrap overflow-auto">
              <button onClick={()=>navigate(-1)} className='absolute text-white right-0 z-20'>
              <AiOutlineArrowRight 
                className=' '/>
              </button>
              <img src={movie.Poster} alt="" className='w-[60vw] h-[70vw]  md:w-[30vw] md:h-[45vw] rounded-md ' />
              <div className="w-[80vw] p-8 text-center md:w-[50vw]">
                <p className='text-3xl text-white'>{movie.Title}</p>
                <p className='py-1 text-slate-200'>{movie.Plot}</p>
                <p className='py-1 text-slate-200'>Genre:{movie.Genre}</p>
                <p className='py-1 text-white'>Actors:{movie.Actors}</p>
                <p className='py-1 text-white'>Year:{movie.Year}</p>
              <div>
                  <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Rating</dt>
                      <dd className="flex items-center justify-center mb-3">
                          <div className="w-[20vw] bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2 relative">
                              <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width:`${movie.imdbRating * 10}%`}}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{movie.imdbRating}</span>
                      </dd>
                  </dl>
              </div>
            </div>
          </div>

          :
          <div role="status" className="h-[60vh] w-[80vw] space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
            <div className="flex items-center justify-center w-[60vw] h-full bg-gray-300 rounded sm:w-96 ">
              <svg className="w-12 h-full text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className="w-[40vw]">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>}

      </div>
    </div>
  )
}

export default Movie