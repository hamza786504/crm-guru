import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function Faq(): JSX.Element {
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
      title: "What is CRMguru? ",
      content: "This is the first item's accordion body. Lorem ipsum...",
    },
    {
      id: "element2",
      title: "Will the freelancer be committed to my business’s NDA?",
      content: "This is the second item's accordion body. Lorem ipsum...",
    },
    {
      id: "element3",
      title: "What does the certification process include",
      content: "This is the third item's accordion body. Lorem ipsum...",
    },
    {
      id: "element4",
      title: "How does CRMguru protect us in the process",
      content: "This is the third item's accordion body. Lorem ipsum...",
    },
    {
        id: "element5",
        title: "How are projects priced on CRMguru",
        content: "This is the third item's accordion body. Lorem ipsum...",
      },
      {
        id: "element6",
        title: "Just how lorem",
        content: "This is the third item's accordion body. Lorem ipsum...",
      },
      {
        id: "element7",
        title: "lorem ipsum dolor sit amet",
        content: "This is the third item's accordion body. Lorem ipsum...",
      },
  ];

  return (
    <section className="faq px-2 pt-24 pb-20">
      <h2 className="text-light-black text-center text-2xl font-semibold mb-7">
        Frequently Asked Questions
      </h2>
      <div className="max-w-sm-block mx-auto overflow-hidden">
        <div id="accordionExample">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-300"
            >
              <h2 className="mb-0">
                <button
                  className={`${
                    activeElement === item.id &&
                    `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  } group relative flex w-full items-center rounded-none border-0 bg-white px-0 py-4 text-left text-sm md:text-base text-dark-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:white dark:text-dark-balck`}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  aria-expanded="true"
                  aria-controls={item.id}
                >
                  {item.title}
                  <span
                    className={`${
                      activeElement === item.id
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
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
                <div className="px-5 py-4 bg-white text-sm">{item.content}</div>
              </TECollapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
