import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
