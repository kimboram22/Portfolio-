import React from "react";
import { cn } from "../utils/cn";

interface ProjectProps {
  project: {
    projectName: string;
    img: string;
    date: string;
    info: string;
    info2: string;
    role: string;
    github: string;
    figma: string;
    deploy: string;
    features: string[];
    stack: string[][];
    lessons: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const {
    projectName,
    img,
    date,
    info,
    info2,
    role,
    github,
    figma,
    deploy,
    features,
    stack,
    lessons,
  } = project;

  return (
    <div
      className={cn(
        "flex flex-row gap-10 border-b pb-12 pt-8",
        "tablet:flex-col mobile:flex-col"
      )}
    >
      <div className="flex flex-col gap-7 tablet:justify-center tablet:items-center mobile:justify-center mobile:items-center">
        <div className=" bg-mainColor w-[400px] rounded-xl overflow-hidden tablet:w-[450px] mobile:w-[280px]">
          <img src={img} alt="" className="w-full" />
        </div>
        <div>
          <p>{date}</p>
          <p>{role}</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 w-3/4 mx-auto">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div className=" bg-mainColor rounded-2xl px-5 flex flex-row gap-3 py-2 items-center justify-center dark:text-black dark:bg-[#88B899]">
                Github
                <img src="/icon/github.png" alt="" className="w-[28px] " />
              </div>
            </a>
          )}

          {figma && (
            <a href={figma} target="_blank" rel="noopener noreferrer">
              <div className=" bg-mainColor rounded-2xl px-5 flex flex-row gap-3 py-2 items-center justify-center dark:text-black dark:bg-[#88B899]">
                Figma
                <img src="/icon/figma.png" alt="" className="w-[28px] " />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {deploy ? (
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            <div className="bg-mainColor py-2 text-xl font-semibold px-2 rounded-md dark:text-black dark:bg-[#88B899]">
              {projectName}
            </div>
          </a>
        ) : (
          <div className="bg-mainColor py-2 text-xl font-semibold px-2 rounded-md dark:text-black dark:bg-[#88B899]">
            {projectName}
          </div>
        )}

        <div>
          {info && <p>{info}</p>}
          {info2 && <p>{info2}</p>}
        </div>

        <div className="py-3 border-t">
          <p className="pb-2">⚙️ 기술 스택</p>
          {stack.map((techGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="py-1 flex flex-row flex-wrap gap-1"
            >
              {techGroup.map((tech, index) => (
                <img key={index} src={tech} alt={`Tech Logo ${index}`} />
              ))}
            </div>
          ))}
        </div>

        <div className="py-3 border-t">
          <p className="pb-2">🪄 구현 기능</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <ul className="py-3 border-t">
          {lessons.map((lesson, index) => (
            <li key={index} className="py-1">
              {lesson}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
