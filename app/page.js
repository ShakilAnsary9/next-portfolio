import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollDownButton from "./components/ScrollDown";

export default function Home() {
  return (
    <main>
      <div className="container position-relative p-0 web__container">
        <Navbar />
        <div className="web__content">
          <HeroSection />
          <Projects />
          <div className="content-box"></div>
        </div>
        <div className="line line__01"></div>
        <div className="line line__02"></div>
        <div className="line line__03"></div>
        <ScrollDownButton />
      </div>
    </main>
  );
}
