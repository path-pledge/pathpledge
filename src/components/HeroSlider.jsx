import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import WelcomeHero from "./WelcomeHero"; 
import heroImg2 from "../assets/logo.png"; 
import bgImg2 from "../assets/Hero2.jpg"; 

import { motion } from "framer-motion";

const SecondHero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-20 overflow-hidden"
      aria-label="Learn stock trading with PathPledge"
    >
      {/* Background */}
      <img
        src={bgImg2}
        alt="Stock trading background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50 z-10" />

      {/* Logo - Top Right for md+ screens */}
      <motion.img
        src={heroImg2}
        alt="PathPledge Logo"
        className="hidden md:block absolute top-6 right-6 w-20 md:w-28 lg:w-36 z-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        loading="lazy"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center md:items-end md:text-right max-w-4xl ml-auto">
        
        {/* Mobile Logo (above heading) */}
        <motion.img
          src={heroImg2}
          alt="PathPledge Mobile Logo"
          className="block md:hidden w-30 sm:w-30 mb-[15px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Learn From <span className="text-[#d9070a]">Zero to Hero</span> With PathPledge
        </motion.h2>
      </div>
    </section>
  );
};

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={1200}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      className="w-full h-screen"
    >
      {/* First Hero */}
      <SwiperSlide className="flex items-stretch">
        <WelcomeHero />
      </SwiperSlide>

      {/* Second Hero */}
      <SwiperSlide className="flex items-stretch">
        <SecondHero />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
