import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhoIsThisCourseForQA = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        >
          Who is this <span className="text-[#D9070A]">Course For</span>?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#f8f8f8] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 space-y-6"
        >
          <p className="text-black/90 text-justify text-lg">
            This course is ideal for anyone who wants to learn about trading — whether you're just starting or have some experience. It is designed for:
          </p>

          <ul className="list-disc list-inside text-md text-justify text-black/80 space-y-2">
            <li>Aspiring traders who want to understand how trading works and make smart decisions.</li>
            <li>People interested in the stock market, including Futures and Options trading.</li>
            <li>Professionals aiming to improve their skills with data-based strategies.</li>
            <li>Anyone dreaming of financial freedom through trading mastery.</li>
          </ul>

          <p className="text-black/90 text-lg text-justify mt-6">
            This program equips you with the mindset and skills needed to trade with confidence and build long-term success. You'll learn how to:
          </p>

          <ul className="list-disc list-inside text-justify text-black/80 space-y-2 text-md">
            <li>Master trading psychology and data-backed strategy building.</li>
            <li>Apply practical methods in equity, futures, and options trading.</li>
            <li>Work toward financial independence with structured learning.</li>
          </ul>

          {/* ✅ Enroll Now Button - aligned properly */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4 flex justify-center"
          >
            <button
              onClick={handleEnrollClick}
              className="px-6 py-3 bg-[#D9070A] text-white font-semibold rounded-md hover:bg-gray-900 transition"
            >
              Enroll Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisCourseForQA;
