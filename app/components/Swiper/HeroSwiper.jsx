"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import "./HeroSwiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import SearchBox from "../Search/Search";
import { AiFillPlayCircle } from "react-icons/ai";

export default function HeroSwiper({ endpoint, apiKey }) {
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

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="relative h-auto w-auto"
      >
        <SearchBox />
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <SwiperSlide className="">
              <img
                className="relative h-auto w-auto"
                src={
                  window.innerWidth < 750
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                }
                alt={item.title}
              />
              <div className="absolute rounded-xl drop-shadow-md bg-gray-800 bg-opacity-40 border border-white-500 z-auto xs:bottom-[150px] sm:left-4 xl:max-w-xl lg:max-w-md sm:max-w-sm sm:p-4 lg:bottom-10 left-10">
                <h1 className="text-4xl mb-4 font-bold text-amber-600">
                  {item.title || item.name}
                </h1>
                <h1 className="text-white text-xs px-4 line-clamp-3 ">
                  {item.overview}
                </h1>
                <h1 className="text-white text-sm md:text-base px-4">
                  <span className="text-amber-600 text-md">Release Date: </span>
                  {item.release_date}
                </h1>
                <button className="flex items-center bg-amber-700 px-3 py-1 rounded-lg">
                  <AiFillPlayCircle className="h-4 w-4 text-white md:h-7 md:w-7" />{" "}
                  Play Trailer
                </button>
              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </React.Fragment>
        ))}
      </Swiper>
    </>
  );
}
