import React from 'react';

const PersonalGreetingStep = ({ formData, updateFormData, onNext, onBack }) => {
  const handleOptionChange = (value) => {
    updateFormData({ greetingType: value });
  };

  const handleTextChange = (e) => {
    updateFormData({ customGreeting: e.target.value });
  };

  const isFormValid = formData.greetingType === 'Standard Greeting' || 
    (formData.greetingType === 'Custom Greeting' && formData.customGreeting.trim() !== '');

  const standardGreetingText = `Hi, you're through to ${formData.businessName || '[Business Name]'} and I'm their virtual assistant. Would you like to place an order?`;

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 5 – Personal Greeting</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Make Calai sound like part of your team</h3>
      </div>

      <div className="space-y-6 mb-8">
        <label className="flex items-start gap-4 cursor-pointer p-4 border rounded-xl transition-all hover:bg-white/5 border-white/10">
          <div className="flex items-center justify-center mt-1">
            <input
              type="radio"
              name="greetingType"
              value="Standard Greeting"
              checked={formData.greetingType === 'Standard Greeting'}
              onChange={() => handleOptionChange('Standard Greeting')}
              className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
            />
          </div>
          <div>
            <span className="block text-white font-medium mb-2">Use Calai Standard Greeting</span>
            <div className="bg-[#1a1a1a] p-3 rounded-lg border border-white/5 text-gray-300 text-sm">
              "{standardGreetingText}"
            </div>
          </div>
        </label>

        <label className="flex items-start gap-4 cursor-pointer p-4 border rounded-xl transition-all hover:bg-white/5 border-white/10">
          <div className="flex items-center justify-center mt-1">
            <input
              type="radio"
              name="greetingType"
              value="Custom Greeting"
              checked={formData.greetingType === 'Custom Greeting'}
              onChange={() => handleOptionChange('Custom Greeting')}
              className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
            />
          </div>
          <span className="block text-white font-medium">Use Custom Greeting</span>
        </label>
      </div>

      {formData.greetingType === 'Custom Greeting' && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300 mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">Enter your custom greeting</label>
          <textarea
            name="customGreeting"
            value={formData.customGreeting}
            onChange={handleTextChange}
            rows={4}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#9810FA] transition-colors resize-none"
            placeholder="Type your custom greeting here..."
          />
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

export default PersonalGreetingStep;
