import React from 'react'
import Leftnav from './Leftnav'
import Topnav from './Topnav'
import Head from 'next/head'

function Layout() {
  return (
      <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
            <style jsx global>{`
            html,
            body {
                font-family: Nunito;
                font-size: 1rem;
            }     
            `}</style>
            <div className='flex'>
                <div className='w-1/6 bg-[#4e73df] h-screen'>
                    <Leftnav />
                </div>
                <div className='w-5/6 bg-gray-100 h-screen'>
                    <Topnav />
                </div>
            </div>
        </Head>
        </>
  )
}

export default Layout