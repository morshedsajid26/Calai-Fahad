import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ThankYouContact = () => {
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your interest, our team will be in touch shortly.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#1C398E] hover:bg-[#152483] text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouContact;
