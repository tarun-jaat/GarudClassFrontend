import React from 'react'

function Search() {
  return (
    <div className='w-full my-4'>
        <input className='px-4 py-3 focus:bg-white hover:bg-white border-2 border-[#0342ff] rounded-3xl w-4/5 bg-[#ffffff] ' type="text" placeholder="Search...">
        </input>
        <button className='bg-[#1f83e1] text-white px-4 py-3 rounded-2xl  ml-3 '>
            Search
        </button>
    </div>
  )
}

export default Search