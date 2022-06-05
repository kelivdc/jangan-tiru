import React from 'react'

function Search() {
  return (
    <div className="text-right">
        <div className="xl:w-96 -mb-4">
            <div className="input-group relative flex flex-wrap justify-end items-stretch md:w-full mb-4">
                <input type="search" className="form-control relative flex-auto max-w-[150px] min-w-0 block md:w-full px-2 md:px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="keyword" aria-label="Search" aria-describedby="button-addon3" />
                <button className="btn inline-block px-6 border border-gray-300 bg-blue-50 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Cari</button>
            </div>
        </div>
    </div>
    
  )
}

export default Search