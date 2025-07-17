import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/918827240770"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white rounded-full px-5 py-3 shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <span className="font-bold text-base md:text-lg">Chat with Us</span>
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
