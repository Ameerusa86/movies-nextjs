"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./TopNavbar.css";
import logo from "../../../public/Asset/logo.png";
import Link from "next/link";
import Image from "next/image";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const menuTransition = {
    duration: 0.3,
  };

  const buttonVariants = {
    open: {
      rotate: 45,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 font-Righeous shadow-lg fixed z-50 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/home" className="flex items-center">
          <Image src={logo} width={75} height={75} alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CINNEMA UNIVERSE
          </span>
        </Link>
        <motion.button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          variants={buttonVariants}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="sideMenu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={menuTransition}
              className="w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/home"
                    className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-red-600"
                    activeClassName="text-red-600"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-red-600"
                    activeClassName="text-red-600"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/movie"
                    className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-red-600"
                    activeClassName="text-red-600"
                  >
                    MOVIES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tv"
                    className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-red-600"
                    activeClassName="text-red-600"
                  >
                    TV SHOWS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-red-600"
                    activeClassName="text-red-600"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default TopNavbar;
