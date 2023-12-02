"use client";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section className='w-full py-10'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className='xl:text-[15rem] lg:text-[12rem] sm:text-[10rem] text-[7rem] font-bold font-montserrat market'>
          Market
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 35 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        className='text-customWhite xl:text-[4rem] sm:text-[3rem] text-[2rem] font-semibold font-inter'
      >
        Your Style with Local Flair <br /> for Global Sales
      </motion.p>
    </section>
  );
};

export default HomePage;
