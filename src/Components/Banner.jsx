import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Banner() {
  const [selected, setSelected] = useState("GB");

 
  const softwareOptions = ["Zapier", "Premiere Pro", "Photoshop"];

  return (
    <>
      <section className="banner px-2 min-h-[486px] md:max-h-[530px] text-center bg-cover bg-no-repeat bg-center pt-24 pb-20">
        <div className="mx-auto container container-sm">
          <h1 className="text-4xl text-semibold text-white">
            Find the Perfect Expert for Your CRM
          </h1>
          <p className="text-sm mt-3 text-light-purple">
            Since 1989. For millions of users. We transform businesses with
            powerful and adaptable digital solutions
          </p>
          <form
            id="search-form"
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3 md:px-14 my-6"
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

            <div className="flex flex-col md:flex-row items-center flex-1 rounded-md md:bg-white w-full">
              <div className="relative w-full md:w-2/3 md:me-1">
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

              <div className="relative w-full mt-4 md:mt-0 md:w-1/3">
                <select
                  id="floating_outlined"
                  className="block px-2.5 pt-5 pb-3 w-full rounded md:rounded-e border-none h-15 text-sm text-black bg-white border border-gray-300 appearance-none focus:outline-none peer"
                >
                  <option value="">90001</option>
                </select>
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-0 left-1"
                >
                  Zip code
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
          <p className="hidden md:block text-center text-custom-sm text-white my-4">
            Trusted by:
          </p>

          <img
            src="/images/partners.png"
            alt="partners"
            className="hidden md:block w-full"
          />
          <p className="text-center text-custom-sm text-white my-5">
            How it works:
          </p>
          <iframe width="100%" className="max-w-[370px] aspect-[370/197] mx-auto" src="https://www.youtube.com/embed/uLPOl46UygY?si=NGNeNZhpgBUg6aZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>
      </section>
    </>
  );
}

export default Banner;
