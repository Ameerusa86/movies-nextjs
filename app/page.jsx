import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Movies from "./api/Movies";
import TvShows from "./api/TvShows";
import { PopularMoviesAPI } from "./api/PopularMoviesAPI";
import TopNavbar from "./components/Navbar/TopNavbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <TopNavbar/>
      <Hero />
      {/* <h1 className="text-4xl text-white text-center">POPULAR MOVIES</h1> */}
      {/* <PopularMoviesAPI /> */}
      {/* <h1 className="text-4xl text-white text-center">MOVIES</h1>
      <Movies />
      <h1 className="text-4xl text-white text-center">TV SHOWS</h1>
      <TvShows /> */}
    </>
  );
}
