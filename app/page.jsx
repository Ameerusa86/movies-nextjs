import MainSwiper from "./components/dataSwiper/MainSwiper";
import MoviesSwiper from "./components/dataSwiper/MoviesSwiper";
import TVShowsSwiper from "./components/dataSwiper/TVShowsSwiper";


export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <TopNavbar /> */}
      {/* <Hero /> */}
      <MainSwiper/>
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
