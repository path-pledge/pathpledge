import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/couse1.jpg";
import { useNavigate } from "react-router-dom";

const TradingWithDataScience = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white flex items-center min-h-[85vh] md:h-[90vh] mt-[80px]">
      
      {/* ✅ Hero Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={heroImage}
        alt="Best Stock Market & Data Science Trading Course in India"
        className="absolute top-0 left-0 w-full h-full object-cover md:object-right md:w-1/2 md:left-auto md:right-0 md:z-1"
        loading="lazy"
      />

      {/* ✅ Overlay: black for mobile, gradient for desktop */}
      <div className="absolute inset-0 bg-black/80 md:bg-gradient-to-r md:from-gray-900 md:via-gray-500/80 md:to-transparent" />

      {/* ✅ Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full px-4 sm:px-6 md:px-16 py-10 md:py-0 max-w-2xl"
      >
        {/* ✅ Optimized H1 for national SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-18 sm:mt-20"
        >
          Best Stock Market & Data Science <span className="text-[#D9070A]">Trading Course in India</span>
        </motion.h1>

        {/* ✅ Keyword optimized sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-100/90 font-bold text-lg sm:text-base md:text-xl mb-10"
        >
          Fast-track your trading journey in just 3 months. Learn{" "}
          <strong>technical analysis</strong>,{" "}
          <strong>data-driven strategies</strong>, and{" "}
          <strong>AI-powered insights</strong> with expert mentors and real market charts.
        </motion.p>

        {/* ✅ CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleStartNow}
          className="inline-block px-6 py-3 rounded-md font-semibold text-white bg-[#D9070A] hover:bg-gray-900 transition duration-300 shadow-lg"
        >
          Explore Course
        </motion.a>
      </motion.div>
    </section>
  );
};

export default TradingWithDataScience;
