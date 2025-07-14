import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/8.jpg";

const TradingWithDataScience = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white flex items-center min-h-[85vh] md:h-[90vh]  md:mt-14 ">
      
      {/* ✅ Image - background on small, right side on md+ */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={heroImage}
        alt="Trading Course"
        className="absolute top-0 left-0 w-full h-full object-cover md:object-right md:w-1/2 md:left-auto md:right-0 md:z-1"
        loading="lazy"
      />

      {/* ✅ Overlay: solid black for mobile, gradient for desktop */}
      <div className="absolute inset-0 bg-black/80 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent" />

      {/* ✅ Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full px-4 sm:px-6 md:px-16 py-10 md:py-0 max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6"
        >
          FAST-TRACK YOUR TRADING WITH HIGH IMPACT LEARNING IN JUST 3 MONTHS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/90 text-sm sm:text-base md:text-lg mb-6"
        >
          Learn technical + data-driven strategies with expert mentors, real charts, and AI insights all in one program.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="#courses"
          className="inline-block px-6 py-3 rounded-md font-semibold text-white bg-[#D9070A] hover:bg-gray-900 transition duration-300 shadow-lg"
        >
          Explore Course
        </motion.a>
      </motion.div>
    </section>
  );
};

export default TradingWithDataScience;
