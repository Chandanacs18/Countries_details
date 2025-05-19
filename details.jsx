import React, { useEffect, useState } from 'react'
import axios from 'axios';

function KanjiPinji() {
    const [result6,setResult6]=useState({});

    useEffect(()=>{
        const apiBro=async()=>{
            const ress=axios.get("https://restcountries.com/v3.1/name/india");
            setResult6(ress.data[0]);
        }
        apiBro()
    },[])

    const{name,flags,region,capital,population,tld,currencies, languages}=result6

    console.log(result6)
    
  return (
    !result6? "...loading" :
    <>
    <button>Back To Home</button>
    <div>
       <img src={flags.svg} alt="" />
       <div>
        <h1>{name.common}</h1>
        <div>
         <p>Region:{region}</p>
         <p>Population:{population}</p>
         <p>Capital:{capital}</p>
        </div>
        <div>
          {/* <p>Languages:{Object.values(languages).join(', ')}</p>
          <p>Currencies:{Object.keys(currencies).join(', ')}</p> */}
          <p>TLD:{tld.join(', ')}</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default KanjiPinji;
