import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import promoImg3 from "../assets/t1.png";

const DataScienceSection = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="w-full bg-gray-100 py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-[#D9070A] uppercase tracking-wide">
            India's No. 1 Stock Market Course
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Trading With <span className="text-[#D9070A]">Data Science</span>
          </h2>
        </motion.div>

        {/* Mobile layout: Stack | Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-12">
          {/* 📸 Image - show first in mobile, second in desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={promoImg3}
              alt="AI-powered stock market course"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </motion.div>

          {/* 📄 Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-5"
          >
            <p className="text-black text-xl text-justify leading-relaxed">
              The Trading With Data Science Program aims to help you learn and apply the knowledge and skills of a professional trader, with the potential for profitable outcomes. It encompasses numerous strategies and price action techniques suitable for various financial markets and trading styles, including Indian stocks, futures & options, the foreign exchange market, and commodities, covering intraday and swing trading.
            </p>
            <p className="text-lg font-semibold text-[#D9070A]">
              Enroll Now by just paying ₹3000
            </p>
            <button onClick={handleEnrollClick}
            className="px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] hover:bg-gray-900 transition duration-300 shadow-lg">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceSection;
