import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { Us } from "react-flags-select";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`header px-2 z-10 fixed top-0 left-0 right-0 py-4 flex items-center ${
          scrolled ? "bg-white shadow-md" : ""
        }`}
      >
        <div className="max-w-md-block w-full mx-auto">
          <header className="flex items-center justify-between">
            <div className="logo min-w-[180px]">
              <img
                src={
                  scrolled ? "/images/footer-logo.png" : "/images/crm-logo.png"
                }
                alt="logo"
              />
            </div>
            <div className="responsive_bar flex-1 hidden items-center justify-center md:flex">
              <div className="menu_bar flex-1 items-center justify-start">
                <ul className="menu flex items-center justify-start space-x-4">
                  <li>
                    <Link
                      to="/explore-expert"
                      className={`${
                        scrolled ? "text-dark-black" : "text-white"
                      } text-sm flex items-center`}
                    >
                      Explore Expert <BiChevronDown className="ms-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`${
                        scrolled ? "text-dark-black" : "text-white"
                      } text-sm flex items-center`}
                    >
                      About <BiChevronDown className="ms-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className={`${
                        scrolled ? "text-dark-black" : "text-white"
                      } text-sm`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className={`${
                        scrolled ? "text-dark-black" : "text-white"
                      } text-sm`}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cta flex items-center">
                <button type="button">
                  <LuSearch
                    className={`${
                      scrolled
                        ? "text-dark-black cursor-pointer"
                        : "text-white cursor-pointer"
                    } text-md me-3`}
                  />
                </button>
                <span
                  className={`flex items-center space-x-1 ${
                    scrolled ? "text-dark-black" : "text-white"
                  }`}
                >
                  <Us />
                  <span>ID</span>
                </span>
                <button
                  type="button"
                  className={`${
                    scrolled ? "bg-custom-gray text-white p-3 py-2" : "bg-white"
                  } text-purple-blue py-1 p-2 rounded-sm ms-3`}
                >
                  Join or Sign In
                </button>
              </div>
            </div>
            <button type="button" className="hamburger">
              <AiOutlineMenu className="text-xl md:hidden text-white" />
            </button>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
