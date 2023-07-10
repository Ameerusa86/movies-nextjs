import React from "react";
import HeroSwiper from "../Swiper/HeroSwiper";
import HeroSplide from "../Swiper/HeroSplide";

const MainSwiper = () => {
  return (
    // <HeroSwiper
    //   endpoint="https://api.themoviedb.org/3/trending/all/week"
    //   apiKey={process.env.NEXT_PUBLIC_APIKEY}
    // />
    <HeroSplide
      endpoint="https://api.themoviedb.org/3/trending/all/week"
      apiKey={process.env.NEXT_PUBLIC_APIKEY}
    />
  );
};

export default MainSwiper;
