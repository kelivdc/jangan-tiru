import React from 'react'

function Panel({children, title}) {
  return (
    <div className='border rounded shadow'>
        <div className='bg-gray-100 border-b text-xl px-4 py-2 font-medium text-blue-500'>{title}</div>
        <div className='bg-white p-4'>
            {children}
        </div>
    </div>
  )
}

export default Panel