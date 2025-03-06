import React from "react";
import { useAppContext } from "./AppContext";

const WorkCard = ({ item }) => {
  const { isDark } = useAppContext();
  return (
    <a href={item.live} target="_blank">
      <div
        className={`group container rounded-md
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
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
