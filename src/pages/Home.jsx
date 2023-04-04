//react imports
import React,{useEffect, useState} from 'react'
import axios from 'axios';

//components imports
import Carusel from '../components/Carusel'
import MoviesPreview from '../components/MoviesPreview';
import NavBar from '../components/NavBar'
import YearsNavbar from '../components/YearsNavbar';

const Home = () => {
  const [bank_movies,setBankMovie] = useState([]); 
  const [api_req , setApiReq] = useState('s=bank&apikey=d628e0b4');

  useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?${api_req}`)
        .then(res=>setBankMovie(res.data.Search))
  },[api_req]);
  console.log(bank_movies);


  return (
    <div>
        <NavBar setApiReq={setApiReq}/>
        <div className=' h-screen'>
            <Carusel />
        </div>
        <YearsNavbar setApiReq={setApiReq}/>
        <MoviesPreview bank_movies={bank_movies}/>
    </div>
  )
}

export default Home
/*
* apikey=d628e0b4
*/