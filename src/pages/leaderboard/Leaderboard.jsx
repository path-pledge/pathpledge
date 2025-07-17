import Leader from "../../components/Leader";
import LeaderboardPage from "../../components/LeaderboardPage";
import {FAQSection} from "../../components/FAQSection";

 const leaderboardData = {
  "January 2024": [
    { Name: "Amit", "Capital Used": "$1000", Profit: "$1250", ROI: "125%", Instrument: "Gold", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Pooja", "Capital Used": "$1200", Profit: "$1560", ROI: "130%", Instrument: "Silver", Experience: "2 months", Student: "Mumbai Center" },
    { Name: "Ravi", "Capital Used": "$900", Profit: "$1080", ROI: "120%", Instrument: "Oil", Experience: "1 month", Student: "Kolkata Center" },
    { Name: "Sita", "Capital Used": "$1500", Profit: "$1800", ROI: "120%", Instrument: "Gold", Experience: "3 months", Student: "Pune Center" },
    { Name: "Arjun", "Capital Used": "$1100", Profit: "$1375", ROI: "125%", Instrument: "Silver", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Kavita", "Capital Used": "$1300", Profit: "$1625", ROI: "125%", Instrument: "Forex", Experience: "2 months", Student: "Ahmedabad Center" },
    { Name: "Rahul", "Capital Used": "$950", Profit: "$1140", ROI: "120%", Instrument: "Gold", Experience: "1 month", Student: "Jaipur Center" },
    { Name: "Sneha", "Capital Used": "$1250", Profit: "$1563", ROI: "125%", Instrument: "Silver", Experience: "1 month", Student: "Kolkata Center" },
    { Name: "Rohit", "Capital Used": "$1600", Profit: "$2000", ROI: "125%", Instrument: "Oil", Experience: "2 months", Student: "Delhi Center" },
    { Name: "Meera", "Capital Used": "$1800", Profit: "$2160", ROI: "120%", Instrument: "Gold", Experience: "3 months", Student: "Pune Center" }
  ],
  "February 2024": [
    { Name: "Anil", "Capital Used": "$1000", Profit: "$1300", ROI: "130%", Instrument: "Gold", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Kiran", "Capital Used": "$1200", Profit: "$1440", ROI: "120%", Instrument: "Silver", Experience: "2 months", Student: "Mumbai Center" },
    { Name: "Sameer", "Capital Used": "$950", Profit: "$1140", ROI: "120%", Instrument: "Oil", Experience: "1 month", Student: "Pune Center" },
    { Name: "Nisha", "Capital Used": "$1300", Profit: "$1690", ROI: "130%", Instrument: "Forex", Experience: "3 months", Student: "Delhi Center" },
    { Name: "Rakesh", "Capital Used": "$1250", Profit: "$1500", ROI: "120%", Instrument: "Gold", Experience: "1 month", Student: "Jaipur Center" },
    { Name: "Pallavi", "Capital Used": "$1400", Profit: "$1680", ROI: "120%", Instrument: "Silver", Experience: "2 months", Student: "Delhi Center" },
    { Name: "Sanjay", "Capital Used": "$1600", Profit: "$1920", ROI: "120%", Instrument: "Oil", Experience: "1 month", Student: "Pune Center" },
    { Name: "Gita", "Capital Used": "$1750", Profit: "$2187", ROI: "125%", Instrument: "Forex", Experience: "3 months", Student: "Kolkata Center" },
    { Name: "Tarun", "Capital Used": "$900", Profit: "$1080", ROI: "120%", Instrument: "Gold", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Rani", "Capital Used": "$1300", Profit: "$1560", ROI: "120%", Instrument: "Silver", Experience: "2 months", Student: "Delhi Center" }
  ],
  "March 2024": [
    { Name: "Varun", "Capital Used": "$1000", Profit: "$1250", ROI: "125%", Instrument: "Oil", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Ananya", "Capital Used": "$1200", Profit: "$1500", ROI: "125%", Instrument: "Gold", Experience: "2 months", Student: "Pune Center" },
    { Name: "Suresh", "Capital Used": "$1300", Profit: "$1625", ROI: "125%", Instrument: "Silver", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Deepa", "Capital Used": "$1500", Profit: "$1800", ROI: "120%", Instrument: "Forex", Experience: "3 months", Student: "Delhi Center" },
    { Name: "Rajiv", "Capital Used": "$1600", Profit: "$1920", ROI: "120%", Instrument: "Oil", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Meena", "Capital Used": "$1300", Profit: "$1625", ROI: "125%", Instrument: "Silver", Experience: "2 months", Student: "Kolkata Center" },
    { Name: "Arvind", "Capital Used": "$1000", Profit: "$1300", ROI: "130%", Instrument: "Gold", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Sonal", "Capital Used": "$1250", Profit: "$1500", ROI: "120%", Instrument: "Silver", Experience: "1 month", Student: "Pune Center" },
    { Name: "Rita", "Capital Used": "$900", Profit: "$1080", ROI: "120%", Instrument: "Oil", Experience: "1 month", Student: "Delhi Center" },
    { Name: "Karan", "Capital Used": "$1300", Profit: "$1690", ROI: "130%", Instrument: "Forex", Experience: "2 months", Student: "Delhi Center" }
  ],
  // Similar way you can continue adding for April–December
};
const LeaderPage = () => {
  return (
    <div>
      <LeaderboardPage />
      <Leader data={leaderboardData} />
      <FAQSection />
    </div>
  );
};

export default LeaderPage;
