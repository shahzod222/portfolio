import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import GitHub from "../assets/skills/github.png";
import Tailwind from "../assets/skills/tailwind.png";
import TypeScript from "../assets/skills/typescript.png";
import Vite from "../assets/skills/vite.png";
import Jest from "../assets/skills/jest.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Figma from "../assets/skills/figma.png";
import { useAppContext } from "../utils/AppContext";

const Skills = () => {
  const { isDark } = useAppContext();
  return (
    <div
      name="skills"
      className="flex justify-center items-center w-full min-h-screen h-full"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Vite} alt="HTML icon" />
            <p className="my-4">VITE</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Jest} alt="HTML icon" />
            <p className="my-4">JEST</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 rounded`}
            style={{
              boxShadow: `0 5px 7px -1px ${!isDark ? "#b3b3b3" : "#040c16"}`,
            }}
          >
            <img className="w-20 mx-auto" src={Figma} alt="HTML icon" />
            <p className="my-4">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
