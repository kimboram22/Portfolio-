import React from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "../recoil/darkMode";

const DarkModeBtn: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <button onClick={toggleDarkMode}>
        <img
          src="/icon/darkmode_icon.png"
          alt="darkmode_icon"
          className={`w-[25px] h-[25px] ${darkMode ? "hidden" : ""} `}
        />
        <img
          src="/icon/lightmode_icon.png"
          alt="lightmode_icon"
          className={`w-[28px] h-[28px]  ${darkMode ? "" : "hidden"} `}
        />
      </button>
    </>
  );
};

export default DarkModeBtn;
