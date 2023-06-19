import React from "react";
import ReusableSwiper from "../Swiper/Swiper";

const TVShowsSwiper = () => {
  return (
    <div>
      <ReusableSwiper
        endpoint="https://api.themoviedb.org/3/trending/tv/week"
        apiKey={process.env.NEXT_PUBLIC_APIKEY}
      />
    </div>
  );
};

export default TVShowsSwiper;
