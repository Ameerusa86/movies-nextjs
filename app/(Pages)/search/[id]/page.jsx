import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../searchpage.css";

const SearchPage = async ({ params }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.APIKEY}&query=${params.id}&language=en`
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();
  const results = data.results;

  if (results.length === 0) {
    return (
      <div className="search-page">
        <h1 className="text-center">No results found</h1>
        <Link href="/">
          <h1 className="text-center hover:text-amber-600 cursor-pointer">
            Try Again
          </h1>
        </Link>
      </div>
    );
  }

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4 px-4 gap-3">
      <h1>Search Results</h1>
      {results.map((result) => {
        const {
          id,
          title,
          name,
          vote_average,
          overview,
          release_date,
          poster_path,
          backdrop_path,
          first_air_date,
        } = result;

        const imageUrl = IMG_URL + (poster_path || backdrop_path);
        const media_type = result.media_type ? result.media_type : "tv";

        return (
          <Link href={`/${media_type}/${id}`} className="link" key={id}>
            <div className="container">
              <div className="wrapper hover:opacity-80">
                <div
                  className="banner-image "
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <h1> {title || name}</h1>
                <p className="line-clamp-3">{overview}</p>
                <p>Release Date {release_date || first_air_date}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
