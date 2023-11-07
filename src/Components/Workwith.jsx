import React from "react";
import { BiChevronRight } from "react-icons/bi";
function Workwith() {
  return (
    <>
      <div className="px-2">
        <div className="container container-sm mx-auto rounded-md overflow-hidden">
          <section className="text-center md:text-left workwith bg-purple md:bg-work bg-center md:bg-url bg-no-repeat bg-cover p-8">
            <h2 className="text-white text-xl mb-0">
              Work with certified experts <br />
              who knows CRM
            </h2>
            <p className="text-dull-purple my-4 text-custom-sm mx-auto md:ml-0 md:mr-auto max-w-[330px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
            <button
              type="button"
              className=" bg-purple-blue rounded-md p-1 mx-auto md:ms-0 me-auto px-3 text-custom-sm flex items-center text-light-white"
            >
              SEE RECRUTIMENT & CERTIFICATION PROCESS
              <BiChevronRight className="ms-1 text-lg text-light-white" />
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Workwith;
