import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between text-sm">
        <button 
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        
        <div className="text-gray-300">
          Hello!! Welcome to  Calai
        </div>
        
        <div className="flex items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>calai@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+757 699-4478</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className=" mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#E8D1FF]">Privacy Policy</h1>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          We value your privacy and are committed to protecting your personal and business data.This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
        </p>

        <p className="text-gray-300 mb-4">We may collect:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10 ml-4">
          <li>Account information</li>
          <li>Business data provided by users</li>
          <li>Messages and conversations processed by the AI system</li>
          <li>Usage and analytics data</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-[#E8D1FF]">Data Sharing and Disclosure</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We do not sell your personal data.
        </p>

        <p className="text-gray-300 mb-4">We only share data when necessary to:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10 ml-4">
          <li>Provide Services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
