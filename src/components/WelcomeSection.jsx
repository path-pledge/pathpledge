import React from "react";
import img1 from "../assets/w111.png";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-12">

        {/* ✅ TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-center md:text-left space-y-4"
        >
          <p className="text-sm font-bold text-[#D9070A] uppercase tracking-wide">
            Trade with Confidence
          </p>

          {/* ✅ H1 Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
            Welcome to <span className="text-[#D9070A]">Path-Pledge</span> Academy
          </h1>

          {/* 📱 Image below H1 on mobile only */}
          <div className="block md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-[280px] sm:w-[320px]  overflow-hidden shadow-xl   mt-4 mb-4">
                <img
                  src={img1}
                  alt="PathPledge"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ✅ Paragraphs */}
          <p className="text-lg text-justify leading-relaxed">
            PathPledge Academy is India’s next-gen stock market training hub built to empower by individuals with AI-driven in the learning, data-backed strategies, on and real-time marktet  market insights. Our platform bridges in  theory with live execution. We are offer mentorship, simulations, and real case studies to prepare you for real-world trading.
          </p>
          <p className="text-lg text-justify leading-relaxed">
            Our mission is to democratize financial education and shape in disciplined, patient, and skilled traders across India or beyond. We the Indian People.
          </p>
        </motion.div>

        {/* 💻 Image Right Side on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="w-[400px] lg:w-[480px] rounded-[2rem] overflow-hidden shadow-xl ">
            <img
              src={img1}
              alt="PathPledge"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
