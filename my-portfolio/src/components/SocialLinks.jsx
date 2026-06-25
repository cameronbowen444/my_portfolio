import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      href: "https://www.linkedin.com/in/cameronbowen/",
      style: "rounded-tr-xl",
      hoverGlow: "hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]",
      accent: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      label: "Github",
      icon: <FaGithub size={28} />,
      href: "https://github.com/cameronbowen444",
      hoverGlow: "hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]",
      accent: "from-slate-700 to-slate-500",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:cameronbowen555@gmail.com",
      hoverGlow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.28)]",
      accent: "from-cyan-700 to-blue-500",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={28} />,
      href: "/files/resume.pdf",
      style: "rounded-br-xl",
      download: true,
      hoverGlow: "hover:shadow-[0_0_35px_rgba(96,165,250,0.3)]",
      accent: "from-blue-800 to-cyan-700",
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] z-30 hidden flex-col lg:flex xl:top-[35%]">
  <ul className="space-y-2">
    {links.map(
      ({ id, label, icon, href, style, download, hoverGlow, accent }) => (
        <li
          key={id}
          className={`group ml-[-82px] flex h-12 w-36 items-center justify-between overflow-hidden border border-white/10 bg-white/[0.055] px-3 backdrop-blur-xl transition-all duration-300 hover:ml-[-8px] hover:rounded-xl hover:border-cyan-300/30 xl:ml-[-102px] xl:h-14 xl:w-44 xl:px-4 ${hoverGlow} ${
            style || ""
          }`}
        >
          <a
            href={href}
            className="flex h-full w-full items-center justify-between text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
          >
            <span className="text-[13px] font-semibold tracking-wide opacity-90 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 xl:text-[15px]">
              {label}
            </span>

            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-300 group-hover:scale-110 group-hover:rotate-3 xl:h-10 xl:w-10`}
            >
              {icon}
            </span>
          </a>

          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
        </li>
      )
    )}
  </ul>
</div>
  );
};

export default SocialLinks;