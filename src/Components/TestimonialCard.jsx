import React from "react";

function TestimonialCard() {
  return (
    <>
      <div className="testimonial_card p-6 border-gray-300 border bg-white rounded-md">
        “If you care to work with professionals, if you expect them to advise
        you on the optimal solution (ROI), if you are fed up of being surprised
        by system limitations only after its purchase, or simply the box
        solutions are just too expensive for you, meet up with CRMguru
        Freelancers.”
        <hr />
        <div className="flex items-center justify-start mt-3">
            <div className="avatar  rounded-full h-7 w-7 flex items-center justify-center overflow-hidden">
                <img src="/images/profile.png" className="w-full h-full" alt="profile" />
            </div>
            <div className="flex items-start justify-center flex-col ms-4">
                <h5>Shamsa Nakasi</h5>
                <p className="text-gray-black text-xs">CEO, Camp Lender</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
