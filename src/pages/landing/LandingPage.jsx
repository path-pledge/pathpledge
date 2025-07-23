import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';


// Import your local images
import LP1 from '../../assets/18.jpg';
import LP2 from '../../assets/16.jpg';

import first1 from '../../assets/5.jpg';
import second2 from '../../assets/6.jpg';
import third3 from '../../assets/7.jpg';
import fourth4 from '../../assets/8.jpg';
import fifth5 from '../../assets/3.jpg';
import sixth6 from '../../assets/10.jpg';
import seventh7 from '../../assets/11.jpg';
import eighth8 from '../../assets/12.jpg';
import ninth9 from '../../assets/13.jpg';
import tenth10 from '../../assets/14.jpg';

import { FiPhone, FiTarget, FiArrowRight } from 'react-icons/fi';
import { FaMoneyBillWave, FaChartLine, FaBrain, FaRegHandshake } from 'react-icons/fa';

// Firebase imports
import { db } from '../../firebase'; // Corrected import path for your firebase.js
import { collection, addDoc } from 'firebase/firestore';


const testimonials = [
  {
    name: "Bharti Gajmoti",
    message: "Ayush Sir is a best mentor, his teaching skills is very good, simple and logical always, I'm very happy to learn with PathPledge Academy.",
    image: first1,
  },
  {
    name: "Parshuram Rathod",
    message: "Simple way to explain with example by Ayush Sir. One of the best trading academy in India. From basic to advance, it's like I am going to change my life.",
    image: second2,
  },
  {
    name: "Priya Pandey",
    message: "Best institute for Trading, provides a great learning experience to beginners. Ayush Patel teaches from basics till advanced in all markets.",
    image: third3,
  },
  {
    name: "Ishwar Ballal",
    message: "Ayush Sir !! is one of the best mentors of my life. The content includes everything for trading efficiently. Highly recommended.",
    image: fourth4,
  },
  {
    name: "Saroj Nayak",
    message: "Perfect platform to learn stock market trading. I love this course for its focus on Risk Management. Special thanks to our mentor Ayush Sir.",
    image: fifth5,
  },
  {
    name: "Dhaneshwar Dewangan",
    message: "Amazing experience improved my minor mistakes. A new point of view for psychology, life & technical management. Thank you PathPledge!",
    image: sixth6,
  },
  {
    name: "Aman Anand",
    message: "Very good place to learn trading for a beginner. Ayush sir is fabulous and his teaching is very simple and easy to understand.",
    image: seventh7,
  },
  {
    name: "Pravin Dabhi",
    message: "One of the best trading institutes in India. They made learning easy to understand. Would recommend to anyone.",
    image: eighth8,
  },
  {
    name: "Swaraj Verma",
    message: "This is the best platform for new traders and my experience was excellent. Loved it and enjoyed it very much.",
    image: ninth9,
  },
  {
    name: "Yāda Dārling143",
    message: "Ayush Sir teaches everything clearly, including psychology and real life problems. It's an amazing course!",
    image: tenth10,
  },
];


