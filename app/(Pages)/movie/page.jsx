"use client";
import React, { useState } from "react";
import TrendingMovies from "@/app/APIFetch/weekMovies";
import PopularMoviesAPI from "@/app/APIFetch/todayMoviesAPI";

const MoviesPage = ({ movie }) => {
  const [selectedAPI, setSelectedAPI] = useState("popular");

  const handleAPIChange = (apiType) => {
    setSelectedAPI(apiType);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-3">
        <h1 className="text-2xl text-center cursor-pointer text-white font-Righeous">
          TRENDING:{" "}
        </h1>
        <h1
          className={`text-2xl text-center cursor-pointer hover:text-orange-600 ${
            selectedAPI === "popular" ? "text-orange-600" : ""
          }`}
          onClick={() => handleAPIChange("popular")}
        >
          Today
        </h1>
        <h1
          className={`text-2xl text-center cursor-pointer hover:text-orange-600 ${
            selectedAPI === "trending" ? "text-orange-600" : ""
          }`}
          onClick={() => handleAPIChange("trending")}
        >
          This Week
        </h1>
      </div>

      {selectedAPI === "trending" ? (
        <TrendingMovies TrendingMovies={movie} />
      ) : (
        <PopularMoviesAPI PopularMoviesAPI={movie} />
      )}
    </div>
  );
};

export default MoviesPage;
