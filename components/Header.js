import React from "react";
import Nav from "./Nav";
import Category from "./Category";
import Image from 'next/image'

function Header() {
  return (
    <div>     
      <Nav />
      <Category />
      <div className="py-4 items-center px-2 md:px-0">
        <Image src="/img/top-image.jpeg" width={970} height={200} alt="Banner" />
      </div>
    </div>
  );
}

export default Header;
