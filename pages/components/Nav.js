import React from "react";
import BurgerIcon from "./BurgerIcon";
import Search from "./Search";

function Nav() {       
  return (
    <>
    <nav className="bg-gray-50 flex items-center justify-between p-4">
      <div>
        <BurgerIcon />
      </div>
      <div>
        <Search />
      </div>
    </nav>
    </>
  );
}

export default Nav;
