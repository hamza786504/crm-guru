import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BiChevronDown } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { Us } from "react-flags-select";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showResponsiveBar, setShowResponsiveBar] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

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
      <nav className="header sticky top-0 px-2 z-50 right-0 py-4 flex items-center bg-white shadow-md">
        <div className="max-w-7xl w-full mx-auto">
          <header className="flex items-center justify-between">
            <Link to="/" className="logo min-w-[180px]">
              <img
                src="/images/footer-logo.png"
                className="w-[116px]"
                alt="logo"
              />
            </Link>
            <div
              className={`responsive_bar max-w-[300px] w-11/12 md:max-w-full  flex-1 ${
                showResponsiveBar
                  ? "block fixed top-0 right-0 bg-white h-full shadow-md pt-14 z-50"
                  : "hidden"
              } items-center justify-center md:flex`}
            >
              <div className="menu_bar flex-1 items-center justify-start">
                <ul
                  className={`menu ${
                    showResponsiveBar
                      ? "flex-col items-start"
                      : "items-center space-x-5"
                  } flex  justify-start `}
                >
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      to="#explore-expert"
                      className={` text-dark-black text-lg flex items-center`}
                      onClick={handleClick}
                    >
                      Explore Expert
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="ms-1 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="#about"
                      className={`text-dark-black text-lg flex items-center`}
                    >
                      About{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="ms-1 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="/blog"
                      className={`
                        text-dark-black text-lg`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="px-4 md:px-0 py-3 md:py-0">
                    <Link
                      onClick={handleClick}
                      to="#faq"
                      className={`text-dark-black text-lg`}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cta mt-5 md:mt-0 flex items-start md:items-center flex-col md:flex-row px-4 md:px-0 space-y-4 md:space-y-0">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-dark-black cursor-pointertext-md text-lg me-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <span
                  className={`flex items-center space-x-1 me-5 text-dark-black`}
                >
                  <Us />
                  <span className="text-lg">ID</span>
                </span>
                <button
                  type="button"
                  onClick={handleClick}
                  className={` bg-purple-blue text-white p-3 py-2 rounded-sm md:ms-3`}
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
                className={`text-2xl md:hidden  text-dark-black`}
              />
            </button>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