const LandingPage = () => {
  // Form fields ke liye state hooks
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  // State for form submission status and messages
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'

  // Input changes ko handle karein
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Phone number ke liye validation
    if (name === 'phone') {
      // Sirf numbers allow karein
      const numericValue = value.replace(/\D/g, '');
      // Max 10 digits
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Form submit ko handle karein
  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submission ko rokein

    // Simple validation (agar phone number 10 digits ka nahi hai)
    if (formData.phone.length !== 10) {
      setSubmissionStatus({ type: 'error', message: 'Please enter a valid 10-digit phone number.' });
      return;
    }

    setSubmissionStatus({ type: 'submitting', message: 'Submitting...' });

    try {
      // Firestore collection reference
      const docRef = await addDoc(collection(db, "registrations"), {
        name: formData.name,
        phone: formData.phone,
        timestamp: new Date(), // Submission ka time record karein
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmissionStatus({ type: 'success', message: 'Registration successful! We will contact you soon.' });
      // Form reset karein
      setFormData({ name: '', phone: '' });
    } catch (e) {
      console.error("Error adding document: ", e);
      setSubmissionStatus({ type: 'error', message: 'Registration failed. Please try again.' });
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
      <header className="bg-white shadow-lg py-4 px-4 md:px-14 flex items-center justify-between sticky top-0 z-50 animate-fade-in-down">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold font-inter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9070A] to-red-600 animate-pulse-glow">
              PathPledge
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <motion.a
            href="tel:+918827240770"
            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(217, 7, 10, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-tr from-[#D9070A] to-[#ff6633] text-white font-semibold shadow-lg transition-all duration-300 text-sm md:text-base border border-transparent hover:border-white"
          >
            <FiPhone className="text-lg animate-pulse" />
            +91 88272 40770
          </motion.a>
          <motion.a
            href="tel:+918700501149"
            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(217, 7, 10, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-tr from-[#D9070A] to-[#ff6633] text-white font-semibold shadow-lg transition-all duration-300 text-sm md:text-base border border-transparent hover:border-white"
          >
            <FiPhone className="text-lg animate-pulse" />
            +91 87005 01149
          </motion.a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-white to-gray-100 text-gray-800 py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#000" fillOpacity="0.05" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,138.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content - Order adjusted here */}
          <div className="md:w-3/5 text-center md:text-left hero-text-animate">
            <p className="text-lg md:text-xl mb-3 font-bold text-[#D9070A] uppercase tracking-wider animate-slide-up-1 ">
              Your Gateway to Financial Independence
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-serif animate-slide-up-2">
              Master the Markets with <span className="text-[#D9070A]">SEBI-Certified</span> Trading Gurus
            </h1>

            {/* --- LP1 Image and Bubble for Small Screens (after h1) --- */}
            <div className="md:hidden mt-10 relative flex flex-col justify-center items-center animate-image-zoom-in mb-8">
              <img
                src={LP1}
                alt="Live Trading Chart"
                className="rounded-lg shadow-2xl border-4 border-[#D9070A] w-full max-w-md"
              />
              <div className="absolute top-4 left-4 bg-white text-[#D9070A] text-md px-3 py-1 rounded-full flex items-center gap-2 font-semibold shadow-md animate-fade-in-bubble">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9070A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9070A]"></span>
                </span>
                LIVE MARKET INSIGHTS
              </div>
            </div>
            {/* --- End of LP1 Image and Bubble for Small Screens --- */}

            <p className="text-lg md:text-xl mb-8 text-gray-600 capitalize font-medium animate-slide-up-3">
              Unlock powerful strategies, receive precise real-time calls, and achieve consistent profits under expert guidance.
            </p>

            {/* --- Button moved to the very end of the text content div --- */}
            <motion.a
              href="#registration-form"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(217, 7, 10, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9070A] text-white font-bold py-4 px-8 rounded-xl text-xl md:text-xl shadow-lg transition-all duration-300 ease-in-out transform inline-block border border-transparent hover:border-white animate-slide-up-4"
            >
              Claim Your FREE Trading Masterclass!
            </motion.a>
            {/* --- End of Button reposition --- */}
          </div>

          {/* --- LP1 Image and Bubble for Medium and Large Screens (original position) --- */}
          <div className="md:w-2/5 mt-10 md:mt-0 relative hidden md:flex justify-center items-center animate-image-zoom-in">
            <img
              src={LP1}
              alt="Live Trading Chart"
              className="rounded-lg shadow-2xl border-4 border-[#D9070A]"
            />
            <div className="absolute top-4 left-4 bg-white text-[#D9070A] text-md px-3 py-1 rounded-full flex items-center gap-2 font-semibold shadow-md animate-fade-in-bubble">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9070A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9070A]"></span>
              </span>
              LIVE MARKET INSIGHTS
            </div>
          </div>
          {/* --- End of LP1 Image and Bubble for Medium and Large Screens --- */}
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-white section-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 font-serif">
            Why PathPledge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-[#D9070A] hover:shadow-xl transition-shadow duration-300 animate-feature-card">
              <span className="text-[#D9070A] text-5xl mb-4 flex justify-center animate-bounce-icon">
                <FaBullseye />
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 font-serif">Precision Calls</h3>
              <p className="text-gray-600 text-md">
                Data-driven, real-time trading calls for optimal market entry and exit.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-[#D9070A] hover:shadow-xl transition-shadow duration-300 animate-feature-card delay-100ms">
              <span className="text-[#D9070A] text-5xl mb-4 flex justify-center animate-bounce-icon delay-100ms">
                <FaShieldAlt />
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 font-serif">SEBI Compliance</h3>
              <p className="text-gray-600 text-md">
                Trade with confidence under the guidance of our fully regulated and certified experts.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-[#D9070A] hover:shadow-xl transition-shadow duration-300 animate-feature-card delay-200ms">
              <span className="text-[#D9070A] text-5xl mb-4 flex justify-center animate-bounce-icon delay-200ms">
                <FaGraduationCap />
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 font-serif">Mastery Education</h3>
              <p className="text-gray-600 ">
                Comprehensive curriculum from basic concepts to advanced trading strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-100 section-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 font-serif">
            Your Success Blueprint. The PathPledge Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex flex-col items-center animate-process-step">
              <div className="w-18 h-18 rounded-full bg-[#D9070A] text-white flex items-center justify-center text-4xl font-bold mb-4 shadow-lg animate-pulse-number">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Learn & Master</h3>
              <p className="text-gray-600 text-md">Gain in-depth knowledge with our expert designed courses.</p>
            </div>
            <div className="relative flex flex-col items-center animate-process-step delay-200ms">
              <span className="absolute hidden md:block -left-16 top-1/2 transform -translate-y-1/2 text-[#D9070A] text-5xl animate-arrow-slide">
                <FiArrowRight />
              </span>
              <div className="w-18 h-18 rounded-full bg-[#D9070A] text-white flex items-center justify-center text-4xl font-bold mb-4 shadow-lg animate-pulse-number">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Apply & Execute</h3>
              <p className="text-gray-600 text-md">Implement strategies with confidence using our real-time calls.</p>
            </div>
            <div className="relative flex flex-col items-center animate-process-step delay-400ms">
              <span className="absolute hidden md:block -left-16 top-1/2 transform -translate-y-1/2 text-[#D9070A] text-5xl animate-arrow-slide">
                <FiArrowRight />
              </span>
              <div className="w-18 h-18 rounded-full bg-[#D9070A] text-white flex items-center justify-center text-4xl font-bold mb-4 shadow-lg animate-pulse-number">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Profit & Grow</h3>
              <p className="text-gray-600 text-md">Witness consistent growth in your trading journey and capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-white section-fade-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 font-serif">
            Your Roadmap to Trading Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative flex justify-center items-center animate-zoom-in">
              <img
                src={LP2}
                alt="Trader Working"
                className="rounded-lg shadow-xl border-4 border-gray-200"
              />
              <div className="absolute bottom-4 right-4 bg-[#D9070A] text-white px-4 py-2 rounded-lg text-md font-semibold shadow-md animate-fade-in-bubble">
                Unmatched Expertise
              </div>
            </div>
            <ul className="space-y-5 text-xl text-gray-700 animate-list-fade-in">
              <li className="flex items-start animate-list-item delay-100ms">
                <span className="text-[#D9070A] text-4xl mr-3 leading-none font-bold"><FaChartLine /></span>
                <span>Master <b>Technical & Fundamental Analysis</b> for market insights.</span>
              </li>
              <li className="flex items-start animate-list-item delay-200ms">
                <span className="text-[#D9070A] text-4xl mr-3 leading-none font-bold"><FaBrain /></span>
                <span>Develop a <b>Disciplined Trading Mindset</b> to conquer market emotions.</span>
              </li>
              <li className="flex items-start animate-list-item delay-300ms">
                <span className="text-[#D9070A] text-4xl mr-3 leading-none font-bold"><FiTarget /></span>
                <span>Identify <b>High-Probability Trading Setups</b> across diverse markets.</span>
              </li>
              <li className="flex items-start animate-list-item delay-400ms">
                <span className="text-[#D9070A] text-4xl mr-3 leading-none font-bold"><FaRegHandshake /></span>
                <span>Implement <b>Robust Risk Management</b> strategies to protect your capital.</span>
              </li>
              <li className="flex items-start animate-list-item delay-500ms">
                <span className="text-[#D9070A] text-4xl mr-3 leading-none font-bold"><FaMoneyBillWave /></span>
                <span>Gain insights into <b>Global Market Dynamics</b> and emerging opportunities.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

        {/* Testimonials/Social Proof Section - UPDATED WITH SELF-SLIDING SWIPER */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 section-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 font-serif">
            Our Students Speak, Real Success Stories
          </h2>
          {/* Swiper Component */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            pagination={{ clickable: true }} // Still keep clickable dots
            // Removed: navigation={true} // No navigation arrows
            modules={[Pagination, Autoplay]} // Removed Navigation module
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper p-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#D9070A] flex flex-col items-center h-full">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-xl w-24 h-24 mb-4 border-2 border-[#D9070A] object-cover"/>
                  <p className="italic text-gray-700 mb-4 text-lg">
                    "{testimonial.message}"
                  </p>
                  <p className="font-medium text-[#D9070A] text-xl">- {testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="registration-form" className="py-20 px-4 md:px-8 bg-[#D9070A] text-white section-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Ready to Unlock Your Trading Potential?
          </h2>
          <p className="text-xl font-semibold mb-8">
            Register now for a FREE Introductory Webinar and your exclusive Trading Success Guide!
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl text-gray-800 border border-[#D9070A] animate-form-fade-in">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-lg font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type your full name"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-[#D9070A] focus:border-[#D9070A]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-left text-lg font-bold mb-2">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit phone number (e.g., 9876543210)"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-[#D9070A] focus:border-[#D9070A]"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                pattern="\d{10}"
                title="Please enter a 10-digit phone number"
                required
              />
            </div>
            {submissionStatus && (
              <p
                className={`mb-4 text-center font-semibold ${
                  submissionStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {submissionStatus.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-[#D9070A] hover:bg-[#B30508] text-white font-bold py-4 px-6 rounded-md text-2xl transition duration-300 ease-in-out transform hover:scale-105 border border-[#D9070A]"
              disabled={submissionStatus?.type === 'submitting'}
            >
              {submissionStatus?.type === 'submitting' ? 'Submitting...' : 'Win Your Free Trading Masterclass!'}
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Your data is 100% secure and protected by our advanced encryption.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 text-center py-8 px-4 text-sm">
        <div className="max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} PathPledge. All rights reserved. | <a href="/privacy-policy" className="underline hover:text-[#D9070A]">Privacy Policy</a></p>
          <p className="mt-2 text-gray-400">
            SEBI Registered Investment Advisor (Reg. No.: [Your SEBI Reg. No. Here])
          </p>
          <p className="mt-1 text-gray-400">
            Disclaimer: Investing in stock market is subject to market risks. Read all the related documents carefully before investing.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;