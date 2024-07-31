"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/Asset/logo.png";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/movie", title: "Movies" },
    { href: "/tv", title: "TV Shows" },
    { href: "/contact", title: "Contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlelinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={` w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4">
        <Link href={"/"} className="flex items-center">
          <Image src={logo} width={50} height={50} alt="Logo" />
          <span className="ml-3 text-2xl font-semibold text-gray-300">
            Cinema App
          </span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-gray-300 hover:bg-yellow-600 hover:text-white transition-all duration-300"
            onClick={toggleMobileMenu}
          >
            <HiOutlineMenu size={25} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-4">
          {links.map((link) => (
            <Link
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              href={link.href}
              key={link.title}
              onClick={handlelinkClick}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
