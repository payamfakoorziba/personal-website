import RecentWork from "./sections/recent-work";
import Hero from "./sections/hero";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Gallery /> */}
      <Projects />
      <RecentWork />
      <Experiences />
    </main>
  );
}
