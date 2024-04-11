import React from "react";
import { Link } from "react-scroll";

const NavbarLink = ({ element, handleClick, type }) => {
  const isBurger = type === "burger";

  return (
    <li className={`py-6 text-${isBurger ? "4xl" : "md"} px-4 cursor-pointer`}>
      <Link onClick={handleClick} to={element.to} smooth={true} duration={500}>
        {element.name}
      </Link>
    </li>
  );
};

export default NavbarLink;
