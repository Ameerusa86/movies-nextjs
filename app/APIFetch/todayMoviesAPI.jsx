"use client";

import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

const PopularMoviesAPI = () => {
  const tmdbAPI = process.env.NEXT_PUBLIC_APIKEY;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genres, setGenres] = useState({});

  const fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbAPI}&language=en-US`
    );
    if (response.status === 200) {
      const data = await response.json();
      const genres = data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setGenres(genres);
    }
  };

  const fetchMovies = async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbAPI}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`
    );
    if (response.status === 200) {
      const data = await response.json();
      const movies = data.results;
      const totalPages = data.total_pages;

      setMovies(movies);
      setTotalPages(totalPages);
    }
  };

  useEffect(() => {
    fetchGenres();
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="max-w-screen-3xl mx-auto py-4 px-4">
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {movies.length > 0 ? (
          movies.map((movie, id) => (
            <Card
              key={id}
              item={{
                ...movie,
                genres: movie.genre_ids.map((id) => genres[id]),
              }}
              media_type="movie"
            />
          ))
        ) : (
          <h1 className="text-3xl font-bold text-center">No Movies Found</h1>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className={`mx-1 px-3 py-1 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-700"
              : "bg-blue-500 text-white"
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: 10 }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 rounded-lg ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`mx-1 px-3 py-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-700"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularMoviesAPI;
