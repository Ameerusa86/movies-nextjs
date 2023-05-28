import React from "react";
import HeroSwiper from "../Swiper/HeroSwiper";

const MainSwiper = () => {
  return (
    <HeroSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey={process.env.NEXT_PUBLIC_APIKEY}
    />
  );
};

export default MainSwiper;
