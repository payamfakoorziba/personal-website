import RecentWork from "./sections/recent-work";
import Gallery from "./sections/gallery";
import Hero from "./sections/hero";
import Experiences from "./sections/experiences";
import GetInTouch from "./sections/get-in-touch";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Projects />
      <RecentWork />
      <Experiences />
      <GetInTouch />
    </main>
  );
}
