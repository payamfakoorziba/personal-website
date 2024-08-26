import { Container } from "@/components/container";
import Color from "color";
import NavidBestGroup from "@/public/projects/navid-best-group.jpg";
import BayviewGlenDental from "@/public/projects/bayview-glen.jpg";
import Ship4x6 from "@/public/projects/ship4x6.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
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
    image: Ship4x6,
    color: "#5C8CAB",
    url: "https://ship4x6.com/",
    buttons: [
      {
        text: "View Project",
        url: "https://ship4x6.com/",
      },
    ],
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
    image: BayviewGlenDental,
    color: "#2680D9",
    url: "https://www.bayviewglendental.com/",
    buttons: [
      {
        text: "View Project",
        url: "https://www.bayviewglendental.com/",
      },
      {
        text: "Read Case Study",
        url: "https://www.aetherwebdesign.com/case-studies/bayview-glen-dental",
      },
    ],
  },
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
    image: NavidBestGroup,
    color: "#D9A326",
    url: "https://navid-best-group.vercel.app/",
    underDevelopment: true,
    buttons: [
      {
        text: "View Project",
        url: "https://navid-best-group.vercel.app/",
      },
    ],
  },
];

const RecentWork = () => {
  return (
    <Container className="py-[30px] lg:py-10">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Recent Freelance/Agency Work
      </h3>
      <div className="flex flex-col gap-y-8 mt-10">
        {projects.map((experience) => (
          <div
            key={experience.project}
            className="group/card p-6 border rounded-xl relative flex flex-col min-h-[400px]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="text-lg md:text-xl">{experience.project}</h4>
              {/* <p className="font-light text-stone-600 dark:text-stone-300 text-sm md:text-base">
                {experience.date}
              </p> */}
            </div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-6 lg:max-w-[50%]">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-2 py-1 text-xs bg-black/5 dark:bg-white/5 text-foreground rounded-sm shadow-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm md:text-base mt-5 lg:max-w-[60%] leading-relaxed">
                  {experience.description}
                </p>
                {experience.underDevelopment && (
                  <div className="text-xs px-2 py-1 rounded-md mt-4 border w-fit select-none">
                    🚧&nbsp;&nbsp;Under active development
                  </div>
                )}
              </div>
              {/* <Button
                size="sm"
                variant="secondary"
                className="mt-5 w-fit"
                asChild
              >
                <Link href={experience.url} target="_blank">
                  View Project
                </Link>
              </Button> */}
              <div className="flex gap-4 mt-5">
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
            </div>
            <div
              className="px-5 pt-5 relative mt-8 lg:absolute lg:bottom-0 lg:right-6 w-full sm:w-72 rounded-t-xl group overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(
                ${Color(experience.color).hex()},
                ${Color(experience.color).darken(0.5).hex()})`,
              }}
            >
              <Image
                src={experience.image}
                alt={experience.project}
                quality={100}
                className="shadow-xl shadow-black translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RecentWork;
