"use client";
// 
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

const ReusableSwiper = ({ endpoint, apiKey }) => {
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                width={500}
                height={750}
                layout="responsive"
              />
              <div className="circle-rate absolute -top-10">
                <svg
                  className="circle-chart"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    "--percentage": `${Math.round(item.vote_average) * 10}`,
                  }}
                >
                  <circle
                    className="circle-chart__circle"
                    strokeWidth="2"
                    strokeDasharray={`${
                      Math.round(item.vote_average) * 10
                    }, 100`}
                    cx="18"
                    cy="18"
                    r="16"
                  ></circle>
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">
                  {Math.round(item.vote_average)}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white text-center">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSwiper;
