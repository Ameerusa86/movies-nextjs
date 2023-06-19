import React from "react";
import TvShows from "../../APIFetch/TvShows";

const TvShowsPage = ({ tvshow }) => {
  return (
    <div>
      <TvShows TvShows={tvshow} />
    </div>
  );
};
export default TvShowsPage;
