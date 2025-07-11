import { motion } from "framer-motion";

const AnimatedDottedSVG = () => {
  return (
    <div className="fixed inset-0 top-0 z-0 pointer-events-none">
      <motion.svg
        viewBox="0 0 1440 320"
        className="w-full h-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="none"
          stroke="#D9070A"
          strokeWidth="2"
          strokeDasharray="8 12"
          strokeLinecap="round"
          d="M0,160 C480,80 960,240 1440,160"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedDottedSVG;
