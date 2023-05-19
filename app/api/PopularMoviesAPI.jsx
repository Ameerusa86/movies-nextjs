import axios from "axios";
import Card from "../components/Card/Card";

const API_KEY = process.env.API_KEY;

const PopularMoviesAPI = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
  );
  const popularMovies = response.data.results;
  return popularMovies;
};

export { PopularMoviesAPI };
