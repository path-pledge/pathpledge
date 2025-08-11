import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/10.png";

const PhasesInPhone = () => {
  const phases = [
    {
      label: "Phase 1:",
      title: "The Fundamentals",
      items: [
        "Stock Market Basics.",
        "Fundamental Analysis.",
        "Investment Strategies.",
        "Traditional Price Action.",
      ],
    },
    {
      label: "Phase 2:",
      title: "Advanced Techniques",
      items: [
        "Options Masterclass.",
        "Roadmap to Profitability.",
        "Institutional Trading Strategies.",
        "Understanding Advanced Inducement and Liquidity.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-3xl md:text-3xl font-extrabold mb-4 text-gray-800 leading-tight">
         Our <span className="text-[#D9070A]">hybrid trading course</span> with lifetime mentorship is designed to take you on a structured learning journey through the stock market, divided into two key phases:
        </h2>
      
        
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
  className="relative h-[500px] w-[300px] bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: `url(${phoneImage})`,
  }}
>
  {/* Perfect fit inside the screen area of phone */}
  <div className="absolute top-[72px] left-[34px] w-[234px] h-[356px] overflow-y-auto px-6 pt-4 pb-3 text-center flex flex-col items-center justify-center gap-3">
  <div className="text-[#D9070A] font-bold text-[20px]">
    {phase.label}
  </div>
  <div className="text-black font-bold text-[16px] leading-snug">
    {phase.title}
  </div>
  <ul className="text-gray-800 font-semibold text-[11px] list-disc list-inside text-left space-y-3 break-words">
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
