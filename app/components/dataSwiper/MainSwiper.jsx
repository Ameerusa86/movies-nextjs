import React from "react";
import HeroSwiper from "../Swiper/HeroSwiper";

const MainSwiper = () => {
  return (
    <HeroSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey="4a1414e6b1a6bd74ff7f45f4b0a63770"
    />
  );
};

export default MainSwiper;
