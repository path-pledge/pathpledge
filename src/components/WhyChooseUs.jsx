import React from 'react';
import { BookOpen, BarChart2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pathpledgeLogo from '../assets/m1.png';

const PathPledgeIntro = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-6 lg:px-10 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-justify lg:text-left"
        >
          <p className="text-sm uppercase font-bold text-[#D9070A] tracking-widest mb-3">
            About PathPledge
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-5">
            Master Trading with <span className="text-[#D9070A]">PathPledge</span>
          </h2>

          <p className="text-black text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
            PathPledge is a premier trading learning platform designed to educate and empower aspiring traders. We simplify the complexities of the market and help you build a strong foundation for a successful trading journey.
          </p>

          {/* Mobile Image */}
          <div className="lg:hidden relative mb-6 flex justify-center">
            <motion.svg
              className="absolute w-[200px] h-[150px] z-0 opacity-40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ x: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
              }}
            >
              <defs>
                <pattern id="rectDotsMobile" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#D9070A" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#rectDotsMobile)" />
            </motion.svg>

            <img
              src={pathpledgeLogo}
              alt="PathPledge Visual"
              className="relative z-10 w-72 sm:w-80 rounded-xl shadow-lg"
            />
          </div>

          {/* Features */}
          <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-center text-lg space-x-3">
              <BookOpen className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">Comprehensive Trading Lessons</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">Flexible Learning Hours</span>
            </li>
            <li className="flex items-center space-x-3">
              <BarChart2 className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">Proven Strategies for Growth</span>
            </li>
          </ul>

          {/* Enroll Now Button */}
          <button
            onClick={handleEnroll}
            className="mt-8 px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] hover:bg-black transition-all shadow-md"
          >
            Enroll Now
          </button>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-1 relative justify-center"
        >
          <motion.svg
            className="absolute w-[300px] h-[220px] z-0 opacity-40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ x: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }}
          >
            <defs>
              <pattern id="rectDotsDesktop" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.2" fill="#D9070A" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#rectDotsDesktop)" />
          </motion.svg>

          <img
            src={pathpledgeLogo}
            alt="PathPledge Visual"
            className="relative z-10 w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PathPledgeIntro;
