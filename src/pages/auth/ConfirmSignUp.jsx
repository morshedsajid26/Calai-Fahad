import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ConfirmSignUp = () => {
  const inputs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (event, index) => {
    const { value } = event.target;

    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    // Update current index
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next field
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    // Handle backspace
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-[32px] text-white font-semibold mb-2">
        Confirm Your Account
      </h1>
      <p className="text-gray-400 text-[13px] mb-8 text-center">
        We’ve sent a verification code to your email. Enter the code below to
        confirm your account and get started.
      </p>

      <div className="flex gap-4 justify-center mb-10">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            ref={(el) => (inputs.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            value={otp[i]}
            className="w-[47px] h-[49px] bg-[#141624] rounded-2xl text-center text-xl font-bold text-[#ffffff] outline-none"
          />
        ))}
      </div>

      <Link to="/auth/login" className="w-full">
        <button
        type="submit"
        className="w-full mt-2 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white text-sm font-medium py-3.5 rounded-full border border-[#1D4ED8] shadow-[0_0_20px_rgba(29,78,216,0.25)] hover:shadow-[0_0_25px_rgba(29,78,216,0.4)] transition-all"
      >
        Confirm
      </button>
      </Link>
      <div className="mt-4 text-[12px] text-gray-400">
        You can resend the code in 56 Seconds?{" "}
        <Link to="/auth/login" className="text-[#2563EB] hover:text-blue-400">
          Resend Code
        </Link>
      </div>
    </div>
  );
};

export default ConfirmSignUp;
