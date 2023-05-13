import React from "react";

const API_KEY = process.env.API_KEY;

const Movies = async ({ title, poster, rating, description, releaseDate }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const movies = data.results;

  return (
    <div>
      {movies.map((movie) => {
        const { id, title, poster, vote_average, overview, release_date } =
          movie;
        return (
          <div
            key={movie.id}
            poster={IMG_URL + movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
            releaseDate={movie.release_date}
          >
            <h1>{title}</h1>
            <p>{vote_average}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
            <img src={poster} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
