import React from "react";
function ExpertCard(props) {
  const {
    logoSrc,
    title,
    expertsCount,
    onlineExpertsCount,
    skillsCount,
    locationSkillsCount,
  } = props;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="expert_card flex items-start justify-start rounded-md shadow-custom p-4 m-2">
        <div className="mono py-2 me-4 w-7">
          <img src={logoSrc} alt={title} />
        </div>
        <div className="details">
          <h5 className="text-lg font-semibold text-light-black mb-1">
            {title}
          </h5>
          <div className="flex items-center justify-start">
            <div className="experts text-custom-sm md:text-sm text-light-black underline">
              {expertsCount} experts
            </div>
            <div className="online_experts text-custom-green text-custom-sm md:text-sm ms-2">
              (Online {onlineExpertsCount})
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start">
              <div className="experts text-custom-sm md:text-sm text-light-black underline">
                by skills
              </div>
              &nbsp;
              <div className="online_experts text-custom-gray text-custom-sm md:text-sm ms-2">
                {skillsCount} skills
              </div>
            </div>
            <div className="flex items-center justify-start ms-3">
              <div className="experts text-custom-sm md:text-sm text-light-black underline">
                location
              </div>
              &nbsp;
              <div className="online_experts text-custom-gray text-custom-sm md:text-sm ms-2">
                {locationSkillsCount} skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertCard;
