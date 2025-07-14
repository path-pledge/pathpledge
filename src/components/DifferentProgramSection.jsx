import React from "react";
import { motion } from "framer-motion";
import programImage from "../assets/11.jpg"; // Replace with actual image path

const DifferentProgramSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-center leading-tight"
        >
          How is This Program{" "}
          <span className="text-[#D9070A]">Different from Others?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/80 mt-4 text-center text-lg max-w-3xl mx-auto"
        >
          The structure and delivery of this program are uniquely designed to
          offer a far more practical, data-driven, and real-world approach to
          learning the art and science of trading.
        </motion.p>

        {/* Content Row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-5 px-2 md:px-6 max-w-xl mx-auto"
          >
            <h3 className="font-extrabold text-2xl md:text-3xl">
              What Sets It Apart?
            </h3>
            <p className="text-white/90 text-justify leading-relaxed text-lg">
              Unlike most traditional trading courses that focus heavily on
              theory or generic content, PathPledge integrates real-time market
              exposure, live mentorship, and performance-based learning. Each
              module is backed by practical assignments, trading psychology
              coaching, and decision-making under live conditions.
            </p>
            <p className="text-white/90 text-justify leading-relaxed text-lg">
              The program includes AI-powered trade analysis tools, in-depth
              training for BSE and NSE markets, and strategy building across
              equity, F&O, intraday, and swing trading. Students receive
              continued guidance through Q&A sessions, community discussions,
              and access to seasoned mentors to help navigate real market
              challenges.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center px-4 md:px-0"
          >
            <img
              src={programImage}
              alt="Program Overview"
              className="rounded-2xl w-full max-w-[500px] shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white/80 mt-16 max-w-5xl mx-auto text-justify text-lg leading-relaxed px-2"
        >
          In short, this program provides a complete trading ecosystem—with a
          structured roadmap, real-time decision training, and professional
          mentorship—designed to transform you into a confident, consistent, and
          well-equipped market participant.
        </motion.p>
      </div>
    </section>
  );
};

export default DifferentProgramSection;
