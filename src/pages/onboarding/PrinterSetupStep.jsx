import React from 'react';

const PrinterSetupStep = ({ formData, updateFormData, onNext, onBack }) => {
  const handleWifiChange = (value) => {
    updateFormData({ hasWifi: value });
    if (value === 'No') {
      updateFormData({ useReceiptPrinter: 'No' }); // Reset if no wifi
    }
  };

  const handlePrinterChange = (value) => {
    updateFormData({ useReceiptPrinter: value });
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 6 – Printer Setup</h2>
        <h3 className="text-2xl font-bold text-white mb-2">Configure your receipt printing</h3>
      </div>

      <div className="space-y-8 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-4">Does your business have Wi‑Fi?</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasWifi"
                value="Yes"
                checked={formData.hasWifi === 'Yes'}
                onChange={() => handleWifiChange('Yes')}
                className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasWifi"
                value="No"
                checked={formData.hasWifi === 'No'}
                onChange={() => handleWifiChange('No')}
                className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
              />
              <span className="text-white">No</span>
            </label>
          </div>
        </div>

        {formData.hasWifi === 'Yes' && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <label className="block text-sm font-medium text-gray-300 mb-4">Do you currently use a receipt printer?</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="useReceiptPrinter"
                  value="Yes"
                  checked={formData.useReceiptPrinter === 'Yes'}
                  onChange={() => handlePrinterChange('Yes')}
                  className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
                />
                <span className="text-white">Yes</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="useReceiptPrinter"
                  value="No"
                  checked={formData.useReceiptPrinter === 'No'}
                  onChange={() => handlePrinterChange('No')}
                  className="appearance-none w-5 h-5 border-2 border-white/20 rounded-full checked:border-[#9810FA] checked:border-[6px] transition-all"
                />
                <span className="text-white">No</span>
              </label>
            </div>
          </div>
        )}
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
          className="px-8 py-3 rounded-full font-medium bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white border border-[#0F42FF] shadow-[0_0_15px_rgba(15,66,255,0.4)] hover:shadow-[0_0_20px_rgba(15,66,255,0.6)] transition-all cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PrinterSetupStep;
