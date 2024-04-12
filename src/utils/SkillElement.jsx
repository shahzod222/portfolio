import React from "react";
import { useAppContext } from "./AppContext";
import { Tilt } from "react-tilt";

const SkillElement = ({ name, img }) => {
  const { isDark } = useAppContext();
  return (
    <Tilt>
      <div
        className={`shadow-md duration-500 rounded`}
        style={{
          boxShadow: `0 5px 7px -1px ${!isDark ? "#828282" : "#000102"}`,
        }}
      >
        <img className="w-20 mx-auto" src={img} alt="HTML icon" />
        <p className="my-4">{name}</p>
      </div>
    </Tilt>
  );
};

export default SkillElement;
