import React from "react";
import Nav from "./Nav";
import RightMenu from "./RightMenu";

function Header() {
  return (
    <div className="md:container">
      {/* <nav className="items-center border-b flex justify-between px-2">
        <div className="font-light text-sm">5 Juni 2022</div>
        <div className="">SUARA</div>
        <RightMenu />
      </nav> */}
      <Nav />
      <div>Gambar/Iklan bawah</div>
      <div className="bg-gray-50 group">
        <div className="flex justify-between p-2">
        <div>Category</div>
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeL inejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          </div>
        </div>
        <ul className="space-y-3 p-2 hidden group-hover:block">
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
            <li className="hover:bg-blue-100">Category 1</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
