import React from "react";
import { motion } from "framer-motion";
import contactHeroImg from "../assets/C11.jpg";

const ContactHero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("I want to take the class, how can I go to the next step?");
    const phoneNumber = "918827240770";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative mt-16 w-full min-h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={contactHeroImg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] z-0"
      />

      {/* 🔴 Soft glowing radial circle */}
     

      {/* ✨ Glassmorphism Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="relative z-20 max-w-3xl mx-auto px-6 text-center text-white backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4 tracking-tight ">
          Let's Connect & <span className="text-[#D9070A]">Learn Something Amazing</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light ">
          Reach out to us , whether you have questions, ideas, or just want to chat about your goals.
        </p>

       
      </motion.div>
    </section>
  );
};

export default ContactHero;
