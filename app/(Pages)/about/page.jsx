"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <motion.section
      className="bg-gray-500 mx-auto my-12 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-xl max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full lg:w-3/5"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          className="object-cover"
          src="/Asset/profile-pic.png"
          alt="Profile Picture"
          width={500}
          height={500}
        />
      </motion.div>
      <div className="bg-gray-700 flex flex-col justify-center p-6 lg:p-10 w-full lg:w-2/5">
        <motion.h1
          className="font-sans text-white text-lg font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ameer Hasan
        </motion.h1>
        <motion.h3
          className="font-mono text-gray-200 text-md font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Software Developer
        </motion.h3>
        <motion.p
          className="text-gray-300 pt-2 text-sm text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Software Developer with 3 years of experience in developing web
          applications. I have worked with various technologies like React,
          Node, and MongoDB. I am passionate about learning new technologies and
          building scalable applications.
        </motion.p>
        <Link href="https://ameer-hasan-portfolio.vercel.app/" target="_blank">
          <motion.button
            className="h-10 w-24 bg-gray-800 rounded mt-4 border border-white border-solid"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default About;
