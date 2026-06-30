import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contact } from "../assets";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus("");

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    formData.append("_subject", "New portfolio contact message");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/cameronbowen555@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Message failed to send");
      }

      setStatus("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:flex-row flex-col-reverse flex justify-between gap-0 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative mx-auto w-[100%] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1f] p-8 shadow-[0_25px_90px_rgba(0,0,0,0.4)]"
      >
        <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[300px] w-[300px] rounded-full bg-[#1a2f5d]/70 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-160px] left-[-130px] h-[280px] w-[280px] rounded-full bg-[#67e8f9]/10 blur-[100px]" />

        <div className="relative z-10">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            {/* NAME */}
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name:</span>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                className={`rounded-xl border bg-[#050816]/80 px-6 py-4 font-medium text-white outline-none transition duration-300 placeholder:text-secondary focus:border-[#67e8f9]/60 ${
                  errors.name
                    ? "border-red-400/60"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </label>

            {errors.name && (
              <p className="-mt-6 text-sm text-red-400">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}

            {/* EMAIL */}
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className={`rounded-xl border bg-[#050816]/80 px-6 py-4 font-medium text-white outline-none transition duration-300 placeholder:text-secondary focus:border-[#67e8f9]/60 ${
                  errors.email
                    ? "border-red-400/60"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </label>

            {errors.email && (
              <p className="-mt-6 text-sm text-red-400">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            {/* MESSAGE */}
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>

              <textarea
                rows="7"
                placeholder="Enter your message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
                className={`resize-none rounded-xl border bg-[#050816]/80 px-6 py-4 font-medium text-white outline-none transition duration-300 placeholder:text-secondary focus:border-[#67e8f9]/60 ${
                  errors.message
                    ? "border-red-400/60"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </label>

            {errors.message && (
              <p className="-mt-6 text-sm text-red-400">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            {status && (
              <p
                className={`text-sm ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-fit overflow-hidden rounded-xl border border-[#67e8f9]/25 bg-gradient-to-r from-[#1a2f5d] to-[#0f7490] px-8 py-3 font-bold text-white shadow-[0_18px_50px_rgba(14,165,233,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#67e8f9]/60 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[100%]" />

              <span className="relative z-10">
                {loading ? "Sending..." : "Send"}
              </span>
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:inline-block relative top-[200px] hidden"
      >
        <img
          src={contact}
          alt="portfolio"
          className="drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");