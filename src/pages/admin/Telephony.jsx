import Breadcrumb from "@/components/Breadcrumb";
import { Icon } from "@iconify/react";
import InputField from "@/components/Inputfield";
import Dropdown from "@/components/Dropdown";

import React, { useState } from "react";

const Telephony = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  

  const handleAddNumber = () => {
    console.log("Adding number:", newNumber);
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Breadcrumb
          text={`Import and manage Twilio / Vonage phone numbers linked to your AI Agents.`}
        />

        <div className=" mb-6">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white px-5 py-3 rounded-full text-lg cursor-pointer"
          >
            <Icon icon="lucide:plus" className="text-lg" />
            Import Number
          </button>
        </div>
      </div>

      {/* Add Number Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0E0E10] border border-gray-800 rounded-[20px] w-full max-w-[550px] px-8 py-12 relative shadow-2xl overflow-y-auto hide-scrollbar">
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="lucide:x" className="text-xl" />
            </button>

            <h2 className="text-white text-xl font-semibold mb-1">Add Number</h2>
            <p className="text-gray-400 text-[13px] mb-8">Import Vapi Number</p>

            <div className="space-y-6">
              <Dropdown
                label="Provider"
                options={["Twilio", "Vonage", "Vapi"]}
                
                onSelect={(val) => setNewNumber({...newNumber, provider: val})}
                labelClass="!text-gray-200 !text-[13px] !mb-1 !font-medium"
                inputClass="!bg-[#F5F5F5] !border-none !text-[#111] !rounded-xl !py-3.5 !px-4 !font-medium !text-sm"
                optionClass="!bg-white !text-[#111]"
                icon="!text-gray-500"
              />

              <InputField
                label="Phone Number"
                placeholder="+12345678"
                
                labelClass="!text-gray-200 !text-[13px] !mb-1 !font-medium"
                inputClass="!bg-[#F5F5F5] !border-none !text-[#111] !rounded-xl !py-3.5 !px-4 !font-medium !text-sm"
              />

              <InputField
                label="Forwarding Number"
                placeholder="+123548968"
            
             
                labelClass="!text-gray-200 !text-[13px] !mb-1 !font-medium"
                inputClass="!bg-[#F5F5F5] !border-none !text-[#111] !rounded-xl !py-3.5 !px-4 !font-medium !text-sm"
              />

              <Dropdown
                label="Link to Agent"
                options={["No Agent unlinked", "Agent 1", "Agent 2"]}
           
              
                labelClass="!text-gray-200 !text-[13px] !mb-1 !font-medium"
                inputClass="!bg-[#F5F5F5] !border-none !text-[#111] !rounded-xl !py-3.5 !px-4 !font-medium !text-sm"
                optionClass="!bg-white !text-[#111]"
                icon="!text-gray-500"
              />
            </div>

            <div className="flex items-center justify-center gap-5 mt-10">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="bg-white text-black font-semibold px-8 py-2.5 rounded-full hover:bg-gray-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddNumber}
                className="bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white px-8 py-2.5 rounded-full font-semibold border border-[#1e3a8a] shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all text-sm"
              >
                Add Number
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Telephony;
