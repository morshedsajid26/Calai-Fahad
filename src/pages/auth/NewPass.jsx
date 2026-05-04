import React from "react";
import Password from "../../components/Password";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NewPass = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[32px] text-white font-semibold mb-2">
        Create New Password
      </h1>
      <p className="text-gray-400 text-[13px] mb-8 text-center">
        Your new password must be different form previously used password 
      </p>

      <form className="w-full space-y-6">
        <Password
          label={`Password`}
          placeholder="New Password"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          leftIcon={<Icon icon="lucide:lock" width="18" />}
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />
        <Password
          label={`Confirm Password`}
          placeholder="Confirm New Password"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          leftIcon={<Icon icon="lucide:lock" width="18" />}
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />
      </form>

     <Link to="/auth/success" className='w-full'>
       <button className="w-full mt-8 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white text-sm font-medium py-3.5 rounded-full border border-[#1D4ED8] shadow-[0_0_20px_rgba(29,78,216,0.25)] hover:shadow-[0_0_25px_rgba(29,78,216,0.4)] transition-all">
        Reset Password
      </button>
     </Link>
    </div>
  );
};

export default NewPass;
