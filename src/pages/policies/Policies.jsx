import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, RefreshCw } from 'lucide-react';

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center bg-black py-10 mb-12">
        <h1 className="text-5xl font-extrabold text-white">Policies</h1>
        <p className="mt-2 text-white text-lg">Home / Policies</p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Refund Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <RefreshCw className="w-8 h-8 text-[#D9070A] mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Refund Policy</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              We prioritize commitment and results. Therefore, no refund requests are eligible before course completion under any circumstances. Refunds, if applicable, will only be considered after full course completion, subject to evaluation of attendance, participation, coursework, and assessment performance. Any request made during or before completion of the program will be respectfully declined.
            </p>
          </div>
        </motion.section>

        {/* Payment Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <CreditCard className="w-8 h-8 text-[#D9070A] mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Payment Policy</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              To keep the process transparent and accessible:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>No credit/debit card EMI options are provided</li>
              <li>Payments are accepted only through direct and non-EMI modes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              By enrolling with us, you agree to our policies and join the journey with full ownership and dedication toward financial growth.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Policies;


