import React from 'react'

const MoviesPreview = ({bank_movies}) => {

  return (
    <div className='MoviesPreview w-screen flex justify-center'>
        {bank_movies 
        ? 
        <div className='w-5/6 grid grid-cols-4'>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
            <div className="">x</div>
        </div>
        :
        <p></p>}
    </div>
  )
}

export default MoviesPreview