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
      icon: <GiTakeMyMoney size={40} className="text-red-500" aria-label="Money-back guarantee for trading course" />,
      title: "Money-Back Guarantee",
      desc:
        "We’re so confident in our mentorship that you'll gain an edge over others. If you don’t find value in our Raipur-based stock market course, we’ll refund you in full.",
    },
    {
      icon: <MdAppRegistration size={40} className="text-red-500" aria-label="One-on-one mentorship by SEBI-registered traders" />,
      title: "1-on-1 Mentorship by Active SEBI-Registered Traders",
      desc:
        "Get exclusive one-on-one mentorship from SEBI-registered traders in Raipur, learning proven stock market strategies directly from market experts.",
    },
    {
      icon: <SiGofundme size={40} className="text-red-500" aria-label="₹1 Lakh trading fund support" />,
      title: "1 Lakh Funding",
      desc:
        "After completing our best trading course in Raipur, get up to ₹1,00,000 in trading funds. Practice in the live market without risking your own money.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* SEO-friendly section heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-12">
          Why Choose PathPledge Academy-Best Trading Courses 
        </h2>

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
                aria-label="Start learning stock market with PathPledge Academy in Raipur"
                className="text-[#D9070A] font-semibold hover:scale-105 transition-all duration-300 hover:underline"
              >
                Start Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
