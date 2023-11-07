import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineWatchLater } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import ExpertCard from "./Expertcard";

function Expert() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
  };

  const expertCardDetails = [
    {
      logoSrc: "/images/Zapier.png",
      title: "Zapier",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/monday.png",
      title: "Monday",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/Salesforce.png",
      title: "Salesforce",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/bigin.png",
      title: "Bigin by zoho CRM",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/active.png",
      title: "ActiveCampaign for sales",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/zoho.png",
      title: "Zoho CRM",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/sap-sales.png",
      title: "SAP sales cloud",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/clickup.png",
      title: "Clickup",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/HubSpot.png",
      title: "Hubspot",
      expertsCount: 12,
      onlineExpertsCount: 76,
      skillsCount: 25,
      locationSkillsCount: 23,
    },
    {
      logoSrc: "/images/close.png",
      title: "Clsoe",
      expertsCount: 120,
      onlineExpertsCount: 76,
      skillsCount: 257,
      locationSkillsCount: 23,
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: 1600, // Large screens
      settings: {
        slidesToShow: 5, // Adjust as needed
      },
    },
    {
      breakpoint: 1400, // Large screens
      settings: {
        slidesToShow: 4, // Adjust as needed
      },
    },
    {
      breakpoint: 1200, // Large screens
      settings: {
        slidesToShow: 3, // Adjust as needed
      },
    },
    {
      breakpoint: 1000, // Tablets
      settings: {
        slidesToShow: 2, // Adjust as needed
      },
    },
    {
      breakpoint: 600, // Mobile devices
      settings: {
        slidesToShow: 1, // Adjust as needed
      },
    },
  ];

  return (
    <>
      <section className="px-2 relative pt-36 pb-20">
        <div className="max-w-sm-block mx-auto lg:ms-0 xl:ms-140px 2xl:mx-auto md:px-16">
          <h2 className="text-center text-light-black font-semibold text-xl">
            We provide Expert For Every CRM Software
          </h2>
          <p className="mb-0 text-center text-xs mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
        </div>

        <div className="experts_slider my-16 overflow-x-hidden">
          <Slider {...settings} responsive={responsiveSettings}>
            {expertCardDetails.slice(0,6).map((card, index) => (
              <ExpertCard key={index} {...card} />
            ))}
          </Slider>
          <Slider {...settings2} responsive={responsiveSettings}>
            {expertCardDetails.slice(3, 9).map((card, index) => (
              <ExpertCard key={index} {...card} />
            ))}
          </Slider>
        </div>

        <div className="text-center mx-auto mt-12">
          <button
            type="button"
            className="bg-purple-blue rounded-md p-3 flex items-center mx-auto text-light-white"
          >
            <MdOutlineWatchLater className="me-1 text-xl text-light-white" />
            Explore Expert
            <BiChevronRight className="text-xl text-light-white" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Expert;
