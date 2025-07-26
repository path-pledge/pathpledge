import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll Progress Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="fixed top-[56px] left-0 w-full z-50 bg-white shadow-md backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/">
  <div className="text-3xl font-bold bg-gradient-to-r from-[#D9070A] to-[#ff9900] text-transparent bg-clip-text animate-pulse cursor-pointer">
    PathPledge
  </div>
</Link>

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

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black absolute right-4"
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

      {/* Scroll Progress Bar (Navbar ke neeche) */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-orange-500 to-red-600 w-full"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />

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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
