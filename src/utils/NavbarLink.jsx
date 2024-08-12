import React from "react";
import { useAppContext } from "./AppContext";
import { Link } from "react-scroll";

const NavbarLink = ({ element, handleClick, type }) => {
  const { t } = useAppContext();
  const isBurger = type === "burger";

  return (
    <Link onClick={handleClick} to={element.to} smooth={true} duration={500}>
      <li
        className={`py-6 text-${isBurger ? "4xl" : "xl"} px-4 cursor-pointer`}
      >
        {t(element.jsonName)}
      </li>
    </Link>
  );
};

export default NavbarLink;
