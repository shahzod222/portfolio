import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useAppContext } from "./utils/AppContext";
import CustomParticles from "./utils/CustomParticles";
import Loader from "./utils/Loader";

const App = () => {
  const { isDark, loading } = useAppContext();

  return (
    <>
      {loading && <Loader />}
      <div
        style={{
          background: `${isDark ? "#0a192f" : "#ebebeb"}`,
          color: `${isDark ? "rgb(209 213 219)" : "black"}`,
          opacity: `${loading ? "0" : "100"}`,
        }}
      >
        <CustomParticles />
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default App;
