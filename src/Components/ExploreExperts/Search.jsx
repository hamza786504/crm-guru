import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Popularsearches from "./Popularsearches";

function Search() {
  const [selected, setSelected] = useState("GB");
  const softwareOptions = ["Zapier", "Premiere Pro", "Photoshop"];
  const [zipcode, setZipcode] = useState("");

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };
  return (
    <>
      <section className="bg-purple-blue lg:from-purple-blue lg:from-50% lg:to-blue lg:bg-gradient-to-r">
        <div className="max-w-7xl mx-auto text-center lg:text-start">
          <div className="py-10 px-2 xl:px-0 relative">
            <img
              src="/images/graph-incline.png"
              className="absolute bottom-0 z-10 hidden lg:block right-0 xl:w-[500px]"
              alt="graph"
            />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white">
              Explore Expert
            </h1>

            <form
              id="search-form"
              className="flex flex-col md:flex-row items-center justify-start z-30 space-y-4 md:space-y-0 md:space-x-3 max-w-auto lg:max-w-[50vw] xl:max-w-[40vw] my-6 lg:ms-0 mx-auto"
            >
              <div className="relative w-full md:w-auto">
                <select
                  id="floating_outlined"
                  className="block w-full px-2.5 pb-2.5 pt-6 h-15 text-sm text-black bg-white border border-gray-300 appearance-none focus:outline-none peer rounded-md md:min-w-[200px]"
                >
                  {softwareOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-0 left-1"
                >
                  Software
                </label>
              </div>

              <div className="flex flex-col md:flex-row items-center rounded-md md:bg-white w-full md:min-w-[300px]">
                <div className="relative w-full md:me-1">
                  <ReactFlagsSelect
                    selected={selected}
                    className="bg-white pt-4 border-none menu-flags px-0 rounded md:rounded-s h-full pb-2"
                    onSelect={(code) => setSelected(code)}
                  />

                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-0 left-0"
                  >
                    Your location
                  </label>
                </div>
              </div>
              <button
                name="button"
                className="px-5 font-normal py-3 bg-white text-purple-blue rounded text-lg
                 flex items-center justify-center"
              >
                Search
              </button>
            </form>

            <p className="text-white flex items-center mb-0 text-md space-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <span>Popular Search</span>
            </p>
            <Popularsearches />
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
