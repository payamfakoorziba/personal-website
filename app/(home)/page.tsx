import Experiences from "./sections/experiences";
import Gallery from "./sections/gallery";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Experiences />
      <div className="min-h-screen"></div>
    </main>
  );
}
