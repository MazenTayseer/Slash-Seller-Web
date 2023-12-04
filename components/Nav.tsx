"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaBars, FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);

    if (!showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeNavbar = () => {
    setShowNavbar(false);
    document.body.style.overflow = "";
  };

  return (
    <nav className='py-6 w-full flex flex-wrap items-center justify-between'>
      <Link href='/' onClick={closeNavbar}>
        <h1 className='md:text-3xl text-2xl text-customWhite font-bold'>
          Slash{" "}
          <span className='text-customLime md:text-2xl text-xl'>Seller</span>
        </h1>
      </Link>

      {/* Desktop */}
      <div className='hidden w-full md:block md:w-auto'>
        <Link
          href='/signin'
          className='py-3 px-9 mx-2 font-bold bg-customLime text-customMain rounded-lg transition duration-300 ease-in-out hover:brightness-75'
        >
          Sign In
        </Link>

        <Link
          href='/signup'
          className='py-3 px-9 mx-2 font-bold bg-customWhite text-customMain rounded-lg transition duration-300 ease-in-out hover:bg-gray-300'
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile */}
      <button
        onClick={toggleNavbar}
        className='block text-3xl text-customWhite mr-4 focus:outline-none md:hidden'
      >
        {showNavbar ? <FaXmark /> : <FaBars />}
      </button>

      {showNavbar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='h-screen z-10 w-full flex flex-col gap-4 pt-8 md:hidden'
        >
          <Link
            href='/signin'
            onClick={closeNavbar}
            className='py-3 px-9 font-bold bg-customLime text-customMain rounded-lg transition duration-300 ease-in-out hover:brightness-75'
          >
            Sign In
          </Link>

          <Link
            href='/signup'
            onClick={closeNavbar}
            className='py-3 px-9 font-bold bg-customWhite text-customMain rounded-lg transition duration-300 ease-in-out hover:bg-gray-300'
          >
            Sign Up
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
