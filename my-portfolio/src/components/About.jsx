import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLock } from "react-icons/fi";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { portfolio } from "../assets";

const skillCards = [
  {
    title: "Frontend",
    subtitle: "React / TypeScript / NextJS / Vanilla",
    icon: FiCode,
    variant: "light",
  },
  {
    title: "Backend",
    subtitle: "C / C++ / Java / Python / Node",
    icon: FiServer,
    variant: "blue",
  },
  {
    title: "Databases",
    subtitle: "SQL / NoSQL / Prisma",
    icon: FiDatabase,
    variant: "dark",
  },
  {
    title: "Security",
    subtitle: "JWT / Bcrypt / REST APIs / Auth",
    icon: FiLock,
    variant: "black",
  },
];

const cardThemes = {
  light: {
    card: "bg-[#f4f7fb] text-[#050816]",
    title: "text-[#050816]",
    subtitle: "text-[#1a2f5d]/75",
    iconWrap: "bg-white/75 border-black/10 text-[#1a2f5d]",
    glow: "bg-[#6badf8]/25",
  },
  blue: {
    card: "bg-[#0b63f6] text-white",
    title: "text-white",
    subtitle: "text-white/75",
    iconWrap: "bg-white/15 border-white/20 text-white",
    glow: "bg-[#67e8f9]/35",
  },
  dark: {
    card: "bg-[#111827] text-white",
    title: "text-white",
    subtitle: "text-[#67e8f9]/75",
    iconWrap: "bg-white/[0.06] border-white/10 text-[#67e8f9]",
    glow: "bg-[#1a2f5d]/80",
  },
  black: {
    card: "bg-[#070b12] text-white",
    title: "text-white",
    subtitle: "text-[#67e8f9]/75",
    iconWrap: "bg-white/[0.06] border-white/10 text-[#67e8f9]",
    glow: "bg-[#1a2f5d]/70",
  },
};

const MiniSkillCard = ({ index, title, subtitle, icon: Icon, variant }) => {
  const theme = cardThemes[variant];

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.08 * index, 0.55)}
      className={`group relative min-h-[88px] overflow-hidden rounded-[18px] p-4 shadow-[0_14px_38px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:-translate-y-1 ${theme.card}`}
    >
      <div
        className={`pointer-events-none absolute bottom-[-55px] right-[-45px] h-[110px] w-[110px] rounded-full blur-[38px] transition-all duration-700 group-hover:scale-125 ${theme.glow}`}
      />

      <div className="relative z-10 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${theme.iconWrap}`}
        >
          <Icon size={21} />
        </div>

        <div className="min-w-0">
          <h3 className={`text-[16px] font-bold leading-tight ${theme.title}`}>
            {title}
          </h3>

          <p className={`mt-1 text-[12px] font-semibold leading-[18px] ${theme.subtitle}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction - Brief Story</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div  className="mt-10 flex flex-col items-center justify-around gap-10 md:flex-row">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="flex justify-center"
        >
          <img
            src={portfolio}
            alt="portfolio"
            className="max-w-[240px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] sm:max-w-[270px]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.15, 1)}
          className="max-w-3xl"
        >
          <p className="mt-4 text-[16px] leading-[30px] text-secondary">
            I’m a full-stack software developer with 5 years of experience building modern web applications. My main frontend tools are React, Next.js, and TypeScript, with backend experience in Java, Python, and C++. I also work with MySQL, PostgreSQL, MongoDB, Prisma, and live deployments, giving me hands-on experience building reliable, production-ready projects.
            <br />
            <br />
            I started coding through Coding Dojo’s three-stack full-stack program, where I worked with Java, Python, JavaScript, and core web development concepts. I continued building my foundation through online programming courses and now study Computer Science at Cal State Northridge as a junior. In my free time, I build real-world projects through freelance work, internships, and personal development.
 
          </p>

          <div className="mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {skillCards.map((service, index) => (
              <MiniSkillCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");