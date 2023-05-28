import DataCastSwiper from "@/app/components/dataSwiper/DataCastSwiper";
import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const { id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.APIKEY}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  const {
    title,
    vote_average,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    first_air_date,
    original_language,
    budget,
    revenue,
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
        <div className="absolute inset-0 bg-black opacity-80 "></div>

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
              {title} ({year})
            </h1>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs ">
                Language:{" "}
              </span>
              : {original_language}
            </h3>

            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs">
                Overview:{" "}
              </span>
              {overview}
            </h3>

            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs ">
                Rating:{" "}
              </span>
              {Math.round(vote_average) === null
                ? "N/A"
                : Math.round(vote_average)}
            </h3>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs ">
                Budget:{" "}
              </span>
              : {budget.toLocaleString()} USD
            </h3>
            <h3 className="sm:text-xs md:text-xl">
              <span className="text-amber-600 md:text-xl font-bold md:leading-loose text-left sm:text-xs ">
                Revenue:{" "}
              </span>
              : {revenue.toLocaleString()} USD
            </h3>
          </div>
        </div>
      </div>

      <DataCastSwiper id={id} mediaType="movie" />
    </>
  );
};

export default DetailsPage;
