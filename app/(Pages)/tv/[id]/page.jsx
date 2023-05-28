import React from "react";
import Image from "next/image";
import DataCastSwiper from "@/app/components/dataSwiper/DataCastSwiper";

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

  const year = release_date
    ? new Date(release_date).getFullYear()
    : new Date(first_air_date).getFullYear();

  return (
    <>
      <div
        className="flex place-content-center w-full h-screen relative z-10"
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

        <div className="md:flex md:justify-center md:items-center z-50 px-8">
          <div className="mr-6">
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={100}
              className="rounded-lg sm:mx-auto"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                margin: "1rem auto",
              }}
            />
          </div>
          <div className="w-full p-2 text-left">
            <h1 className="md:text-3xl font-bold md:leading-loose">
              {name} ({year})
            </h1>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs">
                Overview:{" "}
              </span>
              {overview}
            </h3>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs">
                Date Released:{" "}
              </span>
              {release_date || first_air_date}
            </h3>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs">
                Rating:{" "}
              </span>
              {Math.round(vote_average) === null
                ? "N/A"
                : Math.round(vote_average)}
            </h3>
          </div>
        </div>
      </div>
      <DataCastSwiper id={id} mediaType="tv" />
    </>
  );
};

export default TvShowsDetails;
