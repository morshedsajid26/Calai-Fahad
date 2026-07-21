import React from 'react';
import { motion } from 'framer-motion';

const WelcomeStep = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src="/title.png" alt="Calai Logo" className="h-8 mb-8 object-contain" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-l from-[#9810FA] to-[#C27AFF] bg-clip-text text-transparent">
        Welcome to Calai
      </h1>
      <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
        Answer a few quick questions so we can understand your business and prepare your Calai AI assistant.
      </p>
      <p className="text-gray-400 text-sm mb-10 max-w-lg">
        A member of our team will review your information and contact you shortly to discuss your requirements and complete your setup.
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-10 py-4 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] rounded-full text-white font-bold text-lg border border-[#0F42FF] shadow-[0_0_20px_rgba(15,66,255,0.4)] hover:shadow-[0_0_30px_rgba(15,66,255,0.6)] transition-all"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default WelcomeStep;
