//react imports
import React,{useEffect, useState} from 'react'

//components imports
import Carusel from '../components/Carusel'
import NavBar from '../components/NavBar'

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
    </div>
  )
}

export default Home
/*
* apikey=d628e0b4
*/