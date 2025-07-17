import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-500 via-gray-600 to-pink-600 py-20 text-center overflow-hidden mt-">
      {/* Decorative Wave Section */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 300"
        fill="none"
      >
        <path
          d="M0,64L30,69.3C60,75,120,85,180,101.3C240,117,300,139,360,165.3C420,192,480,224,540,229.3C600,235,660,213,720,197.3C780,181,840,171,900,170.7C960,171,1020,181,1080,197.3C1140,213,1200,235,1260,245.3C1320,256,1380,256,1410,256L1440,64V300H0V64Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroSection;
