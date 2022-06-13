import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Trending() {
  return (
    <div className='mt-4'>
        <h2 className='text-xl font-semibold border-b border-red-600 text-gray-800'>Trending</h2>
        <ul className='mt-4 pr-2 space-y-4'>
        {[...Array(5)].map((x, i) =>
            <li className='flex space-x-4 py-2' key={i}>
                <div className='w-1/4 relative w-full h-16'>
                    <Image className='rounded-md' src="https://img.idxchannel.com/media/439/images/idx/2021/06/25/hewan_kurban.jpg" layout='fill' objectFit='fill'/>
                </div>
                <div className='w-3/4'>
                    <Link href="/read/testing"><a className='text-gray-700 font-bold line-clamp-2'>Microsoft Luncurkan Aplikasi Xbox TV, Gamer hasudhu quwhd uqwhd uqwh uqwhd quwdhqwudqwdq</a></Link>
                </div>
            </li>
        )}
        </ul>
    </div>
  )
}

export default Trending