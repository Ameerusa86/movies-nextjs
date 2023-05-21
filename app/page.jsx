import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/Navbar/TopNavbar";
import SearchBox from "./components/Search/Search";
import SwiperPage from "./components/Swiper/Swiper";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <TopNavbar />
      <SearchBox />
      <Hero />
      <h1 className="text-center text-4xl mb-5 font-bold text-white">Trending Movies</h1>
      <SwiperPage/>
    </>
  );
}
