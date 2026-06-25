import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AvatarCanvas } from "./canvas";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-[-140px] top-[120px] h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-160px] top-[80px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />

      <div
        className={`absolute inset-0 top-[130px] z-[1] mx-auto flex max-w-7xl flex-row items-start gap-5 ${styles.paddingX}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          {/* Small intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-5 hidden sm:flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(56,189,248,0.12)] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            Full-Stack Software Developer
          </motion.div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m
            <span className="relative block w-fit text-[#5aa2f6] [text-shadow:_2px_2px_0_#2563eb,_4px_4px_0_#1e3a8a,_6px_6px_0_#0f172a,_0_0_28px_rgba(103,232,249,0.45)]">
              Cameron
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 max-w-2xl text-white-100`}>
            I build clean, scalable full-stack applications with modern web technologies, focusing on practical software that is reliable, user-friendly, and business-ready.
          </p>

          

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/files/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="group relative flex w-fit items-center overflow-hidden rounded-xl border border-cyan-300/30 bg-gradient-to-r from-blue-700 to-cyan-700 px-6 py-4 font-semibold text-white shadow-[0_18px_50px_rgba(14,165,233,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(14,165,233,0.35)]"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[100%]" />
              <AiOutlineDownload size={24} className="mr-2" />
              Resume
            </a>

            <HashLink
              smooth
              to="#contact"
              className="group flex w-fit items-center rounded-xl border border-white/15 bg-white/[0.07] px-6 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.12]"
            >
              <BsFillPersonLinesFill size={20} className="mr-2 text-cyan-200" />
              Contact
              <span className="duration-300 group-hover:translate-x-1">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </HashLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
        className="absolute inset-0 top-[-10px] z-[0] h-screen sm:left-[120px] md:left-[380px]"
      >
        <AvatarCanvas />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-[2] flex w-full items-center justify-center xs:bottom-10">
        <a href="#about" aria-label="Scroll to about section" className="group">
          <div className="relative flex h-[68px] w-[38px] items-start justify-center rounded-full p-[2px] bg-gradient-to-b from-[#67e8f9]/70 via-[#6badf8]/35 to-white/10 shadow-[0_0_30px_rgba(103,232,249,0.22)] transition duration-300 group-hover:shadow-[0_0_45px_rgba(103,232,249,0.38)]">
            <div className="relative flex h-full w-full items-start justify-center rounded-full bg-[#050816] p-2">
              {/* inner faint glow */}
              <div className="absolute inset-[5px] rounded-full border border-white/10" />

              {/* moving pill */}
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  height: [12, 18, 12],
                  opacity: [1, 0.55, 1],
                }}
                transition={{
                  duration: 1.55,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative z-10 h-3 w-2.5 rounded-full bg-gradient-to-b from-white to-[#67e8f9] shadow-[0_0_18px_rgba(103,232,249,0.95)]"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
