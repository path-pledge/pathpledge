import React from 'react';
import { FileDown } from 'lucide-react';
import brochure from "../assets/brochure.pdf";
import img6 from "../assets/b1.jpg";
import { motion } from "framer-motion";

export const BrochureDownloadSection = () => {
  return (
    <section className="relative w-full bg-gray-100 py-20 px-6 overflow-hidden">
      
      {/* 🔴 Subtle Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img6}
          alt="Background visual"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      {/* 🔽 Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6"
      >
        {/* Top Prompt Text */}
        <p className="text-black font-medium text-sm sm:text-base">
          For better understanding, please download this PDF.
        </p>

        {/* Icon */}
        <FileDown className="text-black w-12 h-12" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D9070A]">
          Download Brochure
        </h2>

        {/* Sub Text */}
        <p className="text-black text-md sm:text-lg leading-relaxed">
          Click below to download the brochure and receive a callback from our Academic Counselor.
        </p>

        {/* Button */}
        <a
          href={brochure}
          download
          className="mt-4 inline-block bg-[#D9070A] hover:bg-gray-900 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300"
        >
          Download Now
        </a>
      </motion.div>
    </section>
  );
};

export default BrochureDownloadSection;
