"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/Asset/logo.png";
import { HiOutlineMenu, HiOutlineMoon } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import Link from "next/link";
import ProfileIcon from "../ProfileIcon";

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={` w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <span className="ml-3 text-2xl font-semibold text-gray-300">
            Cinema Universe
          </span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="/movie"
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            MOVIES
          </Link>
          <Link
            href="/tv"
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            TV SHOWS
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            CONTACT
          </Link>
          <Link
            href=""
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
          >
            {/* <FaSearch /> */}
          </Link>
          {/* <ProfileIcon /> */}
          {/* <button
            className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
            onClick={() => setNightMode(!nightMode)}
          >
            {nightMode ? <WiDaySunny size={25} /> : <HiOutlineMoon size={25} />}
          </button> */}
        </div>
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="p-2 text-gray-300 rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300"
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
        <ul className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-4">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/movie"
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link
              href="/tv"
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              TV SHOWS
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              CONTACT
            </Link>
          </li>
          {/* <li>
            <Link
              href=""
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              <FaSearch />
            </Link>
          </li>
          <li>
            <ProfileIcon />
          </li>
          <li>
            <button
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={() => setNightMode(!nightMode)}
            >
              {nightMode ? (
                <WiDaySunny size={25} />
              ) : (
                <HiOutlineMoon size={25} />
              )}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
