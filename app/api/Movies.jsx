import React from "react";
import Card from "../components/Card/Card";

const API_KEY = process.env.API_KEY;

const Movies = async () => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const movies = data.results;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-3xl mx-auto py-4 px-4 gap-3 ">
      {movies.map((movie, id) => {
        return (
          <>
            <Card key={id} item={movie} media_type="movie"/>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
