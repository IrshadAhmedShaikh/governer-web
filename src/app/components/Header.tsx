import React from 'react'

function Header() {
  return (
    
            <div className="flex justify-evenly bg-blue-800 text-white items-center text-2xl"  >
<div>
  <Image
          src='/giaic.9ff76f62.png'
          alt='image'
          width={70}
          height={70}
          className='mt-10'
          /></div>
      <h1 className="">Tuition Free Education Program on Latest Technologys</h1>
      
      
        <ul className="flex gap-8 font-normal text-white items-center text-md justify-end" >
    
          <li>Home</li>
          <li>Apply</li>
          <li>Jobs</li>
          <li>Result</li>
         <li>Career</li>
        </ul>
    </div>
  )
}

export default Header
