import { useState } from "react";
import { Helmet } from "react-helmet"; // ✅ SEO Title + Meta

// ✅ FAQ Data with Keywords Optimized
const faqData = {
  General: [
    {
      question: "What is PathPledge and why is it the best stock market institute in Raipur?",
      answer:
        "PathPledge is India’s premier AI-powered stock market training academy based in Raipur. We help learners master NSE and BSE trading with AI-driven tools, live mentoring, and data-backed strategies. Recognized as the best stock market institute in Raipur, our mission is to guide beginners and professionals towards consistent success.",
    },
    {
      question: "How is PathPledge different from other stock market courses in India?",
      answer:
        "Unlike regular theory-driven courses, PathPledge provides real-time market learning, backtesting labs, and AI-integrated trade setups. We focus on trading psychology, risk management, and consistency. This makes us one of the most trusted institutes for stock market training in India.",
    },
    {
      question: "Do I need finance background to join PathPledge in Raipur?",
      answer:
        "No. Our Raipur-based stock market training programs are designed for students, professionals, and traders. We teach from basics to advanced level in a simple, practical way so anyone can become a confident trader.",
    },
  ],
  Courses: [
    {
      question: "What topics are covered in PathPledge’s flagship stock market course in Raipur?",
      answer:
        "Our flagship program includes technical analysis, candlestick patterns, futures & options trading, price action, algo insights, and data-backed strategies. Students also learn NSE/BSE market structure, risk-reward systems, and portfolio building.",
    },
    {
      question: "Does PathPledge cover Futures and Options (F&O) trading?",
      answer:
        "Yes. We teach advanced F&O strategies including option chain analysis, Greeks, volatility trading, and expiry day setups with real market examples. This is one reason why PathPledge is considered the best institute for F&O trading in Raipur.",
    },
  ],
  Mentorship: [
    {
      question: "How does mentorship work at PathPledge Raipur?",
      answer:
        "Learners get access to weekly mentor-led Zoom classes, portfolio feedback, live trading sessions, and personal guidance. Our mentors are full-time traders with 5–15+ years of experience.",
    },
    {
      question: "Do mentors provide feedback on student trades?",
      answer:
        "Yes! Students submit trade journals and get personalized mentor feedback. This helps identify mistakes, reduce losses, and build long-term consistency.",
    },
  ],
};

export const FAQSection = () => {
  const categories = Object.keys(faqData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* ✅ SEO META */}
      <Helmet>
        <title>FAQs - Best Stock Market Training in Raipur | PathPledge</title>
        <meta
          name="description"
          content="Find answers to FAQs about PathPledge - the best stock market institute in Raipur. Learn about NSE, BSE, Futures & Options, AI-powered trading, and mentorship programs."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.General.concat(faqData.Courses, faqData.Mentorship).map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
        FAQs About Stock Market Training in Raipur
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-10">
        Have questions about India’s best stock market courses? PathPledge Raipur is here to guide you.
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
      <div className="max-w-6xl mx-auto text-left space-y-6">
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
          href="https://wa.me/918827240770?text=Hi%20PathPledge%2C%20I%20want%20to%20know%20about%20Raipur%20stock%20market%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-md font-bold text-white bg-[#D9070A] shadow-xl hover:bg-gray-900 transition"
        >
          Contact Us
        </a>

        <a
          href="https://www.youtube.com/watch?v=n7SuPoRhyzE"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-md font-bold text-white bg-[#D9070A] shadow-xl hover:bg-gray-900 transition"
        >
          Free Demo
        </a>
      </div>
    </section>
  );
};
