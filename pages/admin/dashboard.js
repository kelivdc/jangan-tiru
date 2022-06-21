import React from 'react'
import Layout from '../components/admin/Layout'
import Head  from 'next/head'

function dashboard() {
  return (
      <>
    <Head>
        <title>Dashboard</title>
    </Head>
    <Layout>       
        Dashboard
    </Layout>
    </>
  )
}

export default dashboard