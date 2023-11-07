import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    text: "“If you care to work with professionals, if you expect them to advise you on the optimal solution (ROI), if you are fed up of being surprised by system limitations only after its purchase, or simply the box solutions are just too expensive for you, meet up with CRMguru Freelancers.”",
    author: "Shamsa Nakasi",
    position: "",
    avatarSrc: "/images/profile.png",
  },
  {
    text: "“I am very happy with the performed services and the quality of communication delivered by CRMguru Freelancers.”",
    author: "Omobola Ayoola",
    position: "BDM, Joe Etoniru & Associates",
    avatarSrc: "/images/profile2.png",
  },
  {
    text: "“We were very happy with Zapier and Pipedrive integrations SoftwareSupp Freelancer implemented for us, it was a rather complex project that required parsing email data and they did a great job making it work”",
    author: "Tim McKendrick",
    position: "Principal Owner, Suniti Motors",
    avatarSrc: "/images/profile3.png",
  },
  {
    text: "“Basically, I was surprised with the help of freelancers, because our project was pretty unusual and full of unexpected situations. Freelancers tried to to everything they could to help us adapt and deliver the services based on our needs.”",
    author: "Dhruva Sisodia",
    position: "Managing Partner, AKP",
    avatarSrc: "/images/profile4.png",
  },
  {
    text: "“I am very happy with the performed services and the quality of communication delivered by SoftwareSupp Freelancers.”",
    author: "Tim McKendrick",
    position: "Principal Owner, Suniti Motors",
    avatarSrc: "/images/profile5.png",
  },
  {
    text: "“If you care to work with professionals, if you expect them to advise you on the optimal solution (ROI), if you are fed up of being surprised by system limitations only after its purchase, or simply the box solutions are just too expensive for you, meet up with CRMguru Freelancers.”",
    author: "Shamsa Nakasi",
    position: "",
    avatarSrc: "/images/profile.png",
  },
  {
    text: "“I am very happy with the performed services and the quality of communication delivered by CRMguru Freelancers.”",
    author: "Omobola Ayoola",
    position: "BDM, Joe Etoniru & Associates",
    avatarSrc: "/images/profile2.png",
  },
  {
    text: "“We were very happy with Zapier and Pipedrive integrations SoftwareSupp Freelancer implemented for us, it was a rather complex project that required parsing email data and they did a great job making it work”",
    author: "Tim McKendrick",
    position: "Principal Owner, Suniti Motors",
    avatarSrc: "/images/profile3.png",
  },
  {
    text: "“Basically, I was surprised with the help of freelancers, because our project was pretty unusual and full of unexpected situations. Freelancers tried to to everything they could to help us adapt and deliver the services based on our needs.”",
    author: "Dhruva Sisodia",
    position: "Managing Partner, AKP",
    avatarSrc: "/images/profile4.png",
  },
  {
    text: "“I am very happy with the performed services and the quality of communication delivered by SoftwareSupp Freelancers.”",
    author: "Tim McKendrick",
    position: "Principal Owner, Suniti Motors",
    avatarSrc: "/images/profile5.png",
  },
];

function Customer() {
  return (
    <>
      <section className="px-2 bg-light-gray pt-24 pb-20 mb-24">
        <h3 className="text-center text-light-black text-2xl font-semibold">
          Our Customer Say
        </h3>
        <div className="container mx-auto testimonials flex items-start space-x-3 mt-10 overflow-x-hidden">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Customer;
