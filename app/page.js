import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="container position-relative p-0 web__container">
        <Navbar />
        <div className="web__content">
          <HeroSection />
          <div className="content-box"></div>
        </div>
        <div className="line line__01"></div>
        <div className="line line__02"></div>
        <div className="line line__03"></div>
        <div className="scroll__down">Scroll Down</div>
      </div>
    </main>
  );
}
