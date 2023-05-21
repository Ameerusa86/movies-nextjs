import React from 'react'
import ReusableSwiper from '../Swiper/Swiper'

const MoviesSwiper = () => {
  return (
    <div>
      <ReusableSwiper
        endpoint="https://api.themoviedb.org/3/movie/popular"
        apiKey="4a1414e6b1a6bd74ff7f45f4b0a63770"
      />
    </div>
  );
}

export default MoviesSwiper