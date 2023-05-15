import Movies from "@/app/api/Movies";
import React from "react";
import ThemeToggler from "../ThemeToggler";
import TvShows from "@/app/api/TvShows";
import Image from "next/image";
import avengers from "../../../public/Asset/avengers.jpg";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-center">Hero Section</h1>
      <Image
        src={avengers}
        alt="bg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-70 "></div>
    </div>
  );
};

export default Hero;
