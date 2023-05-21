import React from "react";
import Image from "next/image";

const TvShowsDetails = async ({ params }) => {
  const { id } = params;
  const IMG_URL = "https://image.tmdb.org/t/p/original/";
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.APIKEY}`
  );
  const data = await res.json();
  const {
    title,
    name,
    vote_average,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    first_air_date,
  } = data;
  const imageUrl = IMG_URL + (poster_path || backdrop_path);
  const imageBackdrop = IMG_URL + backdrop_path;

  return (
    <div
      className="grid place-content-center w-full h-screen relative"
      style={{
        backgroundImage: `url(${imageBackdrop})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="flex flex-col max-w-6xl md:space-x-6 z-50">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="p-2">
          <h1 className="mb-3 text-4xl font-bold">{name}</h1>
          <p className="text-lg mb-3">
            <span className="font-semibold text-red-700">Overview: </span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="text-red-700 font-bold">Date Released: </span>
            {release_date || first_air_date}
          </p>
          <p className="mb-3">
            <span className="text-red-700 font-bold">Rating: </span>
            {Math.round(vote_average) === null
              ? "N/A"
              : Math.round(vote_average)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TvShowsDetails;
