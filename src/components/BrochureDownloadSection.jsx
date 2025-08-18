import React, { useState } from "react";
import { FileDown } from "lucide-react";
import img6 from "../assets/b1.jpg";
import { motion } from "framer-motion";
import PopupForm from "./PopupForm";

export const BrochureDownloadSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      className="relative w-full bg-gray-100 py-20 px-6 overflow-hidden"
      id="brochure-download"
    >
      {/* ✅ SEO Optimized Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={img6}
          alt="PathPledge Academy Trading Brochure background"
          className="w-full h-full object-cover opacity-20 blur-sm"
          loading="lazy"
        />
      </div>

      {/* ✅ Schema Markup for Brochure */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "PathPledge Academy Trading Brochure",
          description:
            "Download PathPledge Academy's brochure to explore trading programs, pricing, and career guidance for stock market success.",
          fileFormat: "application/pdf",
          url: "https://www.pathpledge.com/brochure.pdf",
          author: {
            "@type": "Organization",
            name: "PathPledge Academy",
          },
        })}
      </script>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6"
      >
        {/* ✅ SEO heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D9070A]">
          Download PathPledge Academy Brochure (PDF)
        </h2>

        <p className="text-black font-semibold text-md sm:text-base">
          Get expert tips, trading strategies, and course details in our{" "}
          <strong>stock market trading brochure</strong>. Learn how PathPledge
          Academy helps you build a successful trading career.
        </p>

        <FileDown
          className="text-black w-12 h-12"
          aria-label="Download PathPledge Brochure icon"
        />

        <p className="text-black font-medium sm:text-lg leading-relaxed">
           Download the free{" "}
          <strong>PathPledge Trading Academy brochure</strong> and let our
          Academic Counselors guide you toward the right trading journey.
        </p>

        {/* ✅ Optimized CTA */}
        <button
          onClick={() => setShowPopup(true)}
          className="mt-4 inline-block bg-[#D9070A] hover:bg-gray-900 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300"
        >
          📥 Download Free Trading Brochure
        </button>
      </motion.div>

      {/* ✅ Popup Form trigger */}
      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};

export default BrochureDownloadSection;
