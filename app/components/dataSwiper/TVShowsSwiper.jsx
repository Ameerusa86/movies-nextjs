import React from "react";
import ReusableSwiper from "../Swiper/Swiper";
import Link from "next/link";
import TvShows from "@/app/api/TvShows";

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
