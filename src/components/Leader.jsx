import React from "react";

const leaderboardData = {
  "June 2025": [
    {
      Name: "Rahul Sharma",
      "Capital Used": "₹50,000",
      Profit: "₹12,500",
      ROI: "25%",
      Instrument: "Options",
      Experience: "3 months",
      Student: "Yes",
    },
    {
      Name: "Sneha Reddy",
      "Capital Used": "₹1,00,000",
      Profit: "₹18,000",
      ROI: "18%",
      Instrument: "Futures",
      Experience: "6 months",
      Student: "Yes",
    },
    {
      Name: "Manoj Patel",
      "Capital Used": "₹75,000",
      Profit: "₹10,000",
      ROI: "13.3%",
      Instrument: "Equity",
      Experience: "4 months",
      Student: "Yes",
    },
    {
      Name: "Aarti Nair",
      "Capital Used": "₹40,000",
      Profit: "₹8,000",
      ROI: "20%",
      Instrument: "Options",
      Experience: "2 months",
      Student: "Yes",
    },
    {
      Name: "Ravi Verma",
      "Capital Used": "₹90,000",
      Profit: "₹13,500",
      ROI: "15%",
      Instrument: "F&O",
      Experience: "8 months",
      Student: "Yes",
    },
    {
      Name: "Kiran Joshi",
      "Capital Used": "₹60,000",
      Profit: "₹9,600",
      ROI: "16%",
      Instrument: "Options",
      Experience: "5 months",
      Student: "Yes",
    },
    {
      Name: "Sahil Khan",
      "Capital Used": "₹1,20,000",
      Profit: "₹21,000",
      ROI: "17.5%",
      Instrument: "Futures",
      Experience: "7 months",
      Student: "Yes",
    },
    {
      Name: "Neha Thakur",
      "Capital Used": "₹85,000",
      Profit: "₹12,750",
      ROI: "15%",
      Instrument: "Equity",
      Experience: "6 months",
      Student: "Yes",
    },
    {
      Name: "Deepak Rao",
      "Capital Used": "₹55,000",
      Profit: "₹7,700",
      ROI: "14%",
      Instrument: "Options",
      Experience: "3 months",
      Student: "Yes",
    },
    {
      Name: "Pooja Meena",
      "Capital Used": "₹1,10,000",
      Profit: "₹19,800",
      ROI: "18%",
      Instrument: "F&O",
      Experience: "9 months",
      Student: "Yes",
    },
  ],
  "May 2025": [
    {
      Name: "Kritika Mehta",
      "Capital Used": "₹30,000",
      Profit: "₹6,000",
      ROI: "20%",
      Instrument: "Options",
      Experience: "2 months",
      Student: "Yes",
    },
    {
      Name: "Vikram Desai",
      "Capital Used": "₹1,50,000",
      Profit: "₹22,000",
      ROI: "14.6%",
      Instrument: "F&O",
      Experience: "1 year",
      Student: "Yes",
    },
    {
      Name: "Priya Raj",
      "Capital Used": "₹45,000",
      Profit: "₹9,000",
      ROI: "20%",
      Instrument: "Equity",
      Experience: "3 months",
      Student: "Yes",
    },
    {
      Name: "Ankur Sethi",
      "Capital Used": "₹80,000",
      Profit: "₹12,000",
      ROI: "15%",
      Instrument: "Options",
      Experience: "5 months",
      Student: "Yes",
    },
    {
      Name: "Tanvi Bansal",
      "Capital Used": "₹95,000",
      Profit: "₹14,250",
      ROI: "15%",
      Instrument: "Futures",
      Experience: "7 months",
      Student: "Yes",
    },
    {
      Name: "Harsh Vardhan",
      "Capital Used": "₹1,10,000",
      Profit: "₹22,000",
      ROI: "20%",
      Instrument: "Options",
      Experience: "8 months",
      Student: "Yes",
    },
    {
      Name: "Shivani Mishra",
      "Capital Used": "₹70,000",
      Profit: "₹10,500",
      ROI: "15%",
      Instrument: "Equity",
      Experience: "6 months",
      Student: "Yes",
    },
    {
      Name: "Gaurav Jain",
      "Capital Used": "₹50,000",
      Profit: "₹8,000",
      ROI: "16%",
      Instrument: "Options",
      Experience: "4 months",
      Student: "Yes",
    },
    {
      Name: "Aman Kapoor",
      "Capital Used": "₹1,00,000",
      Profit: "₹18,000",
      ROI: "18%",
      Instrument: "Futures",
      Experience: "6 months",
      Student: "Yes",
    },
    {
      Name: "Ruchi Pandey",
      "Capital Used": "₹60,000",
      Profit: "₹9,000",
      ROI: "15%",
      Instrument: "Equity",
      Experience: "5 months",
      Student: "Yes",
    },
  ],
};


const Leader = () => {
  const months = Object.keys(leaderboardData);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
        PathPledge Hall of Fame Leaderboard
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-red-600 text-center">
        Our Top Performing Students
      </h2>

      {/* List All Months */}
      {months.map((month) => (
        <div key={month} className="mt-10">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#D9070A] text-center mb-4">
            {month}
          </h3>

          {/* Responsive Scrollable Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full font-serif border rounded">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Name",
                    "Capital Used",
                    "Profit",
                    "ROI",
                    "Instrument",
                    "Experience",
                    "Student",
                  ].map((header) => (
                    <th
                      key={header}
                      className="p-3 border-b text-left text-sm whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaderboardData[month].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    {Object.values(row).map((value, i) => (
                      <td
                        key={i}
                        className="p-3 text-sm whitespace-nowrap"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Why This Matters Section */}
      <div className="mt-14 text-center">
        <h3 className="text-3xl sm:text-5xl text-[#D9070A] font-extrabold">
          Why This Matters
        </h3>
        <div className="text-gray-600 text-justify mt-4 space-y-4 max-w-5xl mx-auto px-2">
          <p>
            At PathPledge, we believe trading isn't just about numbers—it's about discipline, precision, and growth.
            Our leaderboard is a celebration of learners who have consistently applied data-driven strategies,
            risk management, and trading psychology to generate real profits in real markets.
          </p>
          <p>
            These top-performing students serve as a beacon for the community—showing what's possible when you combine the
            right education with consistency and focus. From beginners making their first trades to aspiring professionals
            managing live portfolios, each name here represents a story of commitment and transformation.
          </p>
          <p>
            Our Hall of Fame not only rewards results—it reinforces our mission: to make every individual a smart,
            independent trader equipped with the tools of the future. The leaderboard is living proof that with PathPledge’s
            mentorship, live guidance, and AI-backed insights, sustainable success in the stock market is achievable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leader;