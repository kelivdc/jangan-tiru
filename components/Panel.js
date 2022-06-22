import React from 'react'

function Panel({children, title}) {
  return (
    <div className='border rounded-md border-[#e3e6f0] shadow'>
        <div className='rounded-t-md bg-gray-100 border-b px-5 py-2 font-semibold text-indigo-500'>{title}</div>
        <div className='bg-white p-5 rounded-b-md text-gray-500'>
          {children}
        </div>
    </div>
  )
}

export default Panel