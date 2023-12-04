"use client";

import Credentials from "@components/Forms/Credentials";
import EmailOtp from "@components/Forms/EmailOtp";
import MobileOtp from "@components/Forms/MobileOtp";
import Password from "@components/Forms/Password";

import { motion } from "framer-motion";
import { useState } from "react";

const signUpPage = () => {
  const [showCredentials, setShowCredentials] = useState(true);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onCredentialsContinueClick = () => {
    setShowCredentials(false);
    setShowEmailOtp(true);
  };

  const onEmailContinueClick = () => {
    setShowEmailOtp(false);
    setShowMobileOtp(true);
  };

  const onMobileContinueClick = () => {
    setShowMobileOtp(false);
    setShowPassword(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className='flex flex-col justify-center items-center my-32'
    >
      <h1 className='text_white text-center text-4xl font-bold font-satoshi'>
        <span>
          Create Your <br /> Slash Account
        </span>
      </h1>

      {showCredentials && (
        <Credentials handleContinue={onCredentialsContinueClick} />
      )}

      {showEmailOtp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <EmailOtp handleContinue={onEmailContinueClick} />
        </motion.div>
      )}

      {showMobileOtp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <MobileOtp handleContinue={onMobileContinueClick} />
        </motion.div>
      )}

      {showPassword && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Password />
        </motion.div>
      )}
    </motion.div>
  );
};

export default signUpPage;
