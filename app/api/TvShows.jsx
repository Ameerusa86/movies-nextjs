import React from "react";
import Card from "../components/Card/Card";

const API_KEY = process.env.API;

const TvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const tvshows = data.results;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-3xl mx-auto py-4 px-4 gap-3">
      {tvshows.map((tvshow, id) => {
        return (
          <>
            <Card key={id} item={tvshow} media_type="tv" />
          </>
        );
      })}
    </div>
  );
};

export default TvShows;
