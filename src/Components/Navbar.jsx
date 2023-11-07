import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi"
import { LuSearch } from "react-icons/lu"
import { Us } from "react-flags-select";

function Navbar() {
  return (
    <>
      <nav className="header px-2 fixed top-0 left-0 right-0 py-4 flex items-center">
        <div className="container container-md mx-auto">
          <header className="flex items-center justify-between">
            <div className="logo min-w-[180px]">
              <img src="/images/crm-logo.png" alt="logo" />
            </div>
            <div className="menu_bar flex-1 items-center justify-start">
              <ul className="menu flex items-center justify-start space-x-4">
                <li>
                    <Link to='/explore-expert' className='text-white text-sm flex items-center'>Explore Expert <BiChevronDown className="ms-1"/></Link>
                </li>
                <li>
                    <Link to='/about'  className='text-white text-sm flex items-center'>About <BiChevronDown className="ms-1"/></Link>
                </li>
                <li>
                    <Link to='/blog' className='text-white text-sm'>BLOG</Link>
                </li>
                <li>
                    <Link to='/faq' className='text-white text-sm'>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="cta flex items-center">
                <button type="button" ><LuSearch className="text-white text-md cursor-pointer me-3" /></button>
                <span className="flex items-center space-x-1 text-white">
                <Us />
                    <span>ID</span>
                </span>
                <button type="button" className="bg-white text-purple-blue py-1 p-2 rounded-sm ms-3">Join or Sign In</button>

            </div>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
