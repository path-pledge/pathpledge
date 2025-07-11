import React from 'react';
import zerodhaImage from '../assets/Z.svg';
import upstoxImage from '../assets/up.svg';

const Resources = () => {
  const brokers = [
    { name: 'Zerodha', src: zerodhaImage, link: 'https://bit.ly/3gyhIWN' },
    { name: 'Upstox', src: upstoxImage, link: 'https://upstox.com' },
  ];

  return (
    <div className="bg-gray-100">
      <div className="text-center bg-black py-10 mb-12">
        <h1 className="text-5xl  font-extrabold text-white">Pricing</h1>
        <p className="mt-2 text-white  text-lg">Home / Pricing</p>
      </div>

      <div className="py-14 px-6 md:px-10">
        <h2 className="text-4xl font-bold  text-center text-gray-800 mb-12">
          Recommended Brokers for Stock Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {brokers.map((broker) => (
            <div
              key={broker.name}
              className="rounded-2xl p-8 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={broker.src}
                  alt={`${broker.name} Logo`}
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-xl font-serif text-center text-gray-800">
                OPEN YOUR DEMAT ACCOUNT IN{' '}
                <a
                  href={broker.link}
                  className="text-orange-600 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {broker.name}
                </a>
              </p>

              <p className="text-gray-600  text-center mt-2 text-sm">
                Send your ID to{' '}
                <a
                  href="mailto:investmentsolutions@pathpledge.in"
                  className="text-orange-600 hover:underline"
                >
                  investmentsolutions@pathpledge.in
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
