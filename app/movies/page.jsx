import React from "react";
import Movies from "../api/Movies";
import Card from "../components/Card/Card";

const MoviesPage = ({ movie }) => {
  return (
    <div>
      <Movies Movies={movie}/>
    </div>
  );
};

export default MoviesPage;
