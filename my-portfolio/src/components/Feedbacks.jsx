import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}
      className="group relative flex min-h-[310px] w-full max-w-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#080d1f] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#67e8f9]/30 sm:w-[320px]"
    >
      {/* inside blue glow */}
      <div className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[190px] w-[260px] -translate-x-1/2 rounded-full bg-[#1a2f5d]/85 blur-[55px] transition duration-500 group-hover:bg-[#2563eb]/70" />
      <div className="pointer-events-none absolute bottom-[-110px] left-1/2 h-[150px] w-[220px] -translate-x-1/2 rounded-full bg-[#6badf8]/25 blur-[55px] transition duration-500 group-hover:bg-[#67e8f9]/35" />

      <div className="relative z-10">
        <p className="text-[52px] font-black leading-none text-[#67e8f9]/80">
          “
        </p>

        <p className="mt-3 text-[17px] leading-[29px] tracking-wide text-white/90">
          {testimonial}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <div className="min-w-0">
          <p className="truncate text-[16px] font-semibold text-white">
            <span className="text-[#67e8f9]">@</span> {name}
          </p>

          <p className="mt-1 text-[12px] leading-[18px] text-secondary">
            {designation} of {company}
          </p>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-[#6badf8]/25 blur-md transition duration-300 group-hover:bg-[#67e8f9]/40" />
          <img
            src={image}
            alt={`feedback-${name}`}
            className="relative h-11 w-11 rounded-full border border-white/15 object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[24px] bg-[#050816]">
      <div
        className={`${styles.padding} relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1f]`}
      >
        {/* blue background glow */}
        <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[300px] w-[300px] rounded-full bg-[#1a2f5d]/70 blur-[100px]" />
        <div className="pointer-events-none absolute left-[-120px] bottom-[-160px] h-[280px] w-[280px] rounded-full bg-[#6badf8]/15 blur-[100px]" />
        <div className="pointer-events-none absolute right-[20%] bottom-[-180px] h-[240px] w-[240px] rounded-full bg-[#67e8f9]/10 blur-[100px]" />

        <motion.div variants={textVariant()} className="relative z-10">
          <p className={styles.sectionSubText}>What others say</p>

          <h2 className={styles.sectionHeadText}>Testimonials.</h2>

          <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary">
            Feedback from people I have worked with, built for, and collaborated
            with.
          </p>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap justify-center gap-7 pb-14`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");