import React from 'react'
import Template from '/components/AdminTemplate'
import Head  from 'next/head'
import Panel from '/components/Panel'

function dashboard() {
  return (
      <>   
      <Head>
        <title>Dashboard</title>
      </Head>      
      <Template>     
          <div className='p-4'>
            <div className='grid grid-cols-3 space-x-10'>
              <div className='border border-l-blue-400 border-l-4 rounded-md p-4 bg-white shadow border-gray-300 flex justify-between'>
                <div>Posts</div>
                <div className='text-blue-400 text-2xl font-bold'>125</div>
              </div>   
              <div className='border border-l-green-400 border-l-4 rounded-md p-4 bg-white shadow border-gray-300 flex justify-between'>
                <div>Galeries</div>
                <div className='text-green-400 text-2xl font-bold'>50</div>
              </div>  
              <div className='border border-l-cyan-600 border-l-4 rounded-md p-4 bg-white shadow border-gray-300 flex justify-between'>
                <div>Users</div>
                <div className='text-green-400 text-2xl font-bold'>3</div>
              </div>            
            </div>
          <div className='mt-4'>
          <Panel title="Dashboard" />      
          </div>
          </div>  
        </Template>       
      </>
    )
}

export default dashboard