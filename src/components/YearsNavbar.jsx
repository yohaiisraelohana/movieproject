import React from 'react'

const YearsNavbar = () => {
    const top_years = [1950,1960,1970,1980,1990,2000,2010,2020];
  return (
    <div className='YearsNavbar w-screen flex justify-center' >
        <div className=" w-5/6 py-3 flex justify-between">
            <div className="flex w-3/4 items-end">
                <p className=' text-3xl mr-2'>Top Years</p>
                <div className="flex justify-start items-end">
                    {top_years.map((year)=>(
                        <button className='mx-1' key={year}>{year}</button>
                    ))}
                </div>
            </div>
            <div className="w-3/4 flex justify-end">
                menu
            </div>
        </div>
    </div>
  )
}

export default YearsNavbar