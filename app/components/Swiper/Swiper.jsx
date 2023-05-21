"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import Image from "next/image";


SwiperCore.use([Navigation]);

export default function SwiperPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "4a1414e6b1a6bd74ff7f45f4b0a63770",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  const getRatingColor = (rating) => {
    if (rating >= 7.5) {
      return "bg-green-500";
    } else if (rating >= 5) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div className="w-screen flex items-center justify-center px-5">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div>
              <Image className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                layout="responsive"
              />
              <div className="circle-rate absolute -top-10">
                <svg
                  className="circle-chart"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ "--percentage": `${movie.vote_average * 10}` }}
                >
                  <circle
                    className="circle-chart__circle"
                    strokeWidth="2"
                    strokeDasharray={`${movie.vote_average * 10}, 100`}
                    cx="18"
                    cy="18"
                    r="16"
                  ></circle>
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">
                  {movie.vote_average}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white text-center">{movie.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
