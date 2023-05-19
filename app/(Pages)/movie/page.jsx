import React from "react";
import Movies from "../../api/Movies";
import TopNavbar from "@/app/components/Navbar/TopNavbar";

const MoviesPage = ({ movie }) => {
  return (
    <div>
      <TopNavbar/>
      <Movies Movies={movie} />
    </div>
  );
};

export default MoviesPage;
