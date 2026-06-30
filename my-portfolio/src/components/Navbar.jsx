import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, logo2, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} fixed top-0 z-30 flex w-full items-center border-b border-white/10 bg-primary/80 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => {
              setActive("");
              setToggle(false);
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 transition duration-300 group-hover:opacity-100" />
              <img
                src={logo2}
                alt="logo"
                className="relative h-9 w-9 object-contain"
              />
            </div>

            <div className="leading-none">
              <p className="text-[13px] font-bold tracking-wide text-white xs:text-[15px] whitespace-nowrap">
                Cameron Bowen
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-cyan-200/70 xs:text-[10px] xs:tracking-[0.22em] whitespace-nowrap">
                Full-Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Right Side */}
          <div className="ml-auto hidden items-center gap-6 md:flex">
            {/* Desktop Links */}
            <ul className="flex list-none flex-row items-center gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="relative"
                  onClick={() => setActive(link.title)}
                >
                  <a
                    href={`#${link.id}`}
                    className={`group relative text-[17px] font-medium transition duration-300 ${
                      active === link.title
                        ? "text-white"
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    {link.title}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ${
                        active === link.title
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={() => setActive("Contact")}
              className="group relative hidden items-center overflow-hidden rounded-md border border-cyan-300/25 bg-white/[0.04] px-5 py-2.5 text-[14px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 md:inline-flex"
            >
              {/* color bar comes in from the left */}
              <span className="absolute inset-0 -translate-x-full bg-cyan-300/10 transition duration-300 ease-out group-hover:translate-x-0" />

              {/* text shifts slightly */}
              <span className="relative z-10 transition duration-300 group-hover:translate-x-1 whitespace-nowrap">
                Let&apos;s Talk
              </span>

              {/* arrow pops in on right */}
              <span className="relative z-10 ml-0 w-0 translate-x-3 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="flex flex-1 items-center justify-end md:hidden">
            <button
              type="button"
              onClick={() => setToggle((prev) => !prev)}
              className="relative z-50 rounded-md border border-white/10 bg-white/[0.06] p-2.5 transition hover:bg-white/[0.1]"
              aria-label="Toggle menu"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="h-[24px] w-[24px] object-contain"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-20 overflow-hidden bg-primary md:hidden"
          >
            {/* Background effects */}
            <div className="pointer-events-none absolute left-[-140px] top-[100px] h-[330px] w-[330px] rounded-full bg-blue-500/25 blur-[110px]" />
            <div className="pointer-events-none absolute right-[-160px] bottom-[80px] h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[130px]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
              className={`${styles.paddingX} relative z-10 flex h-full flex-col pt-[115px]`}
            >
              {/* Mobile intro */}
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                  Navigation
                </p>
                <h2 className="mt-3 text-[34px] font-black leading-tight text-white">
                  Explore My
                  <span className="block bg-gradient-to-r from-[#6badf8] via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h2>
              </div>

              {/* Mobile links */}
              <ul className="flex list-none flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.12 + index * 0.06,
                      duration: 0.32,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                      className={`group flex items-center justify-between rounded-2xl border px-5 py-5 transition duration-300 ${
                        active === link.title
                          ? "border-cyan-300/40 bg-cyan-300/10 text-white"
                          : "border-white/10 bg-white/[0.045] text-secondary hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      <span className="text-[24px] font-bold">
                        {link.title}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-200 transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.35, ease: "easeOut" }}
                className="mt-auto pb-10"
              >
                <a
                  href="#contact"
                  onClick={() => {
                    setActive("Contact");
                    setToggle(false);
                  }}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-blue-700 to-cyan-700 px-6 py-5 text-[18px] font-bold text-white shadow-[0_20px_60px_rgba(14,165,233,0.22)]"
                >
                  <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[100%]" />
                  Let&apos;s Talk
                </a>

                <p className="mt-5 text-center text-sm text-white/45">
                  Full-stack developer building modern apps, APIs, and systems.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;