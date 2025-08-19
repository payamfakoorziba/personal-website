import Appear from "@/components/appear";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    project: "AI Recipe Generator",
    date: "February 2024 - March 2024",
    description:
      "Built an AI recipe generator app that creates easy-to-follow recipes for your favourite dishes! You can customize the recipes to fit your dietary needs, such as keto, vegan, and gluten-free.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Upstash",
      "AI SDK",
      "Zustand",
    ],
    buttons: [
      {
        text: "View Project",
        url: "https://recipe-generator-delta.vercel.app/",
      },
      {
        text: "View Source Code",
        url: "https://github.com/payamfakoorziba/recipe-generator",
      },
    ],
  },
];

const Projects = () => {
  return (
    <Appear
      variants={{
        hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      }}
      transition={{
        delay: 0.8,
        duration: 0.5,
      }}
    >
      <Container className="py-[30px] lg:py-10" id="projects">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Selected Projects
        </h3>
        <div className="flex flex-col gap-y-8 mt-10">
          {projects.map((experience) => (
            <div
              key={experience.project}
              className="group/card p-6 border rounded-xl relative flex flex-col"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h4 className="text-lg md:text-xl">{experience.project}</h4>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2 py-1 text-xs bg-black/5 dark:bg-white/5 text-foreground rounded-xs shadow-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-sm md:text-base mt-5 leading-relaxed">
                  {experience.description}
                </p>
              </div>
              <div className="flex gap-4 mt-10">
                {experience.buttons.map((button, index) => (
                  <Button
                    key={button.text}
                    size="sm"
                    variant={index === 0 ? "default" : "secondary"}
                    className="w-fit"
                  >
                    <Link href={button.url} target="_blank">
                      {button.text}
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="w-full aspect-video mt-10 rounded-xl">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/projects/recipe-generator.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Appear>
  );
};

export default Projects;
