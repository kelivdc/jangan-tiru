import React from 'react'
import Loginform from '../components/admin/Loginform'

function login() {
  return (
      <div className='overflow-hidden relative'>
        <img src="/img/admin-login.jpg" className='left-0 top-0 w-full h-screen' />     
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>   
          <div className='absolute top-0 left-0 w-full h-full'>            
            <div className='grid h-screen place-items-center'>
                <Loginform />
            </div>
          </div>
      </div>
  )
}

export default login