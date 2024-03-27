import React from "react";
import { cn } from "../utils/cn";

const Footer: React.FC = () => {
  return (
    <div
      className={cn(
        "bg-mainColor w-full py-10 px-24 flex justify-center",
        "dark:text-black dark:bg-[#88B899]"
      )}
    >
      <div> &copy; 2024. boram</div>
    </div>
  );
};

export default Footer;
