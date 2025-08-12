import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Video, CheckCircle } from 'lucide-react';
import img from '../assets/ayushphoto.jpg'; // Replace with your speaker image path

const speaker = {
  name: "Ayush Patel",
  title: "SEBI Registered Analyst",
  imageUrl: img, 
};

const PremiumWebinarSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("registration-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-gray-100 font-sans">
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-gray-800 text-white flex flex-col justify-between">
          <div>
            <motion.span
              className="text-sm font-bold text-red-400 uppercase tracking-widest"
              variants={itemVariants}
            >
              Exclusive Masterclass
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 leading-tight"
              variants={itemVariants}
            >
              Join Our <span className="text-red-500">LIVE Trading Webinar</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-gray-300 text-lg"
              variants={itemVariants}
            >
              Learn powerful trading strategies, risk control, and mindset secrets from expert mentors-even if you're just starting!
            </motion.p>
            <motion.div className="mt-8 space-y-4" variants={itemVariants}>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-red-400" />
                <span className="ml-4 text-lg font-semibold">Sunday, 17th Aug | 11:00 AM</span>
              </div>
              <div className="flex items-center">
                <Video className="w-6 h-6 text-red-400" />
                <span className="ml-4 text-lg font-semibold">Live on Zoom</span>
              </div>
            </motion.div>
          </div>

          {/* Animated ₹1 Price Badge */}
          <motion.div
  className="mt-10 flex justify-center"
  initial={{ rotate: 0 }}
  animate={{ rotate: [0, 15, -15, 10, -10, 0], scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
>
  <div className="flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg border border-yellow-500">
    <div className="bg-[#D9070A] text-white rounded-full w-10 h-10 flex items-center justify-center font-extrabold text-xl shadow-inner">
      ₹
    </div>
    <span className="text-lg sm:text-xl font-bold">
      Join Now for Free Demo Class
    </span>
  </div>
</motion.div>

        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800">Meet Your Mentor</h3>
            <div className="flex items-center mt-4">
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-15 h-20 rounded-full shadow-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/128x128/E2E8F0/4A5568?text=Error';
                }}
              />
              <div className="ml-4">
                <p className="font-bold text-lg text-gray-900">{speaker.name}</p>
                <p className="text-gray-600">{speaker.title}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-10" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800">What You'll Master:</h3>
            <ul className="mt-5 space-y-4">
              {[
                "Powerful stock selection techniques.",
                "Effective risk & money management.",
                "The psychology of a successful trader.",
                "Live market analysis & Q&A session.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div className="mt-auto pt-10" variants={itemVariants}>
            <button
              onClick={scrollToForm}
              className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 text-xl"
            >
              Reserve My Seat Now
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Limited Spots Available! Don't Miss Out.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PremiumWebinarSection;
