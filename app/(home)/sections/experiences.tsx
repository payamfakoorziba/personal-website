import { Container } from "@/components/container";

const experiences = [
  {
    company: "Story.com",
    position: "Lead Frontend Developer and Designer",
    startDate: "September 2024",
    endDate: "Present",
    description:
      "Lead the development of Story's web application, a platform for creating and sharing stories with AI-powered tools.",
  },

  {
    company: "Aether Web Design",
    position: "Co-Founder and Lead Developer",
    startDate: "April 2024",
    endDate: "August 2024",
    description:
      "Co-founded Aether Web Design, a web design and development agency in Toronto specializing in high-performance, trust-building, and conversion-optimized websites.",
  },
  {
    company: "Payam Technologies Inc.",
    position: "Freelance Web Developer",
    startDate: "September 2022",
    endDate: "March 2024",
    description:
      "Delivered high-quality web applications and websites to clients as a freelance web developer. Worked closely with clients to understand their requirements and bring their vision to life.",
  },
];

const Experiences = () => {
  return (
    <Container className="py-[30px] lg:py-10">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Experiences
      </h3>
      <div className="flex flex-col gap-y-10">
        {experiences.map((experience, index) => (
          <div key={index} className="mt-6 border-b pb-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h4 className="text-lg md:text-xl">{experience.company}</h4>
                <h5 className="text-sm md:text-base font-medium">
                  {experience.position}
                </h5>
              </div>
              <p className="font-light text-stone-600 dark:text-stone-300 mt-2 md:mt-0 text-xs md:text-sm">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <p className="text-sm/relaxed md:text-base/relaxed mt-6">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
