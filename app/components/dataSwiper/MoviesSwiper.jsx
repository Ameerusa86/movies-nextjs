import React from "react";
import ReusableSwiper from "../Swiper/Swiper";

const MoviesSwiper = () => {
  return (
    <ReusableSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey={process.env.NEXT_PUBLIC_APIKEY}
    />
  );
};

export default MoviesSwiper;
