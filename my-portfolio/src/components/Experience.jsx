import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(8, 13, 31, 0.92)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
        backdropFilter: "blur(16px)",
        padding: "0",
        overflow: "hidden",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(107, 173, 248, 0.45)",
      }}
      date={experience.date}
      dateClassName="text-secondary"
      iconStyle={{
        background: experience.iconBg || "#1a2f5d",
        boxShadow:
          "0 0 0 4px rgba(255,255,255,0.08), 0 0 35px rgba(103,232,249,0.25)",
      }}
      icon={
        experience.icon && (
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        )
      }
    >
      <div className="relative overflow-hidden p-6 sm:p-8">
        {/* subtle card glow */}
        <div className="pointer-events-none absolute right-[-110px] top-[-120px] h-[220px] w-[220px] rounded-full bg-[#67e8f9]/10 blur-[70px]" />
        <div className="pointer-events-none absolute bottom-[-130px] left-[-120px] h-[220px] w-[220px] rounded-full bg-[#1a2f5d]/30 blur-[75px]" />

        <div className="relative z-10">
          <h3 className="text-[21px] font-bold leading-tight text-white sm:text-[25px]">
            {experience.title}
          </h3>

          <p
            className="mt-1 text-[16px] font-semibold text-secondary"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="relative z-10 mt-5 space-y-3">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="flex gap-3 text-[14px] leading-[24px] tracking-wide text-white-100"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My background — what I have built so far
        </p>

        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <motion.p
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        A timeline of my development journey across frontend, backend,
        full-stack projects, programming fundamentals, and real client work.
      </motion.p>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(107, 173, 248, 0.22)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");