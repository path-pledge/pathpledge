import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderCTA = () => {
  return (
    <section className="sticky top-0 z-[60] bg-white shadow-sm">
      <div className="w-full px-4 md:px-10 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 whitespace-nowrap">
          
          {/* Phone Numbers */}
          <div className="flex gap-3">
            <motion.a
              href="tel:+918827240770"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D9070A] text-white font-semibold text-sm shadow-md transition-all"
            >
              <FiPhone className="text-lg" />
              +91 88272 40770
            </motion.a>

            <motion.a
              href="tel:+919340210770"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D9070A] text-white font-semibold text-sm shadow-md transition-all"
            >
              <FiPhone className="text-lg" />
              +91 93402 10770
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#D9070A] text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tradingwithpathpledge/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/pathpledge/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCTA;
