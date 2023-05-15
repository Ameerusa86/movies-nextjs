import React from "react";
import TvShows from "../../api/TvShows";
import Navbar from "@/app/components/Navbar/Navbar";

const TvShowsPage = ({ tvshow }) => {
  return (
    <div>
    <Navbar/>
      <TvShows TvShows={tvshow} />
    </div>
  );
};
export default TvShowsPage;
