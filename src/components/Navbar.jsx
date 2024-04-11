import Logo from "../assets/logo1.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useAppContext } from "../utils/AppContext";
import NavbarLink from "../utils/NavbarLink";
import { navbarLinks } from "../data/navbarData";
import ThemeToggler from "../utils/ThemeToggler";
import SideBar from "../utils/SideBar";
import LanguageSwitcher from "../utils/LanguageSwitcher";

const Navbar = () => {
  const { isDark, setIsDark } = useAppContext();
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleTheme = () => {
    localStorage.setItem("isDark", `${!isDark}`);
    setIsDark(!isDark);
  };
  const handleBurgerTheme = () => {
    handleTheme();
    handleClick();
  };

  return (
    <div
      className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4"
      style={{ background: `${isDark ? "#0a192f" : "#ebebeb"}` }}
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </div>

      <div className="flex justify-center items-center">
        <ul className="hidden lg:flex justify-center items-center">
          <li className="px-4">
            <LanguageSwitcher />
          </li>
          <li className="px-4">
            <ThemeToggler onClick={handleTheme} size={30} />
          </li>
          {navbarLinks.map((el) => {
            return <NavbarLink element={el} key={el.id} type="normal" />;
          })}
        </ul>
      </div>

      <div onClick={handleClick} className="lg:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : `z-9 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center`
        }
        style={{ background: `${isDark ? "#0a192f" : "white"}` }}
      >
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <ThemeToggler onClick={handleBurgerTheme} size={45} />
        </li>
        {navbarLinks.map((el) => {
          return (
            <NavbarLink
              element={el}
              key={el.id}
              type="burger"
              handleClick={handleClick}
            />
          );
        })}
      </ul>

      <SideBar />
    </div>
  );
};

export default Navbar;
