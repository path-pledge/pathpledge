import React from "react";
import { motion } from "framer-motion";

import { GiTakeMyMoney } from "react-icons/gi";
import { MdAppRegistration } from "react-icons/md";
import { SiGofundme } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/contact?scrollToForm=true");
  };

  const cards = [
    {
      icon: <GiTakeMyMoney size={40} className="text-red-500" />,
      title: "Money-Back Guarantee ",
      desc:
        "We're so confident in our mentorship that you'll gain an edge over others; if you don’t find value, we'll refund you.",
    },
    {
      icon: <MdAppRegistration size={40} className="text-red-500" />,
      title: "1-on-1 Mentorship by Active SEBI-Registered Traders ",
      desc:
        "Benefit from exclusive 1-on-1 mentorship delivered by SEBI-registered traders with active market experience-gaining insights from practitioners, not just theoretical instructors.",
    },
    {
      icon: <SiGofundme size={40} className="text-red-500" />,
      title: "	1 Lakh Funding ",
      desc:
        "Your success deserves a head start-get up to ₹1,00,000 in trading funds post-course. Test your skills in the live market without risking your own money.",
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
