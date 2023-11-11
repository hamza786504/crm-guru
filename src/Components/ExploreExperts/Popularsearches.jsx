import React from "react";

const tags = [
  "Lead Management",
  "Global Project Management",
  "Automation",
  "SalesForce",
  "Hubspot",
  "Sales",
  "Marketing Influencer",
  "SAP for sales",
  "Monday",
  "Leads management with zapier",
];

function Popularsearches() {
  return (
    <>
      <section className="tags mt-1 flex flex-wrap z-30 max-w-[800px]">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-purple mt-2 me-3 text-white px-3 py-1 rounded-full text-sm z-40"
          >
            {tag}
          </span>
        ))}
      </section>
    </>
  );
}

export default Popularsearches;
