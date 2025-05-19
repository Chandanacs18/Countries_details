import React from 'react'
import axios from 'axios'
import {useEffect} from 'react';
import {useState} from 'react'
import Header from './Components/Header';

import SearchBar from './Components/SearchBar';
import { Link } from 'react-router-dom';

function App({}) {
    const [result,setResult]=useState([]);
    const [filteredCountries, setFilteredCountries] = useState([])

   useEffect(()=>{
        const apiCall=async()=>{
          const res =await axios.get("https://restcountries.com/v3.1/all");
          setResult(res.data);
        }
        apiCall()
   },[])

   console.log(result);

   return (
    <div className='dark:bg-gray-800 bg-white'>
    
    <SearchBar res={result} setFilRes={setFilteredCountries}/>
      
     <div className='outer grid grid-cols-3 gap-6 bg-red-00 text-black py-[7vw] px-40  justify-center items-center'>

      {filteredCountries.map(e=>(
        <div className=' bg-white inner flex flex-col mb-8 items-center text-center h-[62 vh] w-[21vw] rounded-3xl shadow-2xl shadow-black-300 transform transition duration-300 hover:scale-110'>
          <Link to={e.name.common}> <img className='cursor-pointer flex object-cover w-[350px] h-[160px] rounded-t-3x' src={e.flags.svg} alt="flags" /> </Link>
            <div className='h-[180px] innerCont flex flex-col items-center justify-evenly'>
              <h1 className='font-[600] text-2xl'>{e.name.common}</h1>
              <p className='font-semibold text-slate-400'>Population : {e.population}</p>
              <button className='w-[200px] h-[38px] rounded-2xl bg-slate-300 font-[500]'>{e.region}</button>
              <p className='font-semibold'>Capital : {e.capital}</p>
            </div>
        </div>))
      }

      </div>
    </div>
   )}

export default App;
