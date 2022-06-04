import React from "react";
import Link from "next/link"
function BurgerIcon() {
  return (
    <div>
      <div className="border p-2 rounded-full visible md:invisible shadow">
        <a className="flex items-center whitespace-nowrap" data-bs-toggle="collapse" href="#burger_menu" role="button" aria-expanded="false" aria-controls="burger_menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        </a>
      </div>
      <ul className='shadow collapse absolute left-0 px-2 py-4 w-full z-50 mt-4 bg-white' id="burger_menu">
        <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
        <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
        <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
        <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
        <li className='hover:bg-blue-50'><Link href="/"><a className='block py-1'>Peristiwa</a></Link></li>          
    </ul>
  </div>
  );
}

export default BurgerIcon;
