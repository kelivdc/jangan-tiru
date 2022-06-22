import React from 'react'

function Search() {
  return (
    <div className="text-right">
        <div className="xl:w-96 -mb-4">
            <div className="input-group relative flex flex-wrap justify-end items-stretch md:w-full mb-4">
                <input type="search" className="form-control relative flex-auto max-w-[150px] md:max-w-[200px] min-w-0 block md:w-full px-2 md:px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:text-sm text-sm focus:bg-white  focus:border-blue-600 focus:outline-none" placeholder="keyword" aria-label="Search" aria-describedby="button-addon3" />
                <div className='p-2 text-white border border-gray-400 rounded-r-md bg-blue-900'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Search