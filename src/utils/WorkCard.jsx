import React from "react";
import { FaCode } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import CustomButton from "../utils/CustomButton";
import { useAppContext } from "./AppContext";

const WorkCard = ({ item }) => {
  const { isDark } = useAppContext();
  return (
    <div
      className={`hover:scale-105 group container rounded-md
              flex justify-center text-center items-center mx-auto content-div duration-500`}
      style={{
        boxShadow: `0 5px 7px -2px ${isDark ? "#828282" : "#000102"}`,
      }}
    >
      <span
        className="w-full h-full group-hover:blur-sm duration-200 rounded-md"
        style={{ background: `url(${item.image})` }}
      ></span>
      <div className="absolute z-2 opacity-0 group-hover:opacity-100 duration-500">
        <span className="text-2xl font bold tracking-wider ">
          <div className="bg-white text-gray-700 px-4 py-2">{item.name}</div>
        </span>
        <div className="pt-8 text-center flex justify-center items-center ">
          <a href={item.github} target="_blank" className="mx-2">
            <CustomButton type="fill">
              Code
              <span>
                <FaCode className="ml-3" />
              </span>
            </CustomButton>
          </a>
          <a href={item.live} target="_blank" className="mx-2">
            <CustomButton type="fill">
              Website
              <span>
                <BsBrowserChrome className="ml-3 " />
              </span>
            </CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
