import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { TECollapse } from "tw-elements-react";

function Aboutus() {
  const [activeElement, setActiveElement] = useState("");
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  const accordionData = [
    {
      id: "element1",
      title: "Profile and vendor verification",
      content: "This is the first item's accordion body. Lorem ipsum...",
    },
    {
      id: "element2",
      title: "Identity verification",
      content: "This is the second item's accordion body. Lorem ipsum...",
    },
    {
      id: "element3",
      title: "Certification and recruitment",
      content: "This is the third item's accordion body. Lorem ipsum...",
    },
  ];
  return (
    <>
      <section className="about px-2 pt-24 pb-20" id="about">
        <div className="max-w-sm-block mx-auto flex flex-wrap flex-col md:flex-row items-start">
          <div className="why_us bg-light-gray md:justify-start justify-center p-5 md:w-1/2 w-full rounded-md">
            <h3 className="text-light-black text-xl mb-3">Why CRMguru?</h3>

            {accordionData.map((item , index) => (
              <div
              key={item.id}
              className={`rounded-none ${
                index !== accordionData.length - 1 ? 'border-neutral-200 bg-transparent dark:border-neutral-300 dark:bg-neutral-800 border border-l-0 border-r-0 border-t-0' : 'bg-transparent'
              }`}
            >
                <h2 className="mb-0">
                  <button
                    className={`${
                      activeElement === item.id &&
                      `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center rounded-none border-0 bg-light-gray px-0 py-4 text-left text-sm text-dark-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:white dark:text-dark-black`}
                    type="button"
                    onClick={() => handleClick(item.id)}
                    aria-expanded="true"
                    aria-controls={item.id}
                  >
                    <img src="/images/tick.png" className="me-2 h-3 text-md" alt="tick" /> {item.title}
                    <span
                      className={`${
                        activeElement === item.id
                          ? `rotate-[-180deg] -mr-1`
                          : `rotate-0 fill-[#212529] dark:fill-white`
                      } ml-2 h-5 w-3 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === item.id}
                  className="!mt-0 !rounded-b-none !shadow-none"
                >
                  <div className="px-5 py-4 bg-light-gray text-sm">
                    {item.content}
                  </div>
                </TECollapse>
              </div>
            ))}
          </div>
          <div className="image flex md:justify-end justify-center pt-7 md:w-1/2 w-full"><img src="/images/why-crm.png" alt="about" /></div>
        </div>
        <div className="text-center mx-auto mt-12">
          <button
            type="button"
            className=" bg-purple-blue rounded-md p-3 flex items-center mx-auto text-light-white"
          >
            ABOUT US{" "}
            <BiChevronRight className="ms-1 text-2xl text-light-white" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
