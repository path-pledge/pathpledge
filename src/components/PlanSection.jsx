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
    <section className="bg-gray-100 py-12 px-6 sm:px-12 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left mb-12">
          Choose your plan
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <a
              key={index}
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#D9070A] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                <p className="text-lg font-semibold mb-4">{plan.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <div className="flex justify-end mt-6">
                <span className="text-xl font-bold text-gray-800 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
