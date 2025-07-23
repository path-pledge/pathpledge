import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/C1111.jpg";

const WhoIsThisCourseForQA = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 md:px-10 overflow-hidden text-white">
      {/* 🌄 Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  brightness-85"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* 🔥 Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* ✨ Glass Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-center mb-8"
        >
          Who is this <span className="text-[#FF4C4C]">Course For</span>?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 text-left"
        >
          <p>
            This course is ideal for anyone who wants to learn about trading — whether you're just starting or have some experience. It is designed for:
          </p>

          <ul className="list-disc list-inside pl-5">
            <li>Aspiring traders who want to understand how trading works and make smart decisions.</li>
            <li>People interested in the stock market, including Futures and Options  trading  as involves.</li>
            <li>Professionals aiming to improve their skills with data-basedand anlytical in  strategies.</li>
            <li>Anyone dreaming of financial freedom through trading mastery the behavior and  solution.</li>
          </ul>

          <p>
            This program equips you with the mindset and skills needed to trade with confidence and build long-term success. You'll learn how to:
          </p>

          <ul className="list-disc list-inside pl-5">
            <li>Master trading psychology and data-backed strategy building.</li>
            <li>Apply practical methods in equity, futures, and options trading.</li>
            <li>Work toward financial independence with structured learning.</li>
          </ul>

          <div className="pt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnrollClick}
              className="px-6 py-3 bg-[#FF4C4C] text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
            >
              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisCourseForQA;
