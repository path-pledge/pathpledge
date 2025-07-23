import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import img6 from "../assets/b1.jpg";
import { motion } from "framer-motion";
import PopupForm from "./PopupForm";

export const BrochureDownloadSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full bg-gray-100 py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={img6}
          alt="Background visual"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6"
      >
        <p className="text-black font-bold text-md sm:text-base">
          For better understanding, please download this PDF.
        </p>

        <FileDown className="text-black w-12 h-12" />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D9070A]">
          Download Brochure
        </h2>

        <p className="text-black font-bold sm:text-lg leading-relaxed">
         Get expert tips and insider insights. Download the brochure now and let our Academic Counselor guide you toward the right career path.
        </p>

        {/* ✅ Manual Trigger */}
        <button
          onClick={() => setShowPopup(true)}
          className="mt-4 inline-block bg-[#D9070A] hover:bg-gray-900 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300"
        >
          Download Now
        </button>
      </motion.div>

      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)} // close manually
          onSubmit={() => setShowPopup(false)} // close after submit
        />
      )}
    </section>
  );
};

export default BrochureDownloadSection;
