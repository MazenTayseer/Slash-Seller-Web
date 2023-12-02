import { FaRegCircle } from "react-icons/fa6";

interface formProps {
  handleContinue: () => void;
}

const Password = () => {
  const passwordChecks: string[] = [
    "Numeric Digit",
    "Capital Letter",
    "Small Letter",
    "Special Character",
    "8 Characters Minimum",
  ];

  const renderPasswordChecks = () => {
    const inputs = [];
    for (let i = 0; i < passwordChecks.length; i++) {
      inputs.push(
        <p className='flex items-center gap-2 bg-customDark text-customGray font-semibold rounded-full px-2 py-1'>
          <FaRegCircle /> {passwordChecks[i]}
        </p>
      );
    }

    return inputs;
  };

  return (
    <form className='mt-10 w-full max-w-2xl flex flex-col gap-6'>
      <div className='flex justify-center items-center flex-wrap gap-2 text-sm'>
        {renderPasswordChecks()}
      </div>

      <label className='font-semibold text-customWhite text-md'>
        <span>Password</span>
        <input
          type='password'
          name='first_password'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </label>
      {/* 
      <label className='font-semibold text-customWhite text-md'>
        <span>Confirm Password</span>
        <input
          type='password'
          name='second_password'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </label> */}

      <button className='rounded-lg py-3 px-9 font-bold text-customMain hover:bg-gray-300 white_bg transition duration-300 ease-in-out'>
        Continue
      </button>
    </form>
  );
};

export default Password;
