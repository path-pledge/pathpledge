import { useState } from "react";

const faqData = {
  General: [
    {
      question: "What is PathPledge and what does it offer?",
      answer:
        "PathPledge is India’s premier AI-powered stock market training platform that empowers learners to master the art of investing and trading in NSE and BSE. We offer structured online programs that combine technical analysis, fundamental knowledge, risk management, and behavioral finance with modern tools like data science and artificial intelligence. Whether you're a complete beginner or an experienced trader, our goal is to help you trade smarter, reduce losses, and grow long-term wealth.",
    },
    {
      question: "How is PathPledge different from other online stock market courses?",
      answer:
        "Unlike typical theory-driven courses, PathPledge blends real-time market experience with mentor-led sessions, backtesting labs, and AI-based trade setups. We emphasize decision-making, risk-reward understanding, and trading psychology to help you build consistency. Our learners also gain lifetime access to our private community for discussion, trade ideas, and mentorship follow-ups.",
    },
    {
      question: "Do I need a background in finance to join?",
      answer:
        "Not at all. PathPledge is designed for everyone—from students and working professionals to full-time traders. Our foundational modules are simple, practical, and jargon-free, with hands-on examples, live doubt support, and case studies. Even if you've never opened a trading account, our beginner path guides you step-by-step from basics to advanced strategies.",
    },
  ],
  Courses: [
    {
      question: "What topics are covered in your flagship trading course?",
      answer:
        "Our flagship program includes: technical analysis, price action, candlestick patterns, support & resistance, intraday and swing strategies, options trading basics, futures contracts, NSE/BSE market structure, risk-reward systems, portfolio building, and data-backed decision-making using indicators and screeners. We also include bonus sessions on algo-trading insights, AI integration, and real case studies.",
    },
    {
      question: "Do your courses cover Futures and Options (F&O)?",
      answer:
        "Yes. We offer dedicated segments that teach you how to trade futures and options confidently in the Indian stock market. You’ll learn how to read open interest, option chain analysis, volatility strategies, Greeks, and common setups for weekly expiry and intraday trades. These are taught live with real charts and backtesting tools.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely. Our platform is fully online and includes pre-recorded content, downloadable PDFs, quizzes, and live mentoring calls. You can access all content anytime on mobile or desktop. Live classes are recorded too, in case you miss any session.",
    },
  ],
  Mentorship: [
    {
      question: "How does the mentorship process work at PathPledge?",
      answer:
        "Every learner gets access to a dedicated mentorship schedule. Our mentors are seasoned traders who provide weekly Zoom classes, homework reviews, portfolio tracking, and personal trading feedback. You can ask doubts, get chart reviews, and join live market analysis sessions. The mentorship also includes one-on-one calls if you need deeper clarification.",
    },
    {
      question: "What qualifications do your mentors have?",
      answer:
        "Our mentors are verified full-time traders and market professionals with 5–15+ years of experience across Indian equities, derivatives, and global markets. Some come from fintech, quant, and data science backgrounds. Each mentor is selected based on trading performance, clarity of communication, and coaching expertise.",
    },
    {
      question: "Will I get feedback on my trades?",
      answer:
        "Yes! You can submit your trade ideas, journal screenshots, and doubts to mentors through our platform or Discord community. Mentors will give personalized feedback and help you correct patterns that lead to losses. This helps you build consistency and confidence with every trade you take.",
    },
  ],
  Support: [
    {
      question: "What if I miss a live class?",
      answer:
        "Don’t worry. All sessions are recorded and uploaded within 12 hours. You’ll also receive notes, cheat sheets, and follow-up action steps. You can watch it as many times as you want and ask follow-up questions in the community chat.",
    },
    {
      question: "How do I connect with your team?",
      answer:
        "You can email us at 📧 support@pathpledge.in or call us at ☎️ +91-8130245100. We’re available Monday to Saturday, 10 AM to 7 PM. You can also use the contact form on our website or DM us on Instagram @pathpledge.",
    },
    {
      question: "Do you offer any free orientation or demo sessions?",
      answer:
        "Yes. We frequently organize free webinars and trial classes for those who want to experience our teaching style. You’ll get to attend a real session, see mentor interaction, and understand the learning structure before enrolling.",
    },
  ],
};

export const FAQSection = () => {
  const categories = Object.keys(faqData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-10">
        Have Questions About Trading? We’re Here to Help.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 text-sm sm:text-base
              ${
                selectedCategory === cat
                  ? "bg-[#D9070A] text-white shadow-md"
                  : "bg-white text-gray-800 hover:bg-purple-100"
              }`}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto text-left space-y-6">
        {(faqData[selectedCategory] || []).map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="font-semibold text-base sm:text-lg md:text-xl text-black flex justify-between items-center">
              {faq.question}
              <span className="text-xl font-bold text-[#D9070A]">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            {openIndex === index && (
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://wa.me/918827240770?text=Hi%20PathPledge%2C%20I%20have%20a%20question%20regarding%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-md font-bold text-white bg-[#D9070A] shadow-xl hover:bg-gray-900 transition"
        >
          Contact Us
        </a>

        <a
          href="#contact"
          className="px-8 py-3 rounded-md font-bold text-white bg-[#D9070A] shadow-xl hover:bg-gray-900 transition"
        >
          Free Demo
        </a>
      </div>
    </section>
  );
};
