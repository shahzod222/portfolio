import Logo from "../assets/logo1.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import { useState } from "react";
import { useAppContext } from "../utils/AppContext";

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
      style={{ background: `${isDark ? "#0a192f" : "white"}` }}
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </div>
      <div className="flex justify-center items-center">
        <ul className="hidden md:flex justify-center items-center">
          <li onClick={handleTheme}>
            {isDark ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
          </li>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size="20" /> : <FaTimes size="20" />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : `z-9 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center`
        }
        style={{ background: `${isDark ? "#0a192f" : "white"}` }}
      >
        <li onClick={handleBurgerTheme}>
          {isDark ? <MdLightMode size={45} /> : <MdDarkMode size={45} />}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/shahzod-ubaydullaev/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/shahzod222"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0088CC]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://t.me/shahzod_ub"
              target="_blank"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ee2a7b]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.instagram.com/ubaydullaev.sh22/"
              target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="../assets/resume.pdf"
              download="resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
