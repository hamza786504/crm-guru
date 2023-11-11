import React, { useState } from "react";

const filterButtons = ["All", "Popular", "Small Businesses", "Large Businesses"];

function FilterButtons({ onFilterChange }) {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
    onFilterChange(buttonLabel);
  };

  return (
    <>
      <section className="filterbuttons my-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap space-x-5 items-center justify-center">
            {filterButtons.map((buttonLabel, index) => (
              <button
                key={index}
                className={`${
                  activeButton === buttonLabel
                    ? "text-white bg-purple-blue"
                    : "text-gray-black bg-transparent"
                } p-3 rounded-md`}
                type="button"
                onClick={() => handleButtonClick(buttonLabel)}
              >
                {buttonLabel}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterButtons;
