import { projects } from "../data/data.js";
import { FaCode } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { useAppContext } from "../utils/AppContext.jsx";

const Work = () => {
  const { isDark } = useAppContext();
  return (
    <div
      name="work"
      className="flex flex-col justify-center items-center w-full min-h-screen h-full"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="shadow-md shadow-black group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              <img
                className="w-full h-full group-hover:blur-sm duration-200 rounded-md"
                src={item.image}
                style={{ backgroundImage: "cover" }}
              />
              <div className="absolute z-2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-2xl font bold tracking-wider ">
                  <div className="bg-white text-gray-700 px-4 py-2">
                    {item.name}
                  </div>
                </span>
                <div className="pt-8 text-center flex justify-center items-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="text-white group border-2 px-6 py-3 my-4 mx-1 flex items-center bg-pink-600 border-pink-600">
                      Code
                      <span>
                        <FaCode className="ml-3" />
                      </span>
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="text-white group border-2 px-6 py-3 my-4 mx-1 flex items-center bg-pink-600 border-pink-600">
                      Website
                      <span>
                        <BsBrowserChrome className="ml-3 " />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${
          !isDark && "border-black"
        } hover:text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600`}
      >
        <span>
          <a
            href="https://github.com/shahzod222?tab=repositories"
            target="_blank"
          >
            Check out more projects
          </a>
        </span>
      </button>
    </div>
  );
};

export default Work;
