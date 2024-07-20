"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import Image from "next/image";

const CastSwiper = ({ endpoint, apiKey, onDataChange }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const PLACEHOLDER_MALE = "/../../public/Asset/male-placeholder.png";
  const PLACEHOLDER_FEMALE = "/public/Asset/female-placeholder.jpg";
  const PLACEHOLDER_UNKNOWN = "/public/Asset/unknown.png";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: apiKey,
          },
        });
        setData(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [endpoint, apiKey]);

  useEffect(() => {
    onDataChange(data);
  }, [data, onDataChange]);

  return (
    <>
      <h1 className="mx-auto font-bold text-2xl px-8 mt-8 mb-4 text-white">
        Cast
      </h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        centeredSlides={false}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="cast-swiper"
      >
        {data.slice(0, 12).map((item, id) => {
          let placeholder = PLACEHOLDER_UNKNOWN;
          if (item.gender === 1) {
            placeholder = PLACEHOLDER_FEMALE;
          } else if (item.gender === 2) {
            placeholder = PLACEHOLDER_MALE;
          }

          return (
            <SwiperSlide key={id} className="swiper-slide">
              <div className="relative group w-full h-full cursor-pointer">
                <Image
                  src={
                    item.profile_path
                      ? IMG_URL + item.profile_path
                      : placeholder
                  }
                  alt={item.name}
                  layout="responsive"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                      {item.character}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CastSwiper;
