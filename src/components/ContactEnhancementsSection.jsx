import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const ContactEnhancementsSection = () => {
  // Scroll to map iframe on button click
  const scrollToMap = () => {
    const mapSection = document.getElementById("mapSection");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gray-100 py-16 px-4 md:px-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold text-gray-900 font-serif">
          Stay Connected
        </h2>
        <p className="text-gray-600 font-serif text-xl mt-2">
          Reach out through our socials or visit us directly.
        </p>

        {/* Visit Us Button */}
        <a
  href="https://g.co/kgs/2ZyuEyb"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-[#D9070A] text-white px-6 py-3 rounded-md font-extrabold hover:bg-gray-800 transition"
>
  Visit Us
</a>
      </div>

      {/* Google Maps Embed */}
    <div
  id="mapSection"
  className="w-full h-[400px] mb-20 rounded-xl overflow-hidden shadow-lg"
>
  <iframe
    title="PathPledge Stock Market Academy"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.567929729352!2d81.6767633!3d21.2384348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd7961448eaf%3A0xc1cb16940a271afb!2sPathpledge%20Stock%20Market%20Academy!5e0!3m2!1sen!2sin!4v1721557690807!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-20">
        <a
          href="https://www.instagram.com/tradingwithpathpledge/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="text-[#D9070A] text-3xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/pathpledge/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="text-[#D9070A] text-3xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          title="YouTube"
          className="text-[#D9070A] text-3xl hover:scale-110 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://wa.me/918827240770"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="text-[#D9070A] text-3xl hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default ContactEnhancementsSection;
