import React, { useState } from "react";
import { skillsData, otherSkills } from "./skillsData";
import { IoIosArrowUp } from "react-icons/io";

const Skills = () => {
  const [showSkillsTwo, setShowSkillsTwo] = useState(false);
  const mainSkills = skillsData.map((skill, index) => (
    <li key={index} className="w-full h-[50px] flex flex-col gap-1">
      <p className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.grade}</span>
      </p>
      <p
        style={{
          width: `${skill.grade}`,
          backgroundColor: `rgb(37, 99, 235)`,
          height: "10px",
        }}
      ></p>
    </li>
  ));
  const additionalSkills = otherSkills.map((skill, index) => (
    <li key={index} className="w-full h-[50px] flex flex-col gap-1">
      <p className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.grade}</span>
      </p>
      <p
        style={{
          width: `${skill.grade}`,
          backgroundColor: `rgb(37, 99, 235)`,
          height: "10px",
        }}
      ></p>
    </li>
  ));

  const handleSkillsShow = () => {
    setShowSkillsTwo(!showSkillsTwo);
  };
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 mb-[150px]"
      id="skills"
    >
      <h2 className="text-center mb-10 text-gray-800 text-3xl font-bold">
        Skills
      </h2>
      <div className="w-full flex flex-col gap-4">
        <div className="w-[100%]">
          <h2 className="w-full flex p-3 items-center justify-between  rounded-lg shadow-lg">
            <span className="text-gray-800 text-xl font-semibold">
              Main Skills
            </span>
            <span className="cursor-pointer">
              <IoIosArrowUp />
            </span>
          </h2>

          <div className="w-full h-auto flex flex-col gap-3 mt-5 shadow-lg p-3">
            {mainSkills}
          </div>
        </div>
        <div className="w-[100%]">
          <h2 className="w-full flex p-3 items-center justify-between  rounded-lg shadow-lg">
            <span className="text-gray-800 text-xl font-semibold">
              Other Skills
            </span>
            <span onClick={handleSkillsShow} className="cursor-pointer">
              <IoIosArrowUp />
            </span>
          </h2>
          {showSkillsTwo && (
            <div className="w-full h-auto flex flex-col gap-3 mt-5 shadow-lg p-3">
              {additionalSkills}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
