import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/contact?scrollToForm=true");
  };

  const cards = [
    {
      icon: <FaRobot size={40} className="text-red-500" />,
      title: "Learn From Scratch",
      desc:
        "Learn the basics of the stock market and progress to an in-depth understanding, acquiring the knowledge and skills needed to thrive in stock market trading.",
    },
    {
      icon: <FaChartLine size={40} className="text-red-500" />,
      title: "Revision Classes",
      desc:
        "Over 300+ revision classes to help you cover any topic you miss in your live class. You will never be left behind.",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-red-500" />,
      title: "Live Q/A Session",
      desc:
        "We have live Q&A sessions with Anish Singh Thakur, where students ask their queries directly to him.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
       

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {card.desc}
              </p>
              <button
                onClick={handleStartNow}
                className="text-[#D9070A] font-semibold hover:scale-105 transition-all duration-300 hover:underline"
              >
                Start Now!
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
