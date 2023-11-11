import React, { useState } from "react";
import Navbar from "../Components/ExploreExperts/Navbar";
import FilterButtons from "../Components/ExploreExperts/FilterButtons";
import ExpertData from "../Api/Expert.json";
import ExpertCard from "../Components/ExploreExperts/Expertcard";
import Search from "../Components/ExploreExperts/Search";

function ExploreExperts() {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredExperts =
    activeFilter === "All"
      ? ExpertData
      : ExpertData.filter((expert) => expert.category === activeFilter);

  return (
    <>
      <Navbar />

      <Search />
      
      <FilterButtons onFilterChange={handleFilterChange} />

      <div className="px-2 md:px-8">
        <div className="flex flex-wrap mb-4 justify-between items-center ">
          <div className="w-1/2 text-sm md:text-lg">
            <span className="font-bold">{filteredExperts.length}</span> Listings
            CRM Expert
          </div>
          <div className="w-1/2 text-end">
            <div className="relative md:w-auto">
              <select
                id="floating_outlined"
                className="px-2.5 py-2.5 h-15 z-10 text-sm md:text-lg text-black bg-white border border-gray-300 focus:outline-none rounded-md"
              >
                <option value="">Large view</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-6">
        <div className="flex flex-wrap mb-20">
          {filteredExperts.map((card, index) => (
            <ExpertCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreExperts;
