import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home,
  Book,
  DollarSign,
  UserCheck,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSend = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  const navLinks = [
    { name: "Home", icon: Home, link: "/" },
    { name: "Programs", icon: Book, link: "/programs" },
    { name: "Pricing", icon: DollarSign, link: "/pricing" },
    { name: "Leaderboard", icon: UserCheck, link: "/leaderboard" },
    { name: "Contact", icon: Mail, link: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Twitter, url: "https://twitter.com" },
    { icon: Instagram, url: "https://www.instagram.com/tradingwithpathpledge/" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/pathpledge/" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-6">
        {/* Column 1: Branding */}
        <div>
          <img
            src={logo}
            alt="PathPledge Logo"
            className="h-28 w-auto object-contain"
          />
          <span className="text-2xl font-bold shiny-text ">
            PathPledge Investment Academy
          </span>
        </div>

        {/* Responsive Divider */}
        <div className="w-full h-px lg:w-px lg:h-full mx-auto shiny-line" />


        {/* Column 2: Quick Links */}
        <div >
          <h3 className="text-white font-extrabold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-3 text-gray-100">
            {navLinks.map(({ name, icon: Icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  className="flex items-center space-x-2 hover:text-red-500 hover:underline transition"
                >
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsive Divider */}
        <div className="w-full h-px lg:w-px lg:h-full mx-auto shiny-line" />


       {/* Column 3: Contact Info */}
<div>
  <h3 className="text-white font-extrabold text-lg">Contact</h3>
  <div className="space-y-3 mt-4 text-sm">
    <div className="flex items-start space-x-2">
      <Mail className="mt-1" />
      <a
        href="mailto:support@pathpledge.in"
        className="hover:text-red-400 transition hover:underline"
      >
        support@pathpledge.in
      </a>
    </div>
    <div className="flex items-start space-x-2">
      <PhoneCall className="mt-1" />
      <a
        href="tel:+918827240770"
        className="hover:text-red-400 transition hover:underline"
      >
        +91-8827240770
      </a>
    </div>
    <div className="flex items-start space-x-2">
      <MapPin className="mt-1 text-white w-6 h-6" />
      <a
        href="https://www.google.com/maps/place/Pathpledge+Stock+Market+Academy/@21.2384348,81.6767633,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd7961448eaf:0xc1cb16940a271afb!8m2!3d21.2384348!4d81.6793436!16s%2Fg%2F11xl6kk38f?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition hover:underline"
      >
        Raipur Hybrid Center, Off No. 7030, Currency Tower, VIP Road, Raipur, Chhattisgarh 492013
      </a>
    </div>
  </div>
</div>


        {/* Responsive Divider */}
        <div className="w-full h-px lg:w-px lg:h-full mx-auto shiny-line" />

        {/* Column 4: Social + Subscribe */}
        <div >
          <h3 className="text-white font-extrabold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-[#D9070A] transition transform hover:scale-110"
              >
                <Icon className="text-white h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-white font-bold">Subscribe for Updates</h4>
            <div className="flex flex-col sm:flex-row mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full px-4 py-2 text-white bg-black focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!email}
                className="bg-[#D9070a] rounded-md px-4 py-2 text-white font-semibold hover:bg-gray-800"
              >
                Send
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            {sent && (
              <p className="mt-2 text-green-500 text-sm">Sent successfully!</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-white text-sm font-serif">
          <span>© {new Date().getFullYear()} PathPledge. All Rights Reserved.</span>
          <span className="mt-2 sm:mt-0">Designed by Panda Outsourcing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
