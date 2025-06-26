import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Lenis from "lenis";
import ArtSection from "./components/ArtSection";

//GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Lenis for smooth scrolling
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {});

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <ArtSection />
    </main>
  );
};
export default App;
