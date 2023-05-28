import React from "react";
import Link from "next/link";
import ReusableSwiper from "../Swiper/Swiper";

const MoviesSwiper = () => {
  return (
    <ReusableSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey="4a1414e6b1a6bd74ff7f45f4b0a63770"
    />
  );
};

export default MoviesSwiper;
