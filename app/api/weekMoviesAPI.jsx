import React from "react";
import Card from "../components/Card/Card";

const PopularMoviesAPI = async () => {
  const tmdbAPI = process.env.APIKEY;
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=4a1414e6b1a6bd74ff7f45f4b0a63770&language=en-US&page=1`
  );

  if (response.status === 200) {
    const data = await response.json();
    const popularMovies = data.results;

    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-3xl mx-auto py-4 px-4 gap-3 ">
        {popularMovies.map((movie, id) => {
          return (
            <>
              <Card key={id} item={movie} media_type="movie" />
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-3xl mx-auto py-4 px-4 gap-3 ">
        <h1 className="text-3xl font-bold text-center">No Movies Found</h1>
      </div>
    );
  }
};

export default PopularMoviesAPI;
