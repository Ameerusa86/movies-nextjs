import React from "react";
import Movies from "../api/Movies";

const MoviesPage = ({movie}) => {
  return (
    <div >
    <Movies Movies={movie}/>
    

    </div>
  );
};

export default MoviesPage;
