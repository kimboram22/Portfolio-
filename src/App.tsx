import React, { useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./recoil/darkMode";

const App: React.FC = () => {
  const darkMode = useRecoilValue(darkModeState);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    return () => {
      document.body.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
