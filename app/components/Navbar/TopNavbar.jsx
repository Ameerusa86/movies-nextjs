"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/Asset/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { HiOutlineMoon } from "react-icons/hi";
import ProfileIcon from "../ProfileIcon";
import SearchBox from "../Search/Search";

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 10;
      setIsScrolled(!isTop);
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
      className={`bg-white	border-gray-200 tracking-widest	z-50 ${
        isScrolled ? "sticky top-0 shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black hover:text-amber-600">
            Cinema Universe
          </span>
        </Link>
        <div className="flex items-center justify-end  lg:flex"></div>
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-black hover:text-white rounded-lg lg:hidden hover:bg-amber-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineMenu size={25} />
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto  transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li className="">
              <Link
                href="/"
                className=" block py-2 pl-3 pr-4 text-black rounded md:bg-transparent active:text-amber-600 hover:text-amber-600  md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent active:text-amber-600 hover:text-amber-600 md:p-0"
                aria-current="page"
                onClick={handleLinkClick}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent active:text-amber-600 hover:text-amber-600 md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                MOVIES
              </Link>
            </li>
            <li>
              <Link
                href="/tv"
                className="block py-2 pl-3 pr-4  text-black rounded md:bg-transparent active:text-amber-600 hover:text-amber-600 md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                TV SHOWS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4  text-black rounded md:bg-transparent active:text-amber-600 hover:text-amber-600 md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                CONTACT
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                href=""
                className="text-black active:text-amber-600 hover:text-amber-600 md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                <FaSearch className="" />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              {/* <Link
                href="/register"
                className="text-black active:text-amber-600 hover:text-amber-600 md:p-0 "
                aria-current="page"
                onClick={handleLinkClick}
              >
                <FaUserAlt className="" />
              </Link> */}
              <ProfileIcon />
            </li>
            <li
              className="flex items-center justify-center text-black active:text-amber-600 hover:text-amber-600 md:p-0"
              onClick={() => setNightMode(!nightMode)}
            >
              {nightMode ? (
                <WiDaySunny size={25} />
              ) : (
                <HiOutlineMoon size={25} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
