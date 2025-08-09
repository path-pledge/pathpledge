import React, { useEffect, useState } from "react";
import logoWatermark from "../assets/logo.png";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const PopupForm = ({ onClose, onSubmit }) => {
  const [show, setShow] = useState(onClose ? true : false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    if (!onClose) {
      const timer = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Live phone validation
    if (name === "phone") {
      const isValidPhone = /^\d{10}$/.test(value);
      setErrors((prev) => ({
        ...prev,
        phone: isValidPhone || value === "" ? "" : "Phone number must be 10 digits.",
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on typing
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await addDoc(collection(db, "brochureForms"), {
        ...formData,
        source: onClose ? "manual" : "popup",
        createdAt: new Date(),
      });

      // Trigger brochure download
      const brochureUrl = "/brochure.pdf";
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.download = "Trading_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (onClose) {
        onSubmit?.();
      } else {
        setShow(false);
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div
        className="relative w-[90%] max-w-[600px] rounded-3xl overflow-hidden shadow-xl bg-white"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: "200px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full p-6 sm:p-10 bg-white/90 backdrop-blur text-gray-800 relative z-10 rounded-3xl">
          {/* Close Button */}
          <button
            onClick={() => {
              if (onClose) onClose();
              else setShow(false);
            }}
            className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl text-center font-extrabold text-[#D9070A] mb-2">
            Download Brochure
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Fill the form to download brochure and get a call back
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-md focus:outline-none"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#D9070A] text-white font-bold py-3 rounded-md hover:bg-[#b30506] transition"
            >
              Download Brochure
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
