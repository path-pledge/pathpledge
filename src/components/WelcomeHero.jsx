import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/h111.png";
import bgImg from "../assets/b1.jpg";
import { motion } from "framer-motion";

const WelcomeHero = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-22 md:py-14 lg:py-24 overflow-hidden">
      <img
        src={bgImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 blur-sm scale-110 z-0"
      />

      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl">
        <motion.img
          src={heroImg}
          alt="Trading Dashboard"
          className="w-[95%] sm:w-[80%] md:w-[65%] lg:w-[50%] max-w-3xl object-contain mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4 leading-tight px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Learn to trade in the most simplified way.
        </motion.h1>

        <motion.p
          className="text-md font-bold text-justify sm:text-base md:text-lg text-gray-950 max-w-2xl mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          PathPledge Academy is one of the leading stock market institutes. We offer a comprehensive range of courses designed to help you master the art of trading. 
        </motion.p>

        <motion.button
          onClick={handleEnrollClick}
          className="bg-[#d9070a] text-white px-6 py-3 rounded-md font-medium hover:bg-black transition shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Enroll Now
        </motion.button>
      </div>
    </section>
  );
};

export default WelcomeHero;
