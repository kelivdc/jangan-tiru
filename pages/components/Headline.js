import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Headline() {
  return (
    <div className="md:w-3/5 relative rounded-md">        
        <div className="relative overflow-hidden bg-no-repeat min-h-max max-h-[450px] rounded-md">
            <Link href="/read/testing">
                <a><Image src="/img/zebra.jpg" layout='responsive' width={6124} height={4816} alt="Gambar Zebra" />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                </a>
            </Link>
        </div>
        <div className="absolute top-0 left-0 p-4 text-white text-xl md:text-2xl font-semibold tracking-wide ">Pilihan</div>
        <div className="absolute bottom-0 left-0 p-4">
            <span className="bg-red-700 text-white rounded px-2 py-1 text-xs font-semibold tracking-wider lowercase">
                Wisata
            </span>
            <Link href="/read/testing">
            <a><h1 className="hover:text-blue-500 mt-4 text-white font-bold text-xl md:text-2xl line-clamp-2">PUBG Mobile 1,5: Ignition Sudah Bisa Diunduh Oleh Pengguna Android dan iOS!</h1></a>
            </Link>
            <div className="text-white text-sm flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>1 hari yang lalu</div>
            </div>
        </div>
    </div>
  )
}

export default Headline