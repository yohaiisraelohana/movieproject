//react imports
import React,{useEffect, useState} from 'react'

//components imports
import Carusel from '../components/Carusel'
import MoviesPreview from '../components/MoviesPreview';
import NavBar from '../components/NavBar'
import YearsNavbar from '../components/YearsNavbar';

const Home = () => {
  const [bank_movies,setBankMovie] = useState([]); 



  useEffect(()=>{
    fetch('http://www.omdbapi.com/?s=bank&apikey=d628e0b4')
      .then(res=>res.json())
      .then(data=>{
        const {Search} = data;
        setBankMovie(Search);
      })
      .catch(err=>console.log(err))
  },[]);
  console.log(bank_movies);




  return (
    <div>
        <NavBar/>
        <div className=' h-screen'>
            <Carusel bank_movies={bank_movies}/>
        </div>
        <YearsNavbar/>
        <MoviesPreview bank_movies={bank_movies}/>
    </div>
  )
}

export default Home
/*
* apikey=d628e0b4
*/