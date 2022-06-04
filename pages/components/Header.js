import React from "react";
import Nav from "./Nav";
import Category from "./Category";
import Image from 'next/image'

function Header() {
  return (
    <div className="md:container">     
      <Nav />
      <Category />
      <div className="py-2 items-center px-2 md:px-0">
        <Image src="/img/top-image.jpeg" width={970} height={200} />
      </div>
    </div>
  );
}

export default Header;
