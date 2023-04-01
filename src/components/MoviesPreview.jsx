import React from 'react'

const MoviesPreview = ({bank_movies}) => {

  return (
    <div className='MoviesPreview w-screen flex justify-center my-6'>
        <div className='w-5/6 grid grid-cols-4 gap-4'>
            {bank_movies.map((movie)=>(
                <div className=" h-[50vh] z-10 ">
                    <img 
                    className=' h-full w-full border rounded-lg '
                    src={movie.Poster}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MoviesPreview