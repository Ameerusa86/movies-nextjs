import React from "react";
import Card from "../components/Card/Card";

const API_KEY = process.env.API_KEY;

const Movies = async ({ title, poster, rating, description, releaseDate }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const movies = data.results;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4 px-4 gap-3">
      {movies.map((movie) => {
        const {
          id,
          title,
          vote_average,
          overview,
          release_date,
          poster_path,
          backdrop_path,
        } = movie;
        {/* const imageUrl = IMG_URL + (poster_path || backdrop_path); */}

        return (
          <>
            <Card Movies={movie} />
          </>
        );
      })}
    </div>
  );
};

export default Movies;
