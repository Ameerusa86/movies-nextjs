"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";
import Image from "next/image";

const CastSwiper = ({ endpoint, apiKey, onDataChange }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
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
      <h1 className="mx-auto font-bold text-xl px-8 mt-4 mb-4">Cast</h1>
      <Swiper
        slidesPerView={8}
        spaceBetween={3}
        centeredSlides={true}
        modules={[Pagination]}
        className=""
      >
        <div className="swiper-wrapper">
          {data.slice(0, 10).map((item, id) => (
            <SwiperSlide key={id} className="swiper-slide">
              <>
                <Image
                  src={IMG_URL + item.profile_path}
                  alt={item.name}
                  width={200}
                  height={300}
                  className="rounded-lg"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="text-center">
                  <h3 className="sm:text-xs lg:text-xl mt-2">{item.name}</h3>
                  <p className="sm:text-sm text-gray-500 lg:text-md">
                    {item.character}
                  </p>
                </div>
              </>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default CastSwiper;
