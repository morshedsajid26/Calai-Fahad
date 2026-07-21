import React from 'react';
import { motion } from 'framer-motion';

const SuccessStep = () => {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-linear-to-tr from-[#10B981] to-[#34D399] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
        Thank You
      </h1>
      
      <p className="text-white text-lg mb-6 max-w-lg leading-relaxed font-medium">
        We've received your information successfully.
      </p>
      
      <p className="text-gray-300 text-sm mb-6 max-w-lg">
        A member of the Calai team will review your submission and contact you shortly to discuss your requirements and answer any questions.
      </p>

      <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 mb-8 text-left max-w-lg w-full">
        <p className="text-gray-300 text-sm mb-4 font-medium">
          You may be asked to provide additional information during the setup process, such as:
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#00D3F3] mt-0.5">•</span>
            Business verification documents
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00D3F3] mt-0.5">•</span>
            Company logo
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00D3F3] mt-0.5">•</span>
            Printer information (if applicable)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00D3F3] mt-0.5">•</span>
            Additional business information required for setup
          </li>
        </ul>
      </div>

      <p className="text-gray-300 text-sm max-w-lg mb-8">
        A member of the Calai team will contact you shortly.
      </p>
      
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 bg-white/5 hover:bg-white/10 rounded-full text-white font-medium border border-white/10 transition-all inline-block"
      >
        Return to Home
      </motion.a>
    </div>
  );
};

export default SuccessStep;
