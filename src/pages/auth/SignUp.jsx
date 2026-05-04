import React from 'react'
import Password from '../../components/Password'
import InputField from '../../components/Inputfield'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center ">

      <h1 className="text-[32px] text-white font-semibold mb-2">Create Your Account</h1>
      <p className="text-gray-400 text-[13px] mb-8">Boost your business — sign up to automate support with AI.</p>


      <form className="w-full flex flex-col gap-5">

        <div className="flex w-full gap-5">
           <InputField
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />

         <InputField
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />
        </div>


         <InputField
          label="Organization Name"
          type="text"
          placeholder="Enter Organization Name"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />

        {/* Email Input */}
        <InputField
          label="Email"
          type="email"
          placeholder="Enter Email"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          leftIcon={<Icon icon="lucide:mail" width="18" />}
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />

        {/* Password Input */}
        <Password
          label="Password"
          placeholder="Enter Password"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          leftIcon={<Icon icon="lucide:lock" width="18" />}
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />

        <Password
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          labelClass="!text-[13px] !text-gray-300 !font-medium !ml-1"
          leftIcon={<Icon icon="lucide:lock" width="18" />}
          inputClass="!bg-[#111424] !text-white !placeholder-gray-600 !rounded-full !py-3.5 !border-transparent focus:!border-[#2563EB]/50 !transition-colors !text-sm"
        />

        {/* Remember & Forgot Password */}
        <div className="flex items-center justify-between mt-1 px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-3.5 h-3.5 accent-[#2563EB] bg-[#111424] border-gray-700 rounded cursor-pointer" 
            />
            <span className="text-[12px] text-gray-400">I agreeing to the terms of service and privacy policy</span>
          </label>
          
        </div>

        {/* Sign Up Button */}
        <Link to="/auth/signup/confirm" className='w-full'>
           <button 
          type="submit"
          className="w-full mt-2 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white text-sm font-medium py-3.5 rounded-full border border-[#1D4ED8] shadow-[0_0_20px_rgba(29,78,216,0.25)] hover:shadow-[0_0_25px_rgba(29,78,216,0.4)] transition-all"
        >
          Sign up
        </button>
        </Link>

      </form>
        <div className="mt-4 text-[12px] text-gray-400">
       Already have an account? <Link to="/auth/login" className="text-[#2563EB] hover:text-blue-400">Log In</Link>
      </div>


    </div>
  )
}

export default SignUp