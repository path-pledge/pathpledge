import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/h111.png";
import bgImg from "../assets/C11.jpg";
import { motion } from "framer-motion";

const WelcomeHero = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PathPledge Academy",
              "image": "https://pathpledge.in/assets/h111.png",
              "@id": "https://pathpledge.in",
              "url": "https://pathpledge.in",
              "telephone": "+91-8827240770",
              "priceRange": "Free",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pathpledge Academy Center, Off No. 7030 7th floor, Currency Tower, VIP Road",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "postalCode": "492013",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.2514,
                "longitude": 81.6296
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "sameAs": [
                "https://www.youtube.com/@PathPledgeTradingInstitute",
                "https://www.instagram.com/tradingwithpathpledge/",
                "https://www.linkedin.com/company/pathpledge/"
              ],
              "description": "Best trading courses in Raipur with live market practice, expert trainers, and lifetime support. PathPledge Academy is a leading stock market institute in Raipur."
            }
          `}
        </script>
      </Helmet>

      <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-6 md:py-2 overflow-hidden">
        {/* ✅ Background Image - blur hata diya */}
        <img
          src={bgImg}
          alt="Stock market institute in Raipur background"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-110 z-0"
        />

        {/* ✅ Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* ✅ Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
          <motion.img
            src={heroImg}
            alt="Best trading courses in Raipur-Live market training"
            className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-3xl object-contain mt-10 sm:mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Level Up <span className="text-[#d9070a]">Your Trading </span>
            Game - Live Market Practice, Proven Techniques, Real Impact.
          </motion.h1>

          <motion.button
            onClick={handleEnrollClick}
            aria-label="Enroll in the best trading course in Raipur"
            className="bg-[#d9070a] text-white px-6 py-3 rounded-md font-medium hover:bg-black transition shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default WelcomeHero;
