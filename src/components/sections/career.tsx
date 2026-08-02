import BogiLogo from "@/components/bogi-logo";
import { AetherLogo, ClutchLogo, StoryLogo } from "@/components/career-logos";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";

type CareerItem = {
  company: string;
  role: string;
  dates: string;
  href: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  logoClassName: string;
};

const career: CareerItem[] = [
  {
    company: "Bogi",
    role: "Co-Founder",
    // Full dates: Dec 2025 — Present
    dates: "2026",
    href: "https://usebogi.com",
    logo: BogiLogo,
    logoClassName: "h-5 w-auto",
  },
  {
    company: "Clutch",
    role: "Software Engineer",
    // Full dates: Nov 2025 — Apr 2026
    dates: "2025 — 2026",
    href: "https://www.clutch.ca",
    logo: ClutchLogo,
    logoClassName: "size-6",
  },
  {
    company: "Story",
    role: "Lead Frontend Developer and Designer",
    // Full dates: Sep 2024 — Jun 2025
    dates: "2024 — 2025",
    href: "https://story.com",
    logo: StoryLogo,
    logoClassName: "size-6",
  },
  {
    company: "Aether",
    role: "Co-Founder",
    // Full dates: Jan 2024 — Aug 2024
    dates: "2024",
    href: "https://www.aetherwebdesign.com",
    logo: AetherLogo,
    logoClassName: "h-5 w-auto",
  },
];

export default function CareerSection() {
  return (
    <section aria-label="Career" className="w-full">
      {/* Temporarily hidden for a more minimal layout.
      <h2 id="career-heading" className="font-semibold">
        Career
      </h2>
      */}

      <ul className="flex w-full flex-col gap-4">
        {career.map((item) => {
          const Logo = item.logo;

          return (
            <li key={`${item.company}-${item.dates}`}>
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 gap-y-0.5 sm:grid-cols-[1.5rem_minmax(0,1fr)_max-content]"
              >
                <span className="row-span-2 flex size-6 items-center justify-center sm:row-span-1">
                  <Logo className={item.logoClassName} aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-medium group-hover:underline">
                    {item.company}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {item.role}
                  </span>
                </span>

                <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3 sm:row-start-1">
                  {item.dates}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
