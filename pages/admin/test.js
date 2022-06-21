import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link href={`${process.env.admin}/login`}><a>Login</a></Link>
      </p>
    </div>

  )
}

export default Login