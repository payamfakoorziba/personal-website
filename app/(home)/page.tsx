import Projects from "./sections/projects";
import Gallery from "./sections/gallery";
import Hero from "./sections/hero";
import Experiences from "./sections/experiences";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Projects />
      <Experiences />
    </main>
  );
}
