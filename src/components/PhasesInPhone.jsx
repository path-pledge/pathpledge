import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/10.png";

const PhasesInPhone = () => {
  const phases = [
    {
      label: "Phase 1:",
      title: "The Fundamentals - Stock Market Basics & Investment Strategies",
      items: [
        { main: "Stock Market Basics." },
        { main: "Fundamental Analysis." },
        { main: "Investment Strategies." },
        { main: "Traditional Price Action." },
      ],
    },
    {
      label: "Phase 2:",
      title: "Advanced Techniques - Options Masterclass & Institutional Trading",
      items: [
        { main: "Options Masterclass." },
        { main: "Roadmap to Profitability." },
        { main: "Institutional Trading", sub: "Strategies." },
        { main: "Understanding Advanced", sub: "Inducement and Liquidity" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-800 leading-tight">
          Our <span className="text-[#D9070A]">Hybrid Stock Market Trading Course</span> with Lifetime Mentorship - A Two-Phase Learning Journey
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Designed for aspiring traders across India, our comprehensive program blends foundational knowledge with advanced techniques, ensuring a complete path to trading success.
        </p>
      </div>

      {/* Phone Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="relative h-[450px] w-[260px] sm:h-[500px] sm:w-[300px] bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${phoneImage})`,
            }}
            role="img"
            aria-label={`Mobile preview of ${phase.label} ${phase.title}`}
          >
            <div className="absolute top-[62px] sm:top-[72px] left-[28px] sm:left-[34px] w-[204px] sm:w-[234px] h-[320px] sm:h-[356px] overflow-y-auto px-4 sm:px-6 pt-4 pb-3 text-center flex flex-col items-center justify-center gap-3">
              
              <div className="text-[#D9070A] font-bold text-base sm:text-lg">
                {phase.label}
              </div>

              <h3 className="text-black font-bold text-sm sm:text-base leading-snug text-center">
                {phase.title}
              </h3>

              <ul className="text-gray-800 font-semibold text-[11px] sm:text-[12px] list-disc list-inside text-left space-y-3 break-words">
                {phase.items.map((item, i) => (
                  <li key={i}>
                    {item.main}
                    {item.sub && (
                      <div className="text-gray-800 font-semibold text-[11px] sm:text-[12px] ml-4">
                        {item.sub}
                      </div>
                    )}
                  </li>
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
