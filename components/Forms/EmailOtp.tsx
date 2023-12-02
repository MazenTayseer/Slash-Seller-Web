"use client";

import { useState } from "react";

interface formProps {
  handleContinue: () => void;
}

const EmailOtp: React.FC<formProps> = ({ handleContinue }) => {
  const otpSize: number = 6;

  const [otpValues, setOtpValues] = useState<string[]>(
    new Array(otpSize).fill("")
  );

  const handleInputChange = (index: number, value: string) => {
    const updatedOtpValues: string[] = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);

    if (index < otpSize - 1 && value !== "") {
      const nextInput = document.getElementsByName(
        `email_otp_${index + 1}`
      )[0] as HTMLInputElement;
      nextInput.focus();
    } else if (index === otpSize - 1 && value !== "") {
      const currentInput = document.getElementsByName(
        `email_otp_${index}`
      )[0] as HTMLInputElement;
      currentInput.blur();
    }
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < otpSize; i++) {
      inputs.push(
        <input
          type='text'
          name={`email_otp_${i}`}
          inputMode='numeric'
          maxLength={1}
          placeholder='-'
          className={`otp ${
            otpValues[i].length !== 0
              ? "border-customLime"
              : "border-customGray"
          }`}
          value={otpValues[i]}
          onChange={(e) => handleInputChange(i, e.target.value)}
        />
      );
    }

    return inputs;
  };

  return (
    <form className='mt-10 w-full max-w-2xl flex flex-col gap-6'>
      <label className='font-semibold text-customWhite text-md'>
        <span>Enter the OTP sent to your email</span>

        <div className='flex justify-between items-center gap-4 mt-2'>
          {renderInputs()}
        </div>
      </label>

      <button
        onClick={handleContinue}
        className='rounded-lg py-3 px-9 font-bold text-customMain hover:bg-gray-300 white_bg transition duration-300 ease-in-out'
      >
        Continue
      </button>
    </form>
  );
};

export default EmailOtp;
