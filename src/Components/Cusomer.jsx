import React from "react";
import TestimonialCard from "./TestimonialCard";

function Cusomer() {
  return (
    <>
      <section className="bg-light-gray pt-24 pb-20 mb-24">
        <h3 className="text-center text-light-black text-2xl font-semibold">
          Our Customer Say
        </h3>
        <div className="container mx-auto testimonials flex items-start space-x-3 mt-10">
            <TestimonialCard />
        </div>
      </section>
    </>
  );
}

export default Cusomer;
