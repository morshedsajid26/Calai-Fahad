import React from 'react';

const ReviewSubmitStep = ({ formData, updateFormData, onSubmit, onBack }) => {
  const handleCheckboxChange = (e) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  const isFormValid = 
    formData.confirmAccurate && 
    formData.agreeContact && 
    formData.agreePrivacy && 
    formData.agreeTerms;

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 7 – Review & Submit</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Final checks before submission</h3>
      </div>

      <div className="space-y-4 mb-8 bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="confirmAccurate"
              checked={formData.confirmAccurate}
              onChange={handleCheckboxChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#111] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            I confirm that the information provided is accurate.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="agreeContact"
              checked={formData.agreeContact}
              onChange={handleCheckboxChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#111] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            I agree to be contacted by the Calai team regarding my enquiry.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              checked={formData.agreePrivacy}
              onChange={handleCheckboxChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#111] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            I have read and agree to the Privacy Notice.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#111] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            I have read and agree to the Terms & Conditions.
          </span>
        </label>
      </div>

      <div className="flex justify-between pt-6 border-t border-white/5">
        <button
          onClick={onBack}
          className="px-8 py-3 rounded-full font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            isFormValid 
              ? 'bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white border border-[#0F42FF] shadow-[0_0_15px_rgba(15,66,255,0.4)] hover:shadow-[0_0_20px_rgba(15,66,255,0.6)] cursor-pointer' 
              : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
          }`}
        >
          Submit Enquiry
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;
