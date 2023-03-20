//react imports
import React,{useEffect} from 'react'

//components imports
import Carusel from '../components/Carusel'
import NavBar from '../components/NavBar'

const Home = () => {
  useEffect(()=>{
    fetch('http://www.omdbapi.com/?s=bank&apikey=d628e0b4')
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
  },[])
  return (
    <div>
        <NavBar/>
        <div className=' h-screen'>
            <Carusel/>
        </div>
    </div>
  )
}

export default Home
/*
* apikey=d628e0b4
*/