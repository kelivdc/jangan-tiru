import React from 'react'

function Menarik() {
  return (
    <div className='bg-gray-200 '>
        <h2 className="font-bold text-2xl text-primary p-4">Menarik</h2>
        <ul className="divide-y divide-gray-300 w-full">
        {[...Array(10)].map((x, i) =>
            <li key={i} className="flex items-start space-x-4 py-2 p-4">
                <div className="bg-gray-400 px-3 py-1 rounded-full justify-center items-center my-auto">{i}</div>
                <div className='text-sm font-semibold text-gray-800'>Minim tempor labore sit esse ex nulla minim reprehenderit consequat velit laboris eiusmod.</div>                
            </li>
        )}
        </ul>
    </div>
  )
}

export default Menarik