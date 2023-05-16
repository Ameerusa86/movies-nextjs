import React from "react";

import Image from "next/image";

const Hero = async () => {
  const API = process.env.API_KEY;
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=`
  );

  const data = await response.json();
  const movies = data.results;

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="w-full h-full flex justify-center">
      <Image
        src={IMG_URL + movie.backdrop_path}
        alt={movie.title}
        className="w-full h-full object-cover"
        layout="fill"
        objectFit="cover"
        blurDataURL={`data:image/jpeg;base64,${movie.backdrop_path}`}
        quality="100"
      />
      <div className="absolute bottom-40 right-20 text-4xl p-8 rounded-xl drop-shadow-md bg-gray-800 bg-opacity-40 max-w-xl sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-w-[50px]">
        {" "}
        <h1 className="text-6xl mb-4 font-bold text-amber-600 sm:text-3xl md:text-4xl lg:text-5xl">
          {movie.title}
        </h1>
        <h1 className="text-white text-lg md:text-md sm:text-sm mb-4">
          {movie.overview}
        </h1>
        <h1 className="text-white text-lg md:text-md sm:text-sm mb-4">
          <span className="text-amber-600">Release Date: </span>
          {movie.release_date}
        </h1>
      </div>{" "}
    </div>
  );
};
export default Hero;
