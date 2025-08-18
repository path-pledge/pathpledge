import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const OffshoreStaffSection = () => {
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate("/contact?scrollToForm=true");
  };

  return (
    <section
      className="py-14 bg-gray-100"
      id="about-stock-market-training"
    >
      {/* ✅ SEO Schema for Video + Academy */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Best Stock Market Institute in Raipur - PathPledge",
          description:
            "Learn trading from PathPledge Academy, Raipur's best stock market learning platform. Covering BSE, NSE, Futures & Options with AI-driven education.",
          thumbnailUrl: "https://img.youtube.com/vi/n7SuPoRhyzE/maxresdefault.jpg",
          uploadDate: "2023-01-01",
          publisher: {
            "@type": "Organization",
            name: "PathPledge Academy",
            logo: {
              "@type": "ImageObject",
              url: "https://www.pathpledge.com/logo.png",
            },
          },
          contentUrl: "https://www.pathpledge.com",
          embedUrl: "https://www.youtube.com/embed/n7SuPoRhyzE",
        })}
      </script>

      <div className=" max-w-7xl mx-auto px-6 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* 🧠 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-sm font-bold text-[#D9070A] tracking-wider uppercase block">
            PathPledge Academy-Raipur
          </span>

          {/* ✅ Keyword Optimized Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
            Best Stock Market Training Institute in{" "}
            <span className="text-[#D9070A]">Raipur</span>
          </h2>

          <p className="text-black text-base md:text-lg leading-relaxed max-w-xl">
            At <strong>PathPledge Academy Raipur</strong>, we go beyond
            traditional education  we create{" "}
            <strong>AI-powered, data-driven trading experts</strong>. Recognized
            as the <strong>best stock market institute in Raipur</strong>, we
            specialize in <strong>BSE, NSE, Futures & Options</strong> training
            with real market exposure. Our mission is to shape{" "}
            <strong>ethical, consistent, and intelligent retail traders</strong>{" "}
            across India.
          </p>

          {/* 📱 Mobile-only Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="block md:hidden"
          >
            <div className="w-full max-w-md mx-auto pt-4">
              <iframe
                className="w-full aspect-video rounded-xl shadow-xl border-4 border-white"
                src="https://www.youtube.com/embed/n7SuPoRhyzE"
                title="Best Stock Market Training in Raipur - PathPledge"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* ✅ Feature Points Optimized */}
          <ul className="space-y-3 pt-4 flex flex-col items-center md:items-start">
            {[
              "India’s first AI-integrated trading education ecosystem in Raipur.",
              "Focused on BSE, NSE, Futures & Options with live market mentoring.",
              "Backed by professional traders, certified mentors, and data scientists.",
              "Transforming beginners into ethical & intelligent retail traders.",
            ].map((point, index) => (
              <li
                key={index}
                className="flex items-start text-black text-base md:text-lg max-w-md"
              >
                <FaCheckCircle className="text-[#D9070A] mr-2 mt-1 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* ✅ CTA with Keyword */}
          <div className="pt-4 text-center md:text-left">
            <button
              onClick={handleEnquiry}
              className="px-8 py-3 rounded-md text-white font-semibold bg-[#D9070A] shadow-xl hover:bg-black transition-all"
            >
              Enquiry for Raipur’s Best Stock Market Academy
            </button>
          </div>
        </motion.div>

        {/* 🖥️ Desktop Video */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md">
            <iframe
              className="w-full h-full aspect-video rounded-xl shadow-xl border-4 border-white"
              src="https://www.youtube.com/embed/n7SuPoRhyzE"
              title="Best Stock Market Institute in Raipur - PathPledge"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffshoreStaffSection;
