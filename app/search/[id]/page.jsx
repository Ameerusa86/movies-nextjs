import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../searchpage.css";

const SearchPage = async ({ params, movie }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.id}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();
  const results = data.results;

  console.log(results);

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4 px-4 gap-3">
      <h1>Search Results</h1>
      {results.map((result) => {
        const {
          id,
          title,
          vote_average,
          overview,
          release_date,
          poster_path,
          backdrop_path,
          first_air_date,
        } = result;
        const imageUrl = IMG_URL + (poster_path || backdrop_path);
        return (
          <Link href={`/movie/${id}`} className="link">
            <div className="container">
              <div className="wrapper hover:opacity-80">
                <div
                  className="banner-image "
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <h1> {title}</h1>
                <p className="line-clamp-3">{overview}</p>
                <p>Release Date {release_date}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
