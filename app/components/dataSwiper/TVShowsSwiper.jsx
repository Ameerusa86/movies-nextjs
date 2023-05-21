import React from 'react'
import ReusableSwiper from '../Swiper/Swiper'

const TVShowsSwiper = () => {
  return (
    <div>
      <ReusableSwiper
        endpoint="https://api.themoviedb.org/3/trending/tv/week"
        apiKey="4a1414e6b1a6bd74ff7f45f4b0a63770"
      />
    </div>
  );
}

export default TVShowsSwiper