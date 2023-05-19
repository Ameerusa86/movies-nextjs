import React from "react";
import TvShows from "../../api/TvShows";
import TopNavbar from "@/app/components/Navbar/TopNavbar";

const TvShowsPage = ({ tvshow }) => {
  return (
    <div>
      <TopNavbar />
      <TvShows TvShows={tvshow} />
    </div>
  );
};
export default TvShowsPage;
