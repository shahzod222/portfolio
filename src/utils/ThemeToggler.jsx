import React from "react";
import { useAppContext } from "./AppContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggler = ({ onClick, size }) => {
  const { isDark } = useAppContext();

  return (
    <span
      onClick={onClick}
      className="cursor-pointer flex justify-center items-center"
    >
      {isDark ? <MdLightMode size={size} /> : <MdDarkMode size={size} />}
    </span>
  );
};

export default ThemeToggler;
