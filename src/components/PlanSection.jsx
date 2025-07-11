import React from "react";

const plans = [
  {
    title: "Standard",
    price: "Free",
    description:
      "For the financial basics — everything you need for better money management in one place. Sending money abroad or sticking to a budget has never been easier.",
    link: "https://wa.me/918827240770?text=Hi%20PathPledge%2C%20I%20am%20interested%20in%20the%20Standard%20plan.",
  },
  {
    title: "Plus",
    price: "₹3,000 /month",
    description:
      "For the smart spender — access additional benefits like better limits for spending, and insurance for your purchases, on our affordable paid plan.",
    link: "https://wa.me/918827240770?text=Hi%20PathPledge%2C%20I%20am%20interested%20in%20the%20Plus%20plan.%20Please%20share%20details.",
  },
  {
    title: "Premium",
    price: "₹7,999 /month",
    description:
      "For elevating every day — access exclusive subscriptions, better savings rates, and exchange unlimited amounts of money.",
    link: "https://wa.me/918827240770?text=Hi%20PathPledge%2C%20I%20want%20to%20know%20more%20about%20the%20Premium%20plan.",
  },
];

const PlanSection = () => {
  return (
    <div className="bg-gray-100 text-black p-8 rounded-2xl">
      <h2 className="text-5xl font-bold  space-y-6 mb-4 text-center sm:text-left">
        Choose your plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <a
            key={index}
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-[#D9070A] rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition transform cursor-pointer"
          >
            <div>
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <p className="text-md font-bold mt-1">{plan.price}</p>
              <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
            </div>
            <div className="flex justify-end mt-3">
              <span className="text-gray-900 font-extrabold text-xl">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlanSection;
