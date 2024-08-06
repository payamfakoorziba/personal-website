import Projects from "./sections/projects";
import Gallery from "./sections/gallery";
import Hero from "./sections/hero";
import Experiences from "./sections/experiences";
import GetInTouch from "./sections/get-in-touch";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Projects />
      <Experiences />
      <GetInTouch />
    </main>
  );
}
