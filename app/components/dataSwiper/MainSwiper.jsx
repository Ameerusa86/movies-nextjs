import React from "react";
import HeroSplide from "../Swiper/HeroSwiper";

const MainSwiper = () => {
  return (
    <>
      <HeroSplide
        endpoint="https://api.themoviedb.org/3/trending/all/week"
        apiKey={process.env.NEXT_PUBLIC_APIKEY}
      />
    </>
  );
};

export default MainSwiper;
