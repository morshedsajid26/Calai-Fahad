import React from 'react';

const SpecialOffersStep = ({ formData, updateFormData, onNext, onBack }) => {
  const handleOptionChange = (value) => {
    updateFormData({ promoteSpecialOffers: value });
  };

  const handleTextChange = (e) => {
    updateFormData({ specialOffersText: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    updateFormData({ allowCalaiSuggestOffers: e.target.checked });
  };

  const isFormValid = formData.promoteSpecialOffers === 'No' || 
    (formData.promoteSpecialOffers === 'Yes' && formData.specialOffersText.trim() !== '');

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 4 – Special Offers</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Would you like Calai to promote special offers to your customers?</h3>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex gap-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="promoteSpecialOffers"
              value="Yes"
              checked={formData.promoteSpecialOffers === 'Yes'}
              onChange={() => handleOptionChange('Yes')}
              className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="promoteSpecialOffers"
              value="No"
              checked={formData.promoteSpecialOffers === 'No'}
              onChange={() => handleOptionChange('No')}
              className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
            />
            <span className="text-white">No</span>
          </label>
        </div>
      </div>

      {formData.promoteSpecialOffers === 'Yes' && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your current offers</label>
            <p className="text-xs text-gray-400 mb-3">
              Examples:<br/>
              • Add a drink for £1<br/>
              • Free poppadom on orders over £20<br/>
              • Family Meal Deal £19.99
            </p>
            <textarea
              name="specialOffersText"
              value={formData.specialOffersText}
              onChange={handleTextChange}
              rows={4}
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#9810FA] transition-colors resize-none"
              placeholder="Enter your offers here..."
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="checkbox"
                name="allowCalaiSuggestOffers"
                checked={formData.allowCalaiSuggestOffers}
                onChange={handleCheckboxChange}
                className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#1a1a1a] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
              />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Allow Calai to suggest these offers during customer calls.
            </span>
          </label>
        </div>
      )}

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

export default SpecialOffersStep;
