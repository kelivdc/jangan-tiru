import React from 'react'
import Template from '../components/AdminTemplate'
import Head  from 'next/head'

function dashboard() {
  return (
      <>   
      <Head>
        <title>Dashboard</title>
      </Head>
        <Template>     
          <div className='p-4'>
            <h1 className='text-gray-500 text-2xl'>Dashboard</h1>
          </div>  
        </Template>
      </>
    )
}

export default dashboard