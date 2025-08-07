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
    <section className="w-full bg-gray-100 py-16 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-center md:text-left"
        >
          <p className="text-sm font-bold text-[#D9070A] uppercase tracking-wide">
            India's No. 1 Stock Market Course
          </p>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Your Trading Success is <br /> <span className="text-[#D9070A]">Our Commitment</span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6">
          {/* 📄 Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-5 text-center md:text-left"
          >
            <p className="text-gray-950 text-base sm:text-lg md:text-xl leading-relaxed text-justify sm:text-center md:text-justify">
              We don’t just teach-we transform. Our program is 100% results-driven, focused on helping you double your income potential rather than just completing a syllabus. With personalized attention for every trader, we provide tailored assignments, real-world tests, and continuous feedback to sharpen your skills.We go beyond theory, addressing your unique challenges at the grassroots level. Whether you're a beginner or looking to refine advanced strategies, our customized training approach ensures you get the exact guidance you need. Your success isn’t just a goal-it’s our commitment.
            </p>
            <p className="text-lg font-semibold text-[#D9070A]">
              Enroll Now and start your journey to financial freedom!
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleEnrollClick}
                className="px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] hover:bg-gray-900 transition duration-300 shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>

          {/* 📸 Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <img
              src={promoImg3}
              alt="AI-powered stock market course"
              className="w-full max-w-sm sm:max-w-md md:max-w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceSection;
