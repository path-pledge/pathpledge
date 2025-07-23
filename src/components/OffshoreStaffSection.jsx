import { FaCheckCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const OffshoreStaffSection = () => {
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* 🧠 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-sm font-bold text-[#D9070A] tracking-wider uppercase block">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            At PathPledge, we go beyond education,<br />
            we build elite, data driven market minds.
          </h2>

          {/* 📱 Mobile-only Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="block md:hidden"
          >
            <div className="w-full max-w-md mx-auto pt-4">
             <iframe
  className="w-full aspect-video rounded-xl shadow-xl border-4 border-white"
  src="https://www.youtube.com/embed/kMplMSdXuCA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

            </div>
          </motion.div>

          <ul className="space-y-3 pt-4 flex flex-col items-center md:items-start">
            {[
              "India’s first AI-integrated trading education ecosystem.",
              "Focused on BSE, NSE, Futures & Options, and live market mentoring.",
              "Backed by real traders, data scientists, and certified mentors.",
              "Shaping ethical, intelligent, and consistent retail traders.",
            ].map((point, index) => (
              <li
                key={index}
                className="flex items-start text-black text-base md:text-lg max-w-md"
              >
                <FaCheckCircle className="text-[#D9070A] mr-2 mt-1 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 text-center md:text-left">
            <button
              onClick={handleEnquiry}
              className="px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] shadow-xl hover:bg-black transition-all"
            >
              Enquiry Now
            </button>
          </div>
        </motion.div>

        {/* 🖥️ Desktop Video */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md">
           <iframe
  className="w-full h-full aspect-video rounded-xl shadow-xl border-4 border-white"
  src="https://www.youtube.com/embed/kMplMSdXuCA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffshoreStaffSection;
