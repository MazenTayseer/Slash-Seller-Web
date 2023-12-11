"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Welcome = () => {
  const [moveLogo, setMoveLogo] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useEffect(() => {
    const moveLogoUp = () => {
      setTimeout(() => {
        setMoveLogo(true);
        setTimeout(() => {
          setShowWelcomeScreen(true);
        }, 350);
      }, 100);
    };

    moveLogoUp();
  }, []);

  return (
    <section className='flex flex-col justify-center items-center mt-56 w-[25rem]'>
      <div
        className={`flex justify-center flex-col items-center absolute 
          transition-transform duration-700 ease-in-out ${
            moveLogo ? "transform -translate-y-56" : "transform translate-y-0"
          }`}
      >
        <Image
          src='/assets/logo.png'
          alt='Slash Logo'
          width={48}
          height={48}
          className={`transition-opacity duration-1000 ${
            moveLogo ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className='text-center mt-4'>
          <h1 className='text_white text-5xl font-bold font-satoshi'>Slash</h1>
          <h2
            className={`text_lime text-3xl font-bold font-satoshi transition-opacity duration-1000 ${
              moveLogo ? "opacity-100" : "opacity-0"
            }`}
          >
            Seller
          </h2>
        </div>
      </div>

      <div
        className={`mt-12 transition-opacity duration-1000 ${
          showWelcomeScreen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='white_bg rounded-2xl p-12'>
          <h2 className='text-3xl font-bold font-satoshi'>Welcome</h2>
          <p className='font-inter font-semibold text-gray-800 mt-3 text-md'>
            This webiste is used to manage your brands, products, and orders as
            a Slash /. Seller
          </p>

          <div className='mt-10 flex justify-between items-center font-satoshi text-lg'>
            <button className='lime_bg rounded-full py-3 px-9 font-bold shadow-custom transition duration-300 ease-in-out hover:brightness-90'>
              Sign In
            </button>
            <Link
              href='/signup'
              className='rounded-full py-3 px-9 font-bold shadow-custom text-gray-800 transition duration-300 ease-in-out hover:bg-gray-300'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
