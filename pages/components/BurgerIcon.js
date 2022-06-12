import React from "react";
import Link from "next/link"
import Search from "./Search";
import Image from "next/image";


function BurgerIcon() {
  return (
    <>
      <div className="block md:hidden bg-[#032a63] mx-auto pt-4 text-center">
        <Link href="/"><a>
        <Image src="/img/logo.svg" width={192} height={20} alt="Logo" />
        </a></Link>
      </div>
      <nav className="
        relative
        items-center
        justify-between
        py-2
        text-gray-500
        bg-[#032a63]
        hover:text-gray-700
        focus:text-gray-700
        navbar navbar-expand-lg navbar-light
      ">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <button className="
          navbar-toggler
          text-gray-500
          border-0
          hover:shadow-none hover:no-underline
          py-2
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          text-white
        " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        <Link href="/">
        <a className="
              flex
              items-center
              text-gray-900
              hover:text-gray-900
              focus:text-gray-900
              mt-2
              lg:mt-0
              mr-1
              pl-2
              hidden
              md:block
            " href="#">
        <Image src="/img/logo.svg" width={192} height={20} alt="Logo" />
        </a></Link>
        <ul className="navbar-nav grid md:flex text-sm mt-4">   
          <li className="nav-item p-2">
            <a className="nav-link font-semibold text-white hover:text-blue-400 focus:text-blue-400 p-0" href="#">About</a>
          </li>    
          <li className="nav-item p-2">
            <a className="nav-link font-semibold text-white hover:text-blue-400 focus:text-blue-400 p-0" href="#">Submit Guest Post</a>
          </li>    
          <li className="nav-item p-2">
            <a className="nav-link font-semibold text-white hover:text-blue-400 focus:text-blue-400 p-0" href="#">Contact</a>
          </li>    
        </ul>
      </div>
      <div className="flex justify-end relative mt-2">
        <Search /> 
      </div>
      </div>
    </nav>
    </>
  );
}

export default BurgerIcon;
