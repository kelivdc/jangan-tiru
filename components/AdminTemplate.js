import React from 'react'
import Leftnav from './admin/Leftnav'
import Topnav from './admin/Topnav'
import Head from 'next/head'

export default function Template({children}) {
  return (
    <>
        <div className='flex'>
            <div className='w-1/6 bg-[#4e73df] h-screen'>
                <Leftnav />
            </div>
            <div className='w-5/6 bg-gray-100 h-screen'>
                <Topnav />
                <div className='text-gray-500'>
                  {children}
                </div>
            </div>                
        </div>
    </>
  )
}