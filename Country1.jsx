import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Country1() {

  const {cname}=useParams()

  const [loading,setLoading]=useState(true)

    const [data,setData]=useState({})
    
    useEffect(()=>{
        const call=async()=>{
            const resssss=await axios.get(`https://restcountries.com/v3.1/name/${cname}`);
            setData(resssss.data[0])
            setLoading(false)
        }
        call()
    },[])
    
    const {name,flags,region,population,capital,languages,currencies,tld}=data;

  return (
    loading ? <h1>Loading...</h1> : 
      <div className='dark:bg-gray-700'>
      <button onClick={()=>history.back()} className='mt-12 bg-slate-400 px-8 py-1 text-black rounded-r-2xl rounded-tl-2xl'>Back To Home</button>
      <div className='mt-5 flex justify-center items-center'>
          <img className='w-[36vw]' src={flags?.svg} alt="flag bandilla" />
          <div className='leading-10 text-xl font-semibold ml-20 flex flex-colitems-start'>
            <h1 className='text-3xl text-slate-800 font-bold mb-4'>{name?.common}</h1>
            <div className='ml-5 mr-5'>
              <p>Region:{region}</p> 
              <p>Population:{population}</p>
              <p>Capital:{capital}</p>
            </div>
            <div>
              <p>Languages:{languages? Object.values(languages).join(', '): ''}</p>
              <p>Currencies:{currencies? Object.keys(currencies).join(', ') : ''}</p>
              <p>TLD:{tld?.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
