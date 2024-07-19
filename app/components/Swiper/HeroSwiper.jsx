"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSwiper = ({ endpoint, apiKey }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        const genres = response.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenres(genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    async function fetchData() {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: apiKey,
          },
        });
        setData(response.data.results);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchGenres();
    fetchData();
  }, [endpoint, apiKey]);

  if (error) {
    return <div className="text-red-500">Failed to load data.</div>;
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-screen overflow-hidden cursor-pointer"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex items-center p-16">
              <div className="text-white space-y-6 max-w-lg drop-shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-600 text-white font-bold px-2 py-1 rounded">
                    Release Date:
                  </span>
                  <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded">
                    {item.release_date || item.first_air_date}
                  </span>
                </div>
                <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
                  {item.title || item.name}
                </h1>
                <p className="lg:text-lg md:text-md sm:text-sm">
                  {item.overview}
                </p>
                <div className="flex items-center space-x-3">
                  <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded">
                    TV-MA
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded">
                      ⭐ {Math.floor(item.vote_average)}
                    </span>
                  </span>
                  <span className="uppercase">{item.media_type}</span>
                  {item.genre_ids.map((id) => (
                    <span key={id}>{genres[id]}</span>
                  ))}
                </div>
              </div>
            </div>
            <Image
              width={1440}
              height={600}
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title || item.name}
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
