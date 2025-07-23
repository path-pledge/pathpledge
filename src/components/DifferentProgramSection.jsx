import React from "react";
import { motion } from "framer-motion";
// import programImage from "../assets/11.jpg"; // Replace with actual image path
import img1 from "../assets/hex1.jpg";
import img2 from "../assets/hex2.jpg";
import img3 from "../assets/hex3.jpg";
import img4 from "../assets/hex4.jpg";
import img5 from "../assets/hex5.jpg";


const DifferentProgramSection = () => {
  const images = [img1, img2, img3, img4, img5];

  
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-center leading-tight"
        >
          How is This Program{" "}
          <span className="text-[#D9070A]">Different from Others?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/80 mt-4 text-center text-lg max-w-3xl mx-auto"
        >
          The structure and delivery of this program are uniquely designed to
          offer a far more practical, data-driven, and real-world approach to
          learning the art and science of trading.
        </motion.p>

        {/* Content Row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-5 px-2 md:px-6 max-w-xl mx-auto"
          >
            <h3 className="font-extrabold text-2xl md:text-3xl">
              What Sets It Apart?
            </h3>
            <p className="text-white/90 text-start leading-relaxed text-lg">
              Unlike most traditional trading courses that focus heavily on
              theory or generic content, PathPledge integrates real-time market
              exposure, live mentorship, and performance-based learning. Each
              module is backed by practical where assignments,value trading
              psychology coaching, and decision-making under live conditions.
            </p>
            <p className="text-white/90 text-start leading-relaxed text-lg">
              The program includes AI-powered trade analysis tools, in-depth
              training for BSE and NSE markets, and strategy building across
              equity, F&O, intraday, and swing trading. Students receive
              continued guidance through Q&A sessions, community discussions,
              and access to seasoned mentors to help navigate real market
              challenges.
            </p>
          </motion.div>

          
          {/* Image Section with Hexagons */}
         {/* Hexagon Image Section */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="flex flex-wrap justify-center items-center gap-6 px-4 md:px-0"
>
  {images.map((img, idx) => (
    <div
      key={idx}
      className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 hexagon group transition-transform duration-300 hover:scale-110"
    >
      <img
        src={img}
        alt={`Hexagon ${idx + 1}`}
        className="w-full h-full object-cover rounded-[15%] shadow-xl group-hover:shadow-[0_0_20px_#ff3b3bcc] transition-all duration-300"
      />
      <div className="absolute inset-0 rounded-[15%] border border-white/10 group-hover:border-[#ff3b3bcc] transition-all duration-300" />
    </div>
  ))}
</motion.div>


        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white/80 mt-16 max-w-5xl mx-auto text-start text-lg leading-relaxed px-2"
        >
          In short, this program provides a complete trading ecosystem—with a
          structured roadmap, real-time decision training, and professional
          mentorship—designed to transform you into a confident, consistent, and
          well-equipped market participant.
        </motion.p>
      </div>
    </section>
  );
};

export default DifferentProgramSection;
