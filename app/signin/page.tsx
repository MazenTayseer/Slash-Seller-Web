"use client";

import { motion } from "framer-motion";
import SignInForm from "@components/Forms/SignIn";

const signInPage = () => {
  const onSignInClick = () => {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className='flex flex-col justify-center items-center mt-32'
    >
      <h1 className='text_white text-center text-4xl font-bold font-satoshi'>
        <span>
          Sign In
        </span>
      </h1>

      <SignInForm handleSignIn={onSignInClick} />
    </motion.div>
  );
};

export default signInPage;
