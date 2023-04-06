import React ,{ useEffect ,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import MoviesPreview from './MoviesPreview';
import {AiOutlineArrowRight} from 'react-icons/ai'


const MoviesByYear = () => {
    const {year} = useParams();
    const navigate = useNavigate();
    const [movies,setMovies] = useState(null);
    useEffect(()=>{
        const url = `https://www.omdbapi.com/?s=bank&y=${year}&apikey=d628e0b4`
        axios.get(url)
            .then((res)=>setMovies(res.data.Search));
    },[])
    console.log(year);
    console.log(movies);
  return (
    <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-slate-700 pt-[10vh] relative overflow-y-auto'>
        <p className='w-full text-center text-white text-6xl'>{year} <br className='md:hidden'/>movies</p>
        {movies && <MoviesPreview bank_movies={movies}/>}
        <button 
            onClick={()=>navigate(-1)}
            className=" absolute right-[6vh] top-[12vh] text-white"><AiOutlineArrowRight/></button>
    </div>
  )
}

export default MoviesByYear