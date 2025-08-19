import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GraduationCap, TrendingUp, LineChart, Briefcase, Rocket } from "lucide-react";
import bgImage from "../assets/bear.jpg";

const WhoIsThisCourseForQA = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact?scrollToForm=true");
  };

  const targetAudience = [
    {
      title: "Beginners in Trading",
      icon: <GraduationCap className="w-10 h-10 text-[#FF4C4C]" />,
      desc: "Perfect for beginners who want to learn stock market basics and build a strong foundation with simplified guidance and real-world examples."
    },
    {
      title: "Aspiring Traders",
      icon: <TrendingUp className="w-10 h-10 text-[#FF4C4C]" />,
      desc: "For learners aiming to upgrade their trading skills with Futures & Options strategies, technical analysis, and live market practice."
    },
    {
      title: "Stock Market Enthusiasts",
      icon: <LineChart className="w-10 h-10 text-[#FF4C4C]" />,
      desc: "Those passionate about stock market trading who want to understand market psychology, read charts, and apply data-driven insights."
    },
    {
      title: "Working Professionals",
      icon: <Briefcase className="w-10 h-10 text-[#FF4C4C]" />,
      desc: "Busy professionals who want flexible online trading courses to create secondary income and financial growth alongside their careers."
    },
    {
      title: "Financial Freedom Seekers",
      icon: <Rocket className="w-10 h-10 text-[#FF4C4C]" />,
      desc: "For individuals committed to long-term financial independence by mastering proven trading strategies and disciplined investing."
    }
  ];

  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 text-white overflow-hidden">
      {/* 🌄 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* 📈 Decorative Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FF4C4C"
          fillOpacity="0.3"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,218.7C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192V0H0Z"
        ></path>
      </svg>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Who Will Benefit from This{" "}
          <span className="text-[#FF4C4C]">Stock Market & Trading Program</span>?
        </motion.h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
          Our structured <strong>online trading academy</strong> is designed for learners at every stage -
          whether you’re just starting your trading journey or aiming to scale your career with 
          advanced <strong>data-driven strategies</strong>. This program blends theory, practice, and 
          AI-powered insights to make you market-ready.
        </p>

        {/* 🎯 Target Audience Cards */}
        <div className="space-y-10 relative">
          {targetAudience.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 flex-1">
                <div className="bg-white/10 p-4 rounded-full shadow-lg">
                  {audience.icon}
                </div>
                <h3 className="text-2xl font-bold">{audience.title}</h3>
              </div>

              {/* Description */}
              <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:scale-[1.02] transition">
                <p className="text-white/80 leading-relaxed">{audience.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnrollClick}
            className="px-10 py-4 bg-[#FF4C4C] text-white text-lg font-semibold rounded-md shadow-xl hover:bg-white hover:text-black transition"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisCourseForQA;
