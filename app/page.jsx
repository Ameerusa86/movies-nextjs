import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/Navbar/TopNavbar";
import SearchBox from "./components/Search/Search";
import MoviesSwiper from "./components/dataSwiper/MoviesSwiper";
import TVShowsSwiper from "./components/dataSwiper/TVShowsSwiper";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <TopNavbar /> */}
      <SearchBox />
      <Hero />
      <h1 className="text-center text-4xl mb-5 font-bold text-white">
        Trending Movies
      </h1>
      <MoviesSwiper />
      <h1 className="text-center text-4xl mb-5 font-bold text-white mt-5">
        Latest TV Shows
      </h1>

      <TVShowsSwiper />
    </>
  );
}
