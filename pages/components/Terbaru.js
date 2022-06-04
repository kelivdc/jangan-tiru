import React from 'react'
import Image from "next/image";

function Terbaru() {
  return (
    <div className="bg-black md:w-2/5 rounded-md px-6 py-4 text-white">
        <h2 className="font-semibold text-xl tracking-wide">Info terbaru</h2>
        <div>
            <ul className='text-sm divide-y divide-blue-900'>
                <li className="flex justify-between space-x-8 py-2">
                    <div>
                        <h5 className='font-semibold  line-clamp-2'>Xiaomi Akan Hadirkan 3 Smartphone Terbaru Dengan Dukungan Snapdragon 888!</h5>
                        <div className="text-white text-xs flex space-x-2 pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>1 hari yang lalu</div>
                        </div>
                    </div>
                    <div>
                        <Image src="/img/xiaomi.jpg" width={200} height={200} />
                    </div>
                </li>
                <li className="flex justify-between space-x-8 py-2">
                    <div>
                        <h5 className='font-semibold line-clamp-2'>Xiaomi Akan Hadirkan 3 Smartphone Terbaru Dengan Dukungan Snapdragon 888!</h5>
                        <div className="text-white text-xs flex space-x-2 pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>1 hari yang lalu</div>
                        </div>
                    </div>
                    <div>
                        <Image src="/img/xiaomi.jpg" width={200} height={200} />
                    </div>
                </li>                
                <li className="flex justify-between space-x-8 py-2">
                    <div>
                        <h5 className='font-semibold line-clamp-2'>Xiaomi Akan Hadirkan 3 Smartphone Terbaru Dengan Dukungan Snapdragon 888!</h5>
                        <div className="text-white text-xs flex space-x-2 pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>1 hari yang lalu</div>
                        </div>
                    </div>
                    <div>
                        <Image src="/img/xiaomi.jpg" width={200} height={200} />
                    </div>
                </li>                     
            </ul>
        </div>
    </div>
  )
}

export default Terbaru