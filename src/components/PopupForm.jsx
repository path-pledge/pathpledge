import React, { useEffect, useState } from "react";
import logoWatermark from "../assets/logo.png";

import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Save data to Firestore
      await addDoc(collection(db, "brochureForms"), {
        ...formData,
        source: "popup",
        createdAt: new Date(),
      });

      console.log("Form data saved to Firestore:", formData);

      // Step 2: Trigger brochure download
      const brochureUrl = "/brochure.pdf"; // must be in public folder
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.download = "Trading_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Step 3: Close popup
      setShow(false);
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div
        className="relative w-[90%] max-w-[600px] rounded-3xl overflow-hidden shadow-xl bg-white"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundSize: "200px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
        }}
      >
        <div className="w-full h-full p-6 sm:p-10 bg-white/90 backdrop-blur text-gray-800 relative z-10 rounded-3xl">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            ✕
          </button>

          <h2 className="text-2xl sm:text-3xl text-center font-extrabold text-[#D9070A] mb-2">
            Download Brochure
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Fill the form to download brochure and get a call back
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="flex-1 border px-4 py-2 rounded-md focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="flex-1 border px-4 py-2 rounded-md focus:outline-none"
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
              required
            />

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
