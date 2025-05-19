import React, { useEffect } from 'react'
import {useState} from 'react'


function SearchBar({res,setFilRes}) {
    const [searchItem, setSearchTerm] = useState("");
    const [reg,setReg]=useState("All")

    useEffect(()=>{
      const filC =res.filter(e=>{
        const byName=e.name.common.toLowerCase().includes(searchItem.toLowerCase())
        const byRegion=reg==="All" || reg===e.region

        return byName && byRegion
      })
      setFilRes(filC)
    },[res,searchItem,reg])
    
    function hdlInp(e){
      setSearchTerm(e.target.value)
    }

    function hdlReg(e){
      setReg(e.target.value)
    }

  return (
    <div className="flex w-[100%] justify-between mt-1  ">

          <input
            type="text"
            placeholder="Search name.."
            onChange={hdlInp}
            className="px-8 py-3 border rounded-md focus:outlin focus:ring  ml-6 "/>
            
        
        <div className="flex items-center">
        
        
          <label className='dark:text-white' for="countries">Filter by Region:</label>
          <select name="country" id="country" onChange={hdlReg}>
            <option value="All">All</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
          </select>
        </div>
   </div>
  )
}

export default SearchBar;



