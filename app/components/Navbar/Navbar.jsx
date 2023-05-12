"use client";

import React, { useState } from "react";
// Icons
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiFilmStrip } from "react-icons/gi";
import { MdOutlineSlideshow } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
// Components
import Image from "next/image";
import logo from "../../../public/Asset/logo.png";

// Styles
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const sideMenuItems = [
    {
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <BsInfoCircle />,
    },
    {
      name: "Movies",
      link: "/movies",
      icon: <GiFilmStrip />,
    },
    {
      name: "TV Shows",
      link: "/tvshows",
      icon: <MdOutlineSlideshow />,
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: <RxEnvelopeClosed />,
    },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative duration-500`}
      >
        <AiOutlineArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-4 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          } duration-500`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center justify-center">
          <Image
            src={logo}
            width={120}
            height={120}
            alt="Logo"
            className={`cursor-pointer ml-4 block float-left duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Cinema Universe
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md mt-6 duration-500 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <AiOutlineSearch
            className={`text-white text-lg block float-left cursor-pointer duration-500 ${
              open && "hidden"
            }`}
            onClick={() => setOpen(!open)}
          />

          <div
            className={`form__group field text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            } `}
          >
            <input
              type={"search"}
              className="form__field"
              placeholder="Search"
              required=""
            />
            <label for="name" className="form__label">
              Search
            </label>
          </div>
        </div>
        <div>
          <ul className="pt-8">
            {sideMenuItems.map((item, index) => (
              <>
                <li
                  onClick={() => setOpen(!open)}
                  key={index}
                  className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2"
                >
                  <span className="text-2xl block float-left ">
                    {item.icon}
                  </span>
                  <a
                    href={item.link}
                    className={`text-white hover:text-dark-purple transition duration-500 ease-in-out ${
                      !open && "opacity-0"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              </>
            ))}
          </ul>
          {/* <div className="flex flex-col gap-y-4 items-center justify-center mt-4">
            <button>
              <span>Login</span>
            </button>
            <button>
              <span>Sign Up</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
