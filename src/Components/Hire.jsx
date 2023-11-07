import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Hire() {
  return (
    <>
      <section className="hire py-24 md:bg-center md:bg-no-repeat md:bg-cover xl:bg-contain bg-purple-blue max-md:bg-none">
        <div className="max-w-sm-block px-2 mx-auto">
          <div className="md:text-start max-w-[350px] mx-auto md:ml-0 text-center">
            <h2 className="text-white text-center md:text-left text-5xl font-semibold leading-snug">
              How to hire a CRM expert?
            </h2>
            <p className="text-light-purple text-center md:text-start text-custom-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button
              type="button"
              className="bg-white text-light-black p-2 px-3 text-xs rounded-sm flex items-center mx-auto md:ml-0"
            >
              <span className="text-light-purple me-3">
                <FaUserAlt />
              </span>
              i’m looking for CRM expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hire;
