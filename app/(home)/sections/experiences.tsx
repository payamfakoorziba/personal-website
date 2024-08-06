import { Container } from "@/components/container";

const experiences = [
  {
    project: "Navid Best Group",
    date: "June 2024 - Present",
    description:
      "Building a modern, aesthetically pleasing website for Navid Best Group, a home remodelling and renovation company.",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "Sanity",
    ],
    action: "View Project",
  },
  {
    project: "Bayview Glen Dental",
    date: "April 2024 - May 2024",
    description:
      "Designed and developed a brand new website for Bayview Glen Dental Office, a prominent dental facility located in Richmond Hill.",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
    ],
    action: "View Project",
  },
  {
    project: "Ship4x6",
    date: "February 2024 - March 2024",
    description:
      "Built an e-commerce storefront website with an admin dashboard for Ship4x6, a Canadian shipping label company.",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
    ],
    action: "View Project",
  },
];

const Experiences = () => {
  return (
    <Container>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Experiences
      </h3>
      <div className="flex flex-col gap-y-8 mt-10">
        {experiences.map((experience, index) => (
          <div key={experience.project} className="p-6 border rounded-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="text-2xl">{experience.project}</h4>
              <p className="font-light text-stone-600 dark:text-stone-300">
                {experience.date}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 lg:max-w-[50%]">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-2 py-1 text-xs bg-black/10 dark:bg-white/10 text-foreground rounded-sm shadow-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
            <p className="text-sm md:text-base mt-5 lg:max-w-[60%] leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
