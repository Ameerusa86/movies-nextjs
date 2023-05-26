import Card from "@/app/components/Card/Card";
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

  const getCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.APIKEY}`,
    { next: { revalidate: 60 } }
  );

  const credits = await getCredits.json();
  console.log(credits);

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

  const limitedCredits = credits.cast.slice(0, 15); // Limit to 15 credit actors

  return (
    <>
      <div
        className="flex place-content-center w-full h-screen relative "
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

        <div className="flex justify-center items-center z-50">
          <div className="mr-8">
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={100}
              className="rounded-lg"
              style={{
                maxWidth: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="w-1/2 p-2 text-left">
            <h1 className="text-2xl font-bold leading-loose">
              {title} ({year})
            </h1>
            <h3>
              <span className="text-amber-600 font-bold ">Language: </span>:{" "}
              {original_language}
            </h3>

            <h3 className="text-lg">
              <span className=" text-amber-600 font-bold ">Overview: </span>
              {overview}
            </h3>

            <p className="">
              <span className="text-amber-600 font-bold">Rating: </span>
              {Math.round(vote_average) === null
                ? "N/A"
                : Math.round(vote_average)}
            </p>
            <h3>
              <span className="text-amber-600 font-bold ">Budget: </span>:{" "}
              {budget.toLocaleString()} USD
            </h3>
            <h3>
              <span className="text-amber-600 font-bold ">Revenue: </span>:{" "}
              {revenue.toLocaleString()} USD
            </h3>
          <div>
            {limitedCredits.map((cast) => {
              return (
                <>
                  <div key={cast.id} className="flex">
                    <h3 className="text-lg">
                      <span className="text-amber-600 font-bold ">Actor: </span>
                      {cast.name || cast.original_name}
                    </h3>
                    <h3 className="text-lg">
                      <span className="text-amber-600 font-bold ">
                        Character:{" "}
                      </span>
                      {cast.character}
                    </h3>
                    <div className="grid grid-cols-4 grid-rows-3">
                      <Image
                        src={IMG_URL + cast.profile_path}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
