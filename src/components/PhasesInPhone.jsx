import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/10.png";

const PhasesInPhone = () => {
  const phases = [
    {
      label: "Phase 1:",
      title: "The Fundamentals",
      items: [
        "Access to Revision Classes",
        "Live Q&A Sessions",
        "Ongoing Online Support",
        "Interactive Assessments",
        "Postclass homework and feedback",
        "Access to Recorded Classes",
      ],
    },
    {
      label: "Phase 2:",
      title: "Advanced Techniques",
      items: [
        "Tutorials for trading strategies",
        "International market basics",
        "Futures & Options trading",
        "Refining trading psychology",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
          A Comprehensive <span className="text-[#D9070A]">Program from</span> Basic To Advanced Level
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Our online trading course, designed to guide you through a structured learning journey of the share market is divided into two phases:
        </p>
      </div>

      {/* Phone Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="relative h-[500px] w-[300px] bg-no-repeat bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${phoneImage})`,
            }}
          >
            <div className="flex flex-col items-center justify-center pt-4 px-3 text-center">
              <div className="text-[#D9070A] font-bold text-2xl sm:text-3xl mb-2">
                {phase.label}
              </div>
              <div className="text-black font-bold text-xl sm:text-2xl h-[100px] w-[190px] pt-2">
                {phase.title}
              </div>
              <ul className="text-gray-800 font-bold text-[10px] list-disc list-inside text-left space-y-1 px-2">
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhasesInPhone;
