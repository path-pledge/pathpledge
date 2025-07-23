import React from "react";
import AyushImage from "../assets/18.png";
import BhushanImage from "../assets/Bhushan.jpg";

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16  ">
      {/* Header */}
      <div className="text-center w-full bg-black py-10 mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Leaderboard</h1>
        <p className="text-white mt-1 text-sm sm:text-base">Home / Leaderboard</p>
      </div>

      {/* Section 1: Ayush */}
      <div className="bg-white rounded-2xl shadow p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-1">
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Ayush Patel is the visionary force behind PathPledge — a trader, investor, and educator with a mission to bring structured,
            system-based trading to every aspiring learner. With over 1,000+ students mentored personally, Ayush combines data-driven strategies
            with behavioral insights to create a truly transformative learning experience.
            <br /><br />
            Having witnessed how misinformation and “quick-win” hype flood the trading space, Ayush built PathPledge as a haven for
            committed learners who seek discipline, not shortcuts. His sessions go far beyond theory — they focus on trading as a long-term
            profession, demanding consistency, psychology control, and structured decision-making.
            <br /><br />
            At PathPledge, Ayush leads:
            <ul className="list-disc list-inside mt-2">
              <li>Foundational trading bootcamps, building mindset and risk frameworks from scratch</li>
              <li>Advanced system-building masterclasses using data, journaling, and trade tracking</li>
              <li>Live trade review panels focused on execution clarity, market reading, and probability stacking</li>
              <li>1-on-1 mentorship programs to build custom trading plans based on lifestyle, capital, and goals</li>
            </ul>
            <br />
            Under Ayush’s leadership, PathPledge is not just a course provider — it's becoming India's most trusted <strong>trading performance hub</strong>,
            built on integrity, realism, and continuous improvement.
            <br /><br />
            “Let’s be real – trading isn’t about quick wins or following flashy indicators like you see all over social media.
            If you’re serious about trading, it’s about understanding the market, sticking to a system, and staying consistent.
            <br /><br />
            I’m not going to promise you’ll get rich overnight. What I will do is teach you how to think like a professional,
            follow strategies and methods that actually work, and build a trading career that lasts. It’s not about lucky trades,
            it’s about making smart moves, managing risk, and winning consistently.”
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-right mt-6">-Ayush Patel</h2>
          <h3 className="text-base sm:text-lg font-bold text-[#D9070A] text-right">Founder, PathPledge</h3>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#D9070A] opacity-30 blur-3xl animate-pulse"></div>
          <img
            src={AyushImage}
            alt="Ayush"
            className="relative rounded-xl w-64 h-64 sm:w-72 sm:h-72 object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Section 2: Bhusha */}
      <div className="bg-white rounded-2xl shadow mt-8 p-6 sm:p-8 flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
        <div className="flex-1">
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Bhusha is not just a mentor—she’s the strategic backbone behind many successful traders nurtured at PathPledge.
            With a background rooted in financial analytics and behavioral finance, she brings a rare combination of market logic,
            emotional intelligence, and structured trading to the ecosystem.
            <br /><br />
            Over the years, she has mastered navigating through different market cycles—bullish surges, bearish dips, and sideways
            indecision—and has mentored hundreds of learners on building resilient trading frameworks. Her sessions emphasize
            discipline over impulse, strategy over speculation, and learning over blind execution.
            <br /><br />
            At PathPledge, Bhusha leads:
            <ul className="list-disc list-inside mt-2">
              <li>Live strategy-building workshops focused on intraday, swing, and F&O segments</li>
              <li>Custom model development, where students learn to blend indicators with data-backed decision making</li>
              <li>Mindset development sessions tackling trading psychology, fear management, and decision clarity</li>
              <li>Weekly review calls, guiding learners on refining entries, managing exits, and building precision</li>
            </ul>
            <br />
            Recognized for her clarity, consistency, and command over market behavior, Bhusha has become an anchor of trust and
            performance at PathPledge. Her mentorship has led many students from hesitation to precision, from emotion-led trades
            to consistent profitability.
            <br /><br />
            “I don’t just want students to trade; I want them to think like traders,” says Bhusha.
            Through her unwavering commitment, Bhusha continues to shape PathPledge into not just a learning platform, but a
            performance-driven trading incubator for the next generation of market leaders.
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-6">Bhusha</h2>
          <h3 className="text-base sm:text-lg font-bold text-[#D9070A]">Trading Strategist & Educator</h3>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#F97316] opacity-30 blur-3xl animate-pulse"></div>
          <img
            src={BhushanImage}
            alt="Bhusha"
            className="relative rounded-xl w-64 h-64 sm:w-72 sm:h-72 object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
