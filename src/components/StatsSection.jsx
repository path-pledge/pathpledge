import React from "react";
import bgShape from "../assets/7.png"; // Replace with your shape image

const StatsSection = () => {
  const stats = [
    { value: "2.5M+", label: "YouTube Subscribers" },
    { value: "38,000+", label: "Students Mentored" },
    { value: "1,200+", label: "Sessions Finished" },
    { value: "4.6", label: "Google Rating" },
  ];

  return (
    <section className="w-full py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative bg-white py-2   hover:shadow-lg transition duration-300"
          >
            {/* Background Shape */}
            <img
              src={bgShape}
              alt="Stat Background"
              className="absolute inset-0 w-full h-full object-contain opacity-50 pointer-events-none"
            />

            {/* Stat Content */}
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl  py-8 font-bold text-red-500">{stat.value}</h3>
              <p className="mt-2 text-lg font-serif font-semibold text-gray-900 uppercase">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
