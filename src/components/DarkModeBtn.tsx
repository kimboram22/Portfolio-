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
          src="/icon/Moon.png"
          alt="darkmode_icon"
          className={`w-[35px] h-[35px] ${darkMode ? "hidden" : ""} `}
        />
        <img
          src="/icon/Sun.png"
          alt="lightmode_icon"
          className={`w-[35px] h-[35px]  ${darkMode ? "" : "hidden"} `}
        />
      </button>
    </>
  );
};

export default DarkModeBtn;
