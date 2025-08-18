import React from "react";
import { BookOpen, BarChart2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pathpledgeLogo from "../assets/m1.png";

const PathPledgeIntro = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section
      className="bg-gray-100 py-20 px-6 sm:px-6 lg:px-10 relative overflow-hidden"
      id="about-pathpledge"
    >
      {/* ✅ Local SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "PathPledge Academy - Best Stock Market Institute in Raipur",
          description:
            "PathPledge Academy is Raipur's best stock market learning academy offering trading courses, stock market training, and proven strategies for financial success.",
          url: "https://www.pathpledge.com",
          logo: "https://www.pathpledge.com/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Raipur, Chhattisgarh",
            addressLocality: "Raipur",
            addressRegion: "CG",
            addressCountry: "India"
          },
          sameAs: [
            "https://www.facebook.com/pathpledge",
            "https://www.instagram.com/pathpledge",
            "https://www.linkedin.com/company/pathpledge"
          ]
        })}
      </script>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm uppercase font-bold text-[#D9070A] tracking-widest mb-3">
            About PathPledge Academy Raipur
          </p>

          {/* ✅ Raipur Keyword Optimized Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5">
            Best Stock Market Institute in{" "}
            <span className="text-[#D9070A]">Raipur - PathPledge Academy</span>
          </h1>

          {/* ✅ Optimized Paragraph */}
          <p className="text-black text-md md:text-xl leading-relaxed text-justify lg:mx-0 mb-6">
            At <strong>PathPledge Academy Raipur</strong>, we don’t just teach
            trading – we help students build real skills to become{" "}
            <strong>professional traders</strong>. Recognized as the{" "}
            <strong>best stock market academy in Raipur</strong>, we offer{" "}
            <strong>stock market training courses</strong>, backtested trading
            strategies, and practical lessons that deliver consistent results.
            Whether you’re a beginner or an advanced learner,{" "}
            <strong>PathPledge Raipur Learning Academy</strong> is the best
            place to master stock trading in Chhattisgarh.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-center text-lg space-x-3">
              <BookOpen className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">
                Comprehensive Stock Market Lessons in Raipur
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">
                Flexible Learning Hours for Raipur Traders
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <BarChart2 className="text-[#D9070A] w-5 h-5" />
              <span className="text-black">
                Proven Trading Strategies for Success
              </span>
            </li>
          </ul>

          {/* ✅ Local SEO Optimized CTA */}
          <button
            onClick={handleEnroll}
            className="mt-8 px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] hover:bg-black transition-all shadow-md"
          >
            Enroll in Raipur’s Best Trading Academy
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
              position: "absolute"
            }}
          >
            <defs>
              <pattern
                id="rectDotsDesktop"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.2" fill="#D9070A" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#rectDotsDesktop)" />
          </motion.svg>

          <img
            src={pathpledgeLogo}
            alt="Best Stock Market Academy in Raipur - PathPledge"
            className="relative z-10 w-full max-w-md rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PathPledgeIntro;
