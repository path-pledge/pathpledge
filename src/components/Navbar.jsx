import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/programs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-[#D9070A] to-[#ff9900] text-transparent bg-clip-text animate-pulse">
          PathPledge
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-[18px] font-semibold text-black">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={handleNavClick}
                className={`relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D9070A] after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.path ? "text-[#D9070A]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call Button - Desktop */}
        <motion.a
          href="tel:+91 88272 40770"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-tr from-[#D9070A] to-[#ff6633] text-white font-semibold shadow-lg backdrop-blur-lg transition-transform duration-300"
        >
          <FiPhone className="text-lg animate-pulse" />
          +91 88272 40770
        </motion.a>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ☰
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl px-6 py-4 shadow-lg"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block border-b border-gray-200 pb-2 ${
                      location.pathname === item.path ? "text-[#D9070A]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Call Button */}
            <a
              href="tel:+91 88272 40770"
              className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#D9070A] to-[#ff6633] text-white animate-pulse"
            >
              <FiPhone className="text-lg" />
              +91 88272 40770
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
