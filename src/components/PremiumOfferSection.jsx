import React from "react";
import { motion } from "framer-motion";
import tradingImage from "../assets/15.png";

const PremiumOfferSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto rounded-2xl flex flex-col md:flex-row justify-between items-stretch space-y-6 md:space-y-0 md:space-x-12"
      >
        {/* ✅ Left Part (Text + Image in small screen) */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800"
          >
            With Just <span className="text-[#D9070A]">₹3000/-</span> get 100
            minutes of premium content to kickstart your Trading Journey.
          </motion.h2>

          {/* ✅ Image only for small screens below heading */}
          <div className="block md:hidden">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={tradingImage}
              alt="Trading with Data Science"
              className="w-full rounded-2xl"
            />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl font-bold text-[#D9070A]"
          >
            What is Trading with Data Science - Online Program?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 text-lg"
          >
            In a world where gut feeling once dominated stock trading, Ayush and
            Bhusha brought data to the forefront, transforming market speculation
            into structured, strategic opportunities. By integrating data science
            into the world of trading, they gained a decisive edge in the Indian
            stock market — making trading smarter, more consistent, and
            significantly more rewarding.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-lg"
          >
            “Trading with Data Science” is a highly anticipated 3-month online
            program from PathPledge, crafted by Ayush and Bhusha to empower
            individuals with the tools and techniques to trade confidently using
            data. This course helps you build a solid foundation in data-driven
            trading strategies, enabling you to make precise and profitable
            decisions across BSE, NSE, Futures, and Options.
          </motion.p>
        </div>

        {/* ✅ Right Part (Image - only visible on md and above) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={tradingImage}
            alt="Trading with Data Science"
            className="w-full rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PremiumOfferSection;
