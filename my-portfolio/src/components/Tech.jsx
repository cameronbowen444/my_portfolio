import React from "react";

import { SectionWrapper } from "../hoc";

import { technologies } from "../constants";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

const ChipLines = ({ index }) => {
  const direction = index % 4;

  const lineClasses = [
    // top line
    {
      wrap: "left-1/2 top-[-28px] h-[38px] w-[2px] -translate-x-1/2",
      line: "h-full w-[2px]",
      dot: {
        left: "50%",
        top: ["100%", "0%"],
        translateX: "-50%",
      },
    },
    // right line
    {
      wrap: "right-[-36px] top-1/2 h-[2px] w-[46px] -translate-y-1/2",
      line: "h-[2px] w-full",
      dot: {
        left: ["0%", "100%"],
        top: "50%",
        translateY: "-50%",
      },
    },
    // bottom line
    {
      wrap: "bottom-[-30px] left-1/2 h-[40px] w-[2px] -translate-x-1/2",
      line: "h-full w-[2px]",
      dot: {
        left: "50%",
        top: ["0%", "100%"],
        translateX: "-50%",
      },
    },
    // left line
    {
      wrap: "left-[-36px] top-1/2 h-[2px] w-[46px] -translate-y-1/2",
      line: "h-[2px] w-full",
      dot: {
        left: ["100%", "0%"],
        top: "50%",
        translateY: "-50%",
      },
    },
  ];

  const selected = lineClasses[direction];

  return (
    <div
      className={`pointer-events-none absolute z-0 ${selected.wrap}`}
      aria-hidden="true"
    >
      <div
        className={`${selected.line} rounded-full bg-[#67e8f9]/20 shadow-[0_0_14px_rgba(103,232,249,0.45)]`}
      />

      <motion.span
        className="absolute h-2 w-2 rounded-full bg-[#67e8f9] shadow-[0_0_16px_rgba(103,232,249,0.95)]"
        animate={{
          left: selected.dot.left,
          top: selected.dot.top,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.7,
          delay: index * 0.12,
          repeat: Infinity,
          repeatDelay: 0.8,
          ease: "easeInOut",
        }}
        style={{
          translateX: selected.dot.translateX,
          translateY: selected.dot.translateY,
        }}
      />
    </div>
  );
};

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.06, 0.6)}
      className="group relative m-3 flex h-32 w-32 items-center justify-center"
    >
      <ChipLines index={index} />

      {/* outer glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[#0ea5e9]/20 blur-xl opacity-60 transition duration-500 group-hover:opacity-100" />

      {/* chip shadow/base */}
      <div className="absolute inset-x-3 bottom-[-10px] h-8 rounded-full bg-[#0b63f6]/25 blur-xl" />

      {/* chip body */}
      <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#67e8f9]/20 bg-[#071426] shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#67e8f9]/55 group-hover:shadow-[0_22px_65px_rgba(14,165,233,0.22)]">
        <div className="absolute inset-[7px] rounded-[18px] border border-white/5" />
        <div className="absolute inset-[13px] rounded-[14px] border border-[#67e8f9]/10" />

        {/* side pins */}
        <div className="absolute left-[-2px] top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
          {Array.from({ length: 7 }).map((_, pinIndex) => (
            <span
              key={`left-${pinIndex}`}
              className="h-[3px] w-4 rounded-full bg-[#67e8f9]/45 shadow-[0_0_8px_rgba(103,232,249,0.6)]"
            />
          ))}
        </div>

        <div className="absolute right-[-2px] top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
          {Array.from({ length: 7 }).map((_, pinIndex) => (
            <span
              key={`right-${pinIndex}`}
              className="h-[3px] w-4 rounded-full bg-[#67e8f9]/45 shadow-[0_0_8px_rgba(103,232,249,0.6)]"
            />
          ))}
        </div>

        <div className="absolute bottom-[-2px] left-1/2 flex -translate-x-1/2 gap-1.5">
          {Array.from({ length: 7 }).map((_, pinIndex) => (
            <span
              key={`bottom-${pinIndex}`}
              className="h-4 w-[3px] rounded-full bg-[#67e8f9]/45 shadow-[0_0_8px_rgba(103,232,249,0.6)]"
            />
          ))}
        </div>

        {/* corner accents */}
        <div className="absolute left-4 top-4 h-[2px] w-8 rounded-full bg-[#67e8f9]/50" />
        <div className="absolute right-4 bottom-4 h-[2px] w-8 rounded-full bg-[#6badf8]/40" />

        {/* inner icon plate */}
        <div className="relative z-10 flex items-center justify-center rounded-2xl border border-white/10 shadow-[inset_0_0_18px_rgba(255,255,255,0.12),0_12px_35px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-105">
          <img
            src={technology.icon}
            alt={technology.name}
            className="p-5 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Top Skills</p>

        <h2 className={styles.sectionHeadText}>Technologies.</h2>

        <p className="my-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
          I have only listed my top skills. If you would like to see all skills,
          please view my resume.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-5 overflow-visible">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");