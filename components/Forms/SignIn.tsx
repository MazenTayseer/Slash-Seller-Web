type SignInFormProps = {
  handleSignIn: () => void;
};

const SignInForm = ({ handleSignIn }: SignInFormProps) => {
  return (
    <form className='mt-10 w-full max-w-md flex flex-col gap-6'>
      <label className='font-semibold text-customWhite text-md'>
        <span>Email Address</span>

        <input
          type='email'
          name='email'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </label>

      <label className='font-semibold text-customWhite text-md'>
        <span>Password</span>
        <input
          type='password'
          name='password'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </label>

      <button
        onClick={handleSignIn}
        className='rounded-lg py-3 px-9 font-bold text-customMain bg-customLime hover:brightness-75 transition duration-300 ease-in-out'
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
