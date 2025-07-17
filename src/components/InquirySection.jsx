import React, { useState } from "react";
import { motion } from "framer-motion";
import inqiryimg from "../assets/i2.jpg";
import inqiryimg1 from "../assets/i1.jpg";




const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Form Data Submitted:", formData);
    setTimeout(() => {
      alert("Form submitted successfully!");
      setSubmitting(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Animated SVG Dotted Path */}
     <div className="absolute inset-0">
        <svg
          className="absolute left-0 top-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100"
            stroke="#D9070A"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-r from-red-100 via-transparent to-red-100 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        {/* Left Side – Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center gap-6"
        >
          <img
            src={inqiryimg}
            alt="Inquiry Visual 1"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <img
            src={inqiryimg1}
            alt="Inquiry Visual 2"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side – Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#D9070A] to-[#a10c0e] p-10 rounded-2xl shadow-2xl text-white md:w-1/2 w-full"
        >
          <h2 className="text-4xl font-extrabold mb-6 font-serif">
            Ready for the Courses?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Full Name *</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="p-3 rounded-md bg-white text-black border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Phone Number *</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="p-3 rounded-md bg-white text-black border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows="4"
                className="p-3 rounded-md bg-white text-black border border-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-[#D9070A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InquirySection;
