import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import { cn } from "../utils/cn";

const Header: React.FC = () => {
  return (
    <div
      className={cn(
        "bg-mainColor w-full py-10 flex justify-between",
        "dark:text-black dark:bg-[#88B899]"
      )}
    >
      <div
        className={cn(
          "w-2/3 flex flex-row justify-between mx-auto",
          "tablet:w-5/6",
          "mobile:w-full mobile:px-5"
        )}
      >
        <div className="text-lg font-semibold">
          프론트엔드 지원자 김보람 입니다!
        </div>
        <DarkModeBtn />
      </div>
    </div>
  );
};

export default Header;
