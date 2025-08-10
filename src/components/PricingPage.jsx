import React from 'react';
import { motion } from 'framer-motion';
import fyersImage from '../assets/fyers.png';

const Resources = () => {
  const brokers = [
    { name: 'Fyers', src: fyersImage, link: 'https://fyers.in' },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="text-center bg-black py-10 mb-12">
        <h1 className="text-5xl font-extrabold text-white">Pricing</h1>
        <p className="mt-2 text-white text-lg">Home / Pricing</p>
      </div>

      {/* Content Section */}
      <div className="py-14 px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Recommended Brokers for Stock Market
        </h2>

        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl p-8 bg-white shadow-md transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Broker Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={broker.src}
                  alt={`${broker.name} Logo`}
                  className="h-20 w-auto"
                  loading="lazy"
                />
              </div>

              {/* Account Opening Info */}
              <p className="text-xl font-serif text-center text-gray-800">
                OPEN YOUR DEMAT ACCOUNT IN{' '}
                <a
                  href={broker.link}
                  aria-label={`Open Demat Account in ${broker.name}`}
                  className="text-orange-600 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {broker.name}
                </a>
              </p>

              {/* Email Info */}
              <p className="text-gray-600 text-center mt-2 text-sm">
                Send your ID to{' '}
                <a
                  href="mailto:investmentsolutions@pathpledge.in"
                  className="text-orange-600 hover:underline"
                >
                  investmentsolutions@pathpledge.in
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
