import React, { useState, useEffect, useRef } from "react";
import { PhoneCall, Clock3, MapPin, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase"; // adjust path as per your structure
import { collection, addDoc } from "firebase/firestore";

const ContactSection = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollToForm") === "true" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      alert("Please fill out the required fields.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });

      setSubmitted(true);
      setFormData({ fullName: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gray-100 py-18 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-[#D9070A] font-semibold mb-2 uppercase tracking-wide">
              Contact Details
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Get in Touch
            </h2>
            <p className="text-gray-600 font-serif">
              Have any query? Or want to know more? Contact us and we will be happy to help.
            </p>
          </div>

          <div className="space-y-6">
            <ContactItem
              icon={<MapPin className="text-[#D9070A]" />}
              title="Our Address"
              text={
                <>
                  PathPledge Academy – Raipur Hybrid Center
                  <br />
                  Off No. 7030, Currency Tower, VIP Road,
                  <br />
                  Raipur, Chhattisgarh 492013
                </>
              }
            />
            <ContactItem
              icon={<Mail className="text-[#D9070A]" />}
              title="Email"
              text={
                <>
                  General Enquiry:
                  <br />
                  <a href="mailto:info@pathpledge.in" className="text-[#D9070A] underline">
                    info@pathpledge.in
                  </a>
                </>
              }
            />
            <ContactItem
              icon={<PhoneCall className="text-[#D9070A]" />}
              title="Contact"
              text="Mobile: +91 88272 40770"
            />
            <ContactItem
              icon={<Clock3 className="text-[#D9070A]" />}
              title="Hours of Operation"
              text="Everyday: 10:00 AM – 07:00 PM IST"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="backdrop-blur-md bg-[#D9070A]/90 p-8 rounded-2xl shadow-2xl text-white border border-white/20"
        >
          <h2 className="text-5xl font-extrabold mb-2">Ready to Get Started?</h2>
          <p className="text-sm mb-6">
            Your phone number will not be published. Required fields are marked *
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-600 text-white rounded">
              Submitted successfully!
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField
              label="Full Name *"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <FormField
              label="Phone Number *"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows="4"
                className="p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-white text-[#D9070A] px-6 py-3 rounded-full font-semibold transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

const ContactItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 group">
    <div className="bg-gray-100 p-4 rounded-lg transition-transform group-hover:scale-110 group-hover:bg-[#fee2e2]">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg font-serif">{title}</h4>
      <p className="text-gray-700 font-serif">{text}</p>
    </div>
  </div>
);

const FormField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
    />
  </div>
);

export default ContactSection;
