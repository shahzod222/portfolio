import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useState } from "react";

if (!localStorage.getItem("isDark")) {
  localStorage.setItem("isDark", "true");
}

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  return (
    <div
      className={`bg-${isDark ? "[#0a192f]" : "gray-300"} text-${
        !isDark ? "[#0a192f]" : "gray-300"
      }`}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Skills isDark={isDark} />
      <Work isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
