import React from 'react'
import Link from 'next/link'

function Category() {
  return (
    <div className='relative mt-2'>
        <ul className='bg-blue-50 flex space-x-6 md:space-x-8 p-2 text-gray-600 md:px-4'>
            <li>Home</li>
            <li><a className="flex items-center whitespace-nowrap" data-bs-toggle="collapse" href="#category" role="button" aria-expanded="false" aria-controls="category">
                <span>Kategori</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </a>
            </li>
        </ul>    
        <ul className='shadow collapse grid grid-cols-2 gap-4 px-2 py-4 absolute w-full z-50 bg-white' id="category">
            <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
            <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
            <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
            <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
            <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
        </ul>
    </div>
  )
}

export default Category