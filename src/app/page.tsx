import Container from "@/components/layout/container";
import IntroSection from "@/components/sections/intro";
// Temporarily hidden while the portfolio content is being refreshed.
// import ProjectsSection from "@/components/sections/projects";
// import WritingSection from "@/components/sections/writing";
// import CraftSection from "@/components/sections/craft";
import ConnectSection from "@/components/sections/connect";

export default function Home() {
  return (
    <main className="py-20 md:py-32 font-sans">
      <Container>
        <IntroSection />
        {/* Temporarily hidden while the portfolio content is being refreshed.
        <WritingSection />
        <ProjectsSection />
        <CraftSection />
        */}
        <ConnectSection />
      </Container>
    </main>
  );
}
