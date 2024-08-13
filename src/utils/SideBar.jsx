import React from "react";
import { sidebarLinks } from "../data/sidebarData";

const SideBar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {sidebarLinks.map((el) => {
          return (
            <li
              key={el.id}
              className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 cursor-pointer"
              style={{ background: el.color }}
            >
              {el.file && (
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={el.url}
                  download={el.file}
                  target="_blank"
                >
                  {el.name} {<el.icon size={30} />}
                </a>
              )}
              {!el.file && (
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={el.url}
                  target="_blank"
                >
                  {el.name} {<el.icon size={30} />}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
