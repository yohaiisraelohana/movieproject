import React,{ useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const YearsNavbar = ({setApiReq}) => {
//https://www.omdbapi.com/?s=bank&amp;y=2020&amp;apikey=000000
    const top_years = [1950,1960,1970,1980,1990,2000,2010,2020];
    const [years_menu,setYears_menu] = useState(false);
  return (
    <div className='YearsNavbar w-screen flex justify-center' >
        <div className=" w-5/6 py-7 flex justify-between">
            <div className="flex flex-wrap items-start md:flex-nowrap w-3/4 md:items-end">
                <p className=' text-3xl mr-2'>Top Years</p>
                <div className="hidden sm:flex flex-wrap md:flex-nowrap justify-start items-end">
                    {!years_menu &&
                        (top_years.map((year)=>(
                            <button className='mx-1' key={year}
                                onClick={()=>setApiReq(`s=bank&y=${year}&apikey=d628e0b4`)}>{year}</button>
                        )))}
                </div>
            </div>
            <div className="w-3/4 flex flex-wrap justify-end items-center">
                <AiOutlineMenu onClick={()=>{
                    setYears_menu(!years_menu);
                }}/>
                {years_menu &&
                        (top_years.map((year)=>(
                            <button className='mx-1 w-full text-end' key={year}
                                onClick={()=>setApiReq(`s=bank&y=${year}&apikey=d628e0b4`)}>{year}</button>
                        )))}
            </div>
        </div>
    </div>
  )
}

export default YearsNavbar