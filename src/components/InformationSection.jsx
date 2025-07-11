import React from 'react';
import { Download, FileText, MonitorCheck, CalendarCheck } from 'lucide-react';
import brochurePDF from '../assets/brochure.pdf';
import ami from '../assets/14.png';
import { motion } from 'framer-motion';

const InformationSection = () => {
  const steps = [
    {
      title: 'Download & Read Brochure',
      description: (
        <>
          Download our{' '}
          <a href={brochurePDF} download className="text-[#D9070A] hover:underline">
            Brochure
          </a>
          , Read it carefully. All the answers to your questions are provided in the brochure.
        </>
      ),
      icon: <Download className="w-10 h-10 text-red-500" />,
    },
    {
      title: 'Register & Enrollment',
      description:
        'Complete the registration process by paying the required amount of registration, and take a screenshot of the successful payment.',
      icon: <FileText className="w-10 h-10 text-red-500" />,
    },
    {
      title: 'Confirmation',
      description: (
        <>
          Send the screenshot of successful payment on WhatsApp Number{' '}
          <a href="https://wa.me/919340210770" target="_blank" rel="noopener noreferrer" className="text-[#D9070A] hover:underline">
            (+91-9340210770)
          </a>
        </>
      ),
      icon: <CalendarCheck className="w-10 h-10 text-red-500" />,
    },
    {
      title: 'Verification',
      description:
        'As soon as your payment is verified, you will receive details of your assigned Relationship Manager.',
      icon: <MonitorCheck className="w-10 h-10 text-red-500" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full"
    >
      {/* ✅ Background Image on small screens only */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src={ami}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Content Block */}
      <div className="relative z-10 bg-white/80 md:bg-gray-100 p-6 sm:p-8 flex flex-col md:flex-row items-stretch justify-around backdrop-blur-md space-y-8 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-red-500 font-bold">INFORMATION</h3>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">How to Apply?</h1>
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div>{step.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right-side Image only on md+ */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img
            src={ami}
            alt="Information Illustration"
            className="w-full max-w-md h-auto rounded-full bg-orange-100"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default InformationSection;
