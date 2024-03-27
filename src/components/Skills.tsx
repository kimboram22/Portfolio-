import React from "react";
import { Title } from "./Common";

const Skills: React.FC = () => {
  const skill = [
    [
      "React",
      "Typescript",
      "JavaScript",
      "Tailwind",
      "CSS3",
      "HTML5",
      "Github",
      "Figma",
    ],
    ["Nodejs", "Express", "Mysql", "sequelize", "Solidity", "web3.js"],
  ];
  return (
    <div className="w-full bg-mainColor py-10 dark:text-black dark:bg-[#88B899]">
      <div className="w-2/3 mx-auto flex flex-col gap-3 pb-3 tablet:w-5/6">
        <Title>Skills.</Title>
        {skill.map((v) => (
          <div
            key={v.toString()}
            className="flex flex-row gap-8 py-1 flex-wrap"
          >
            {v.map((skillName) => (
              <div key={skillName} className="flex flex-col items-center gap-3">
                <img
                  src={`/skills/${skillName}.svg`}
                  alt={skillName}
                  className="w-[35px] h-[35px] "
                />

                <span className="text-sm">{skillName}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
