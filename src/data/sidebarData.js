import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const sidebarLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shahzod-ubaydullaev/",
    color: "#0077b5",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/shahzod222/",
    color: "#171515",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Telegram",
    url: "https://t.me/shahzod_ub",
    color: "#0088CC",
    icon: FaTelegram,
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/ubaydullaev.sh22/",
    color: "#ee2a7b",
    icon: FaInstagram,
  },
  {
    id: 5,
    name: "Resume",
    url: "../assets/resume.pdf",
    color: "#565f69",
    file: "resume.pdf",
    icon: BsFillPersonLinesFill,
  },
];
