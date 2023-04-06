import React,{ useState,useRef } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const YearsNavbar = ({setApiReq}) => {
//https://www.omdbapi.com/?s=bank&amp;y=2020&amp;apikey=000000
    const top_years = [1950,1960,1970,1980,1990,2000,2010,2020];
    const [years_menu,setYears_menu] = useState(false);
    const navigate = useNavigate();
    const years_input_ref = useRef();
  return (
    <div className='YearsNavbar w-screen flex justify-center' >
        <div className=" w-5/6 py-7 flex justify-between">
            <div className="flex flex-wrap items-start md:flex-nowrap w-3/4 md:items-end">
                <p className=' text-3xl mr-2'>Top Years</p>
                <div className="hidden sm:flex flex-wrap md:flex-nowrap justify-start items-end">
                    {!years_menu &&
                        (top_years.map((year)=>(
                            <Link to={`/year/${year}`} 
                                className='mx-1' 
                                key={year}
                                onClick={()=>setApiReq(`s=bank&y=${year}&apikey=d628e0b4`)}>{year}</Link>
                        )))}
                </div>
            </div>
            <div className="w-3/4 flex flex-wrap justify-end items-center">
                <AiOutlineMenu onClick={()=>{
                    setYears_menu(!years_menu);
                }}/>
                <div className="">
                {years_menu && 
                    (<div className="w-3/4 flex flex-wrap justify-end items-center">
                        <input type="text" 
                            ref={years_input_ref}
                            className='w-2/4 -mr-2 border-2 border-black rounded-md text-center' 
                            onKeyDown={(e)=>{
                                if(e.key === "Enter"){
                                    navigate(`/year/${years_input_ref.current.value}`)
                                }
                            }}/>
                        {(top_years.map((year)=>(
                            <Link to={`/year/${year}`} 
                                className='mx-1 w-full text-end' 
                                key={year}
                                onClick={()=>setApiReq(`s=bank&y=${year}&apikey=d628e0b4`)}>{year}</Link>
                        )))}
                            </div>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default YearsNavbar