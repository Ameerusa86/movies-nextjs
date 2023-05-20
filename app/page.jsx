import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/Navbar/TopNavbar";
import SearchBox from "./components/Search/Search";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
      <TopNavbar />
      <SearchBox/>
      <Hero />
    </>
  );
}
