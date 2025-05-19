import React, { useState } from 'react'

function Header() {

  const [dark,setDark]=useState(false)

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700 dark:text-white border-b border-gray-300 p-6 flex justify-between items-center">
  
  <h1 className="text-lg font-semibold">Where In The World</h1>
  
  
  
  <button onClick={()=>{document.body.classList.toggle('dark'); setDark(!dark)}} className="bg-gray-200 text-gray-700 font-medium py-1 px-4 rounded-full focus:outline-none">{dark? 'Light' : 'Dark'}</button>
</div>

    </>
  )
}

export default Header

   
