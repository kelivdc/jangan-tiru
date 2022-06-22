import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'

function Topnav() {
  return (
    <div className='bg-white h-[4.374rem] shadow my-auto flex items-center text-sm'>
        <div className='flex-none'>
            <div className='p-4'><MenuIcon className='text-gray-600 w-5 h-5'/></div>
        </div>
        <div className='w-5/6 text-right p-4'>
            <a href="/" target="_blank">[Visit]</a>
        </div>
        <div className='w-1/6 border-l border-slate-400 text-gray-500 px-4 text-right'>
            Logout
        </div>
    </div>
  )
}

export default Topnav