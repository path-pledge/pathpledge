import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import promoImg3 from "../assets/t2.jpg";

const DataScienceSection = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section
      className="w-full bg-gray-100 py-16 px-6 text-black"
      aria-labelledby="stock-market-course-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-center md:text-left"
        >
          <h3 className="text-sm font-bold text-[#D9070A] uppercase tracking-wide">
            India&apos;s No. 1 Stock Market Course
          </h3>
          <h2
            id="stock-market-course-heading"
            className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-gray-800 leading-tight"
          >
            Your Trading Success is <br />{" "}
            <span className="text-[#D9070A]">Our Commitment</span>
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
              At <strong>PathPledge Trading Institute</strong>, we don’t just teach-we transform. 
              Our <strong>stock market training program</strong> is 100% results-driven, focused on 
              helping you maximize your income potential with practical strategies. 
              Every student receives <em>personalized attention</em>, hands-on assignments, 
              and real-world trading tests designed to sharpen skills. Whether you&apos;re a 
              beginner or an advanced trader, our <strong>best stock market course in India</strong> 
              {' '} ensures you gain the exact guidance you need to succeed.
            </p>
            <p className="text-lg font-semibold text-[#D9070A]">
              Enroll Now and start your journey to financial freedom!
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleEnrollClick}
                aria-label="Enroll now in India's No.1 Stock Market Course"
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
              loading="lazy"
              alt="Stock Market Course in India - PathPledge Trading Institute offering AI-powered trading education"
              className="w-full max-w-sm sm:max-w-md md:max-w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceSection;
