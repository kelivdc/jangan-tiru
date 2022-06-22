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
          <Panel title="Dashboard">
            Kontennya bro
            </Panel>
          </div>  
        </Template>       
      </>
    )
}

export default dashboard