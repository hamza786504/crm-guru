import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BiChevronDown } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { Us } from "react-flags-select";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showResponsiveBar, setShowResponsiveBar] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

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

  // Add an event listener to update the screen size state when the window is resized.
  useEffect(() => {
    function handleResize() {
      setIsMediumScreen(window.innerWidth < 768); // Adjust the width threshold as needed for your medium size breakpoint.
    }
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isMediumScreen) {
      setShowResponsiveBar(!showResponsiveBar);
    }
  };

  const toggleResponsiveBar = () => {
    setShowResponsiveBar(!showResponsiveBar);
  };

  return (
    <>
      <nav
        className={`header px-2 z-50 fixed top-0 left-0 right-0 py-4 flex items-center ${
          scrolled ? "bg-white shadow-md" : ""
        }`}
      >
        <div className="max-w-md-block w-full mx-auto">
          <header className="flex items-center justify-between">
            <Link to="/" className="logo min-w-[180px]">
              <img
                src={
                  scrolled ? "/images/footer-logo.png" : "/images/crm-logo.png"
                }
                alt="logo"
              />
            </Link>
            <div
              className={`responsive_bar max-w-[300px] w-11/12 md:max-w-full  flex-1 ${
                showResponsiveBar
                  ? "block fixed top-0 right-0 bg-white h-full shadow-md pt-14"
                  : "hidden"
              } items-center justify-center md:flex`}
            >
              <div className="menu_bar flex-1 items-center justify-start">
                <ul
                  className={`menu ${
                    showResponsiveBar
                      ? "flex-col items-start"
                      : "items-center space-x-4"
                  } flex  justify-start `}
                >
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      to="#explore-expert"
                      className={`${
                        scrolled
                          ? "text-dark-black"
                          : "text-dark-black md:text-white"
                      } text-sm flex items-center`}
                      onClick={handleClick}
                    >
                      Explore Expert <BiChevronDown className="ms-1" />
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="#about"
                      className={`${
                        scrolled
                          ? "text-dark-black"
                          : "text-dark-black md:text-white"
                      } text-sm flex items-center`}
                    >
                      About <BiChevronDown className="ms-1" />
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="/blog"
                      className={`${
                        scrolled
                          ? "text-dark-black"
                          : "text-dark-black md:text-white"
                      } text-sm`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="#faq"
                      className={`${
                        scrolled
                          ? "text-dark-black"
                          : "text-dark-black md:text-white"
                      } text-sm`}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cta mt-5 md:mt-0 flex items-start md:items-center flex-col md:flex-row px-4 md:px-0 space-y-4 md:space-y-0">
                <button type="button">
                  <LuSearch
                    className={`${
                      scrolled
                        ? "text-dark-black cursor-pointer"
                        : "text-dark-black md:text-white cursor-pointer"
                    } text-md me-3`}
                  />
                </button>
                <span
                  className={`flex items-center space-x-1 ${
                    scrolled
                      ? "text-dark-black"
                      : "text-dark-black md:text-white"
                  }`}
                >
                  <Us />
                  <span>ID</span>
                </span>
                <button
                  type="button"
                  onClick={handleClick}
                  className={`${
                    scrolled
                      ? "bg-custom-gray text-white"
                      : "bg-custom-gray text-white md:text-purple-blue md:bg-white"
                  }  text-purple-blue  p-3 py-2 rounded-sm md:ms-3`}
                >
                  Join or Sign In
                </button>
              </div>
              <button
                className="absolute top-8 right-10 block md:hidden  text-dark-black cursor-pointer"
                type="button"
                onClick={() => {
                  setShowResponsiveBar(!showResponsiveBar);
                }}
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            <button
              type="button"
              className="hamburger"
              onClick={toggleResponsiveBar}
            >
              <AiOutlineMenu
                className={`text-2xl md:hidden ${
                  scrolled ? " text-dark-black" : "text-white"
                } `}
              />
            </button>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
