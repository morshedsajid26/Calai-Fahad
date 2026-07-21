import React from 'react';
import InputField from '@/components/Inputfield';
import Dropdown from '@/components/Dropdown';

const BusinessDetailsStep = ({ formData, updateFormData, onNext, onBack }) => {
  const handleSelectChange = (name, value) => {
    updateFormData({ [name]: value });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const isFormValid = 
    formData.businessName.trim() !== '' &&
    formData.businessType !== '' &&
    formData.contactName.trim() !== '' &&
    formData.emailAddress.trim() !== '' &&
    formData.contactNumber.trim() !== '' &&
    formData.businessAddress.trim() !== '' &&
    formData.isAuthorised;

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 1 – Business Details</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Tell us about your business</h3>
      </div>

      <div className="space-y-4 mb-8">
        <InputField
          label="Business Name *"
          name="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Enter business name"
          labelClass="!text-sm !font-medium !text-gray-300 !mb-1 !block"
          inputClass="!w-full !bg-[#0A0F24] !text-white !border !border-[#1C398E]/50 !placeholder-gray-500 focus:!border-[#C27AFF] !py-3 !px-4 !rounded-xl !text-sm focus:!outline-none !transition-colors shadow-inner"
        />

        <div className="flex flex-col gap-1.5 z-50">
          <Dropdown
            label="Business Type *"
            placeholder="Select business type"
            options={['Takeaway', 'Restaurant', 'Other']}
            value={formData.businessType}
            onSelect={(val) => handleSelectChange('businessType', val)}
            labelClass="!text-sm !font-medium !text-gray-300 !mb-1 !block"
            inputClass="!w-full !bg-[#0A0F24] !text-white !border !border-[#1C398E]/50 !placeholder-gray-500 focus:!border-[#C27AFF] !py-3 !px-4 !rounded-xl !text-sm focus:!outline-none !transition-colors shadow-inner"
            optionClass="!bg-[#0A0F24] !text-white border border-[#1C398E]/50"
            icon="!text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Contact Name *"
            name="contactName"
            type="text"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="First and last name"
            labelClass="!text-sm !font-medium !text-gray-300 !mb-1 !block"
            inputClass="!w-full !bg-[#0A0F24] !text-white !border !border-[#1C398E]/50 !placeholder-gray-500 focus:!border-[#C27AFF] !py-3 !px-4 !rounded-xl !text-sm focus:!outline-none !transition-colors shadow-inner"
          />
          <InputField
            label="Email Address *"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="name@example.com"
            labelClass="!text-sm !font-medium !text-gray-300 !mb-1 !block"
            inputClass="!w-full !bg-[#0A0F24] !text-white !border !border-[#1C398E]/50 !placeholder-gray-500 focus:!border-[#C27AFF] !py-3 !px-4 !rounded-xl !text-sm focus:!outline-none !transition-colors shadow-inner"
          />
        </div>

        <InputField
          label="Contact Number *"
          name="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Phone number"
          labelClass="!text-sm !font-medium !text-gray-300 !mb-1 !block"
          inputClass="!w-full !bg-[#0A0F24] !text-white !border !border-[#1C398E]/50 !placeholder-gray-500 focus:!border-[#C27AFF] !py-3 !px-4 !rounded-xl !text-sm focus:!outline-none !transition-colors shadow-inner"
        />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Business Address *</label>
          <textarea
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            rows={3}
            className="w-full bg-[#0A0F24] text-white border border-[#1C398E]/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C27AFF] transition-colors resize-none placeholder-gray-500 shadow-inner"
            placeholder="Full business address"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="isAuthorised"
              checked={formData.isAuthorised}
              onChange={handleChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#1a1a1a] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            I confirm that I am authorised to act on behalf of this business.
          </span>
        </label>
      </div>

      <div className="flex justify-end pt-6 border-t border-white/5">
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

export default BusinessDetailsStep;
