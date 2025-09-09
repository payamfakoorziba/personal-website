import { Container } from "@/components/container";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";
import BlurAppear from "@/components/blur-text-appear";
import Appear from "@/components/appear";
import ProfilePicture from "../components/profile-picture";
import StoryLogo from "@/public/story-logo.png";
import ZinoLogo from "@/public/zino-logo.svg";
import AetherLogo from "@/public/aether-logo.svg";
import { TooltipProvider } from "@/components/ui/tooltip";
import ZinoScreenshot from "@/public/zino-screenshot.png";
import StoryScreenshot from "@/public/story-screenshot.png";
import AetherScreenshot from "@/public/aether-screenshot.png";
import { LogoLink } from "@/components/logo-link";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link target="_blank" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const appearVariants = {
  hidden: { y: 10, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

const Hero = () => {
  return (
    <TooltipProvider>
      <Container>
        <section className="py-10">
          {/* <Spotlight className="-top-80 -left-80 -z-10" fill="white" /> */}
          <ProfilePicture />
          <h1 className="mt-6 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurAppear staggerDelay={0.05}>Hi, I&apos;m Payam 👋🏻</BlurAppear>
          </h1>
          <Appear
            variants={appearVariants}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="mt-2 md:mt-3 text-foreground dark:bg-linear-to-r from-white to-[#C6C6C6] bg-clip-text dark:text-transparent w-fit text-lg md:text-xl lg:text-2xl">
              Web Developer and Designer
            </h2>
          </Appear>
          <Appear
            variants={appearVariants}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ul className="mt-8 leading-relaxed md:text-xl/relaxed font-[350] space-y-1 list-disc list-inside">
              <span className="font-medium">TL;DR</span>
              <li className="">
                Building{" "}
                <LogoLink
                  href="https://www.zinoacademy.com/"
                  logo={ZinoLogo}
                  alt="Zino Logo"
                  screenShot={ZinoScreenshot}
                >
                  Zino Academy
                </LogoLink>
              </li>
              <li>
                {" "}
                Prev. led frontend and design at&nbsp;
                <LogoLink
                  href="https://story.com"
                  logo={StoryLogo}
                  alt="Story Logo"
                  screenShot={StoryScreenshot}
                >
                  Story.com
                </LogoLink>
              </li>
              <li>
                Before joining Story, I ran a small consulting agency
                called&nbsp;
                <LogoLink
                  href="https://aetherwebdesign.com"
                  logo={AetherLogo}
                  alt="Aether Logo"
                  screenShot={AetherScreenshot}
                >
                  Aether
                </LogoLink>
              </li>
            </ul>
          </Appear>
          <Appear
            variants={appearVariants}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 flex gap-6"
          >
            <SocialLink
              href="https://www.instagram.com/payamfkz/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://x.com/payamfkz"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/payamfakoorziba"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/payam-fakoorziba-b115071b3/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </Appear>
        </section>
      </Container>
    </TooltipProvider>
  );
};

export default Hero;
