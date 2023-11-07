import React from "react";

function TestimonialCard(props) {
  const { testimonial } = props;

  return (
    <>
      <div className="testimonial_card p-6 border-gray-300 border bg-white rounded-md min-w-[350px]">
        <p className="text-custom-sm md:text-sm">{testimonial.text}</p>
        <br />
        <hr />
        <div className="flex items-center justify-start mt-3">
          <div className="avatar rounded-full h-7 w-7 flex items-center justify-center overflow-hidden">
            <img
              src={testimonial.avatarSrc}
              className="w-full h-full"
              alt="profile"
            />
          </div>
          <div className="flex items-start justify-center flex-col ms-4">
            <h5>{testimonial.author}</h5>
            <p className="text-gray-black text-xs">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
