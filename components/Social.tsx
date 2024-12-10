import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ezhar-karim-70063a258/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Ezharkarim",
  },
  {
    icon: <FaFacebook />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
  {
    icon: <FaTwitch />,
    path: "",
  },
];
const Social = () => {
  return (
    <div className="flex gap-6 ">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className=" w-9 h-9 border border-[#CBACF9] rounded-full flex justify-center items-center text-[#CBACF9] text-base hover:bg-[#111928] hover:text-primary hover:transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
