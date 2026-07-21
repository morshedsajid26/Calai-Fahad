import React from 'react';

const PhoneSetupStep = ({ formData, updateFormData, onNext, onBack }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const providers = [
    'BT',
    'Virgin Media',
    'Sky',
    'Vodafone',
    'EE',
    'TalkTalk',
    'Plusnet',
    'Gamma',
    'Other'
  ];

  const isFormValid = formData.businessPhoneNumber.trim() !== '' && formData.phoneLineProvider !== '';

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 3 – Phone Setup</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Configure your phone integration</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Business Phone Number *</label>
          <input
            type="tel"
            name="businessPhoneNumber"
            value={formData.businessPhoneNumber}
            onChange={handleChange}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#9810FA] transition-colors"
            placeholder="e.g. 01234 567890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Current Phone Line Provider *</label>
          <select
            name="phoneLineProvider"
            value={formData.phoneLineProvider}
            onChange={handleChange}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#9810FA] transition-colors appearance-none"
          >
            <option value="" disabled>Select your provider</option>
            {providers.map(provider => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t border-white/5">
        <button
          onClick={onBack}
          className="px-8 py-3 rounded-full font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            isFormValid 
              ? 'bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white border border-[#0F42FF] shadow-[0_0_15px_rgba(15,66,255,0.4)] hover:shadow-[0_0_20px_rgba(15,66,255,0.6)] cursor-pointer' 
              : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PhoneSetupStep;
