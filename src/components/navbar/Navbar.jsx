import React from "react";
import { navlist } from "./navbarList.js";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full px-3 sm:px-5 md:px-36 flex items-center justify-between h-20 shadow-lg bg-gray-200 z-20"
      id="home"
    >
      <h1 className="font-semibold text-xl text-gray-600 cursor-pointer">
        Olamilekan.
      </h1>
      <ul className="hidden md:flex md:gap-6">
        {navlist.map((list, index) => (
          <li
            key={index}
            className="font-semibold text-md hover:text-blue-600 transition-all cursor-pointer text-gray-600"
          >
            <a href={list.url}>{list.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
