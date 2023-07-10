"use client";

import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import Image from "next/image";

const HeroSplide = ({ endpoint, apiKey }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: apiKey,
          },
        });
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [endpoint, apiKey]);

  return (
    <Splide
      className="w-full h-[600]"
      options={{
        rewind: true,
        width: "1440",
        gap: "1rem",
        perPage: 1,
        type: "loop",
        autoplay: true,
        arrows: false,
        pagination: false,
      }}
    >
      {data.map((item) => (
        <SplideSlide>
          <div className="">
            <div className="grid grid-cols-3 gap-4 h-[600]">
              <div className="px-8 w-full h-full flex flex-col justify-center items-start">
                <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl mb-4 font-bold text-white">
                  {item.title || item.name}
                </h1>
                <p className="w-full lg:text-lg md:text-md sm:text-sm mb-4">
                  {item.overview}
                </p>
                <p>Release Date: {item.release_date}</p>
              </div>
              <div className={`p-3 col-span-2 `}>
                <Image
                  width={1440}
                  height={500}
                  src={
                    window.innerWidth < 750
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                  }
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeroSplide;
