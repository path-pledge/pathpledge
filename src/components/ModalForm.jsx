import React from "react";

const ModalForm = ({ onClose, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-md relative font-serif">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-600 text-2xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-full shadow-sm px-4 py-2 focus:ring-[#D9070A] focus:border-[#D9070A]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-full shadow-sm px-4 py-2 focus:ring-[#D9070A] focus:border-[#D9070A]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Message</label>
            <textarea
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm px-4 py-2 focus:ring-[#D9070A] focus:border-[#D9070A]"
              placeholder="I want to start the class, how can I go to the next step?"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#D9070A] w-full text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
