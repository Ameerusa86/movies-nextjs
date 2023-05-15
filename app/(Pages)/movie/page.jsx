import React from "react";
import Movies from '../../api/Movies'
import Navbar from "@/app/components/Navbar/Navbar";

const MoviesPage = ({ movie }) => {
  return (
    <div>
    <Navbar/>
      <Movies Movies={movie}/>
    </div>
  );
};

export default MoviesPage;
