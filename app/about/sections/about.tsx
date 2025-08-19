"use client";

import Appear from "@/components/appear";
import { Container } from "@/components/container";
import Link from "next/link";
import StoryLogo from "@/public/story-logo.png";
import AetherLogo from "@/public/aether-logo.svg";
import StoryScreenshot from "@/public/story-screenshot.png";
import AetherScreenshot from "@/public/aether-screenshot.png";
import { LogoLink } from "@/components/logo-link";
import { TooltipProvider } from "@/components/ui/tooltip";

const appearVariants = {
  hidden: { y: 10, opacity: 0, filter: "blur(4px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

const fideProfileLink = "https://ratings.fide.com/profile/2645254";

const AboutMe = () => {
  return (
    <TooltipProvider>
      <Container>
        <section className="py-10">
          <Appear
            variants={appearVariants}
            transition={{
              duration: 0.5,
            }}
          >
            <h1 className="mt-6 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              About Me
            </h1>
          </Appear>
          <Appear
            variants={appearVariants}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <section className="mt-8 max-w-3xl leading-relaxed md:text-lg font-[350]">
              I&apos;m a full stack developer with a passion for building
              aesthetically pleasing user interfaces. In my latest role, I was a
              lead frontend developer and designer at&nbsp;
              <LogoLink
                href="https://story.com"
                logo={StoryLogo}
                alt="Story Logo"
                screenShot={StoryScreenshot}
              >
                Story.com
              </LogoLink>
              .
              <br />
              <br />
              Before joining Story, I ran&nbsp;
              <LogoLink
                href="https://aetherwebdesign.com"
                logo={AetherLogo}
                alt="Aether Logo"
                screenShot={AetherScreenshot}
              >
                Aether
              </LogoLink>
              , a small web design and development agency, where I create
              high-performance, conversion-optimized websites for businesses.
              <br />
              <br />
              When I&apos;m not coding, I enjoy&nbsp;
              <Link
                className="underline"
                href={fideProfileLink}
                target="_blank"
              >
                playing chess
              </Link>
              &nbsp;professionally and training jujitsu, which keep me inspired
              and creative. Below, you&apos;ll find a glimpse into my life
              beyond the keyboard.
            </section>
          </Appear>
        </section>
      </Container>
    </TooltipProvider>
  );
};

export default AboutMe;
