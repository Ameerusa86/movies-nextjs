import React from "react";
import Link from "next/link";
import ReusableSwiper from "../Swiper/Swiper";

const MoviesSwiper = () => {
  return (
    <ReusableSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey={process.env.APIKEY}
    />
  );
};

export default MoviesSwiper;
