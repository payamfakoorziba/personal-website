import { Container } from "@/components/container";
import { Spotlight } from "@/components/ui/spotlight";

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
import Image from "next/image";

export function AetherLogo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.2069 11.446H15.0922L10.5266 5.33563L10.0275 4.66752L11.5761 2.5719L12.082 3.2488L18.2069 11.446Z"
        fill="#007D8C"
      />
      <path
        d="M25.4339 9.55396V11.4886H22.1391L17.4602 17.7511L16.9544 18.428L15.4058 16.3324L15.9049 15.6643L20.4711 9.55396H25.4339Z"
        fill="#007D8C"
      />
      <path
        opacity="0.4"
        d="M12.082 3.2488L10.5266 5.33563L10.0275 4.66752L11.5761 2.5719L12.082 3.2488Z"
        fill="white"
      />
      <path
        d="M11.5761 2.57195L4.96282 11.446H0V9.51136H3.29483L10.0275 0.5L11.5761 2.57195Z"
        fill="#08D9D6"
      />
      <path
        opacity="0.4"
        d="M17.4602 17.7511L16.9544 18.428L15.4058 16.3324L15.9049 15.6643L17.4602 17.7511Z"
        fill="white"
      />
      <path
        d="M15.4057 20.5L16.9549 18.428L10.341 9.55396H7.2276L15.4057 20.5Z"
        fill="#08D9D6"
      />
    </svg>
  );
}

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
    <Container>
      <section className="py-10">
        <Spotlight className="-top-80 -left-80 -z-10" fill="white" />
        <ProfilePicture />
        <h1 className="mt-6 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <BlurAppear>Hi, I&apos;m Payam 👋🏻</BlurAppear>
        </h1>
        <Appear
          variants={appearVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="mt-2 md:mt-3 text-foreground dark:bg-gradient-to-r from-white to-[#C6C6C6] bg-clip-text dark:text-transparent w-fit text-lg md:text-xl lg:text-2xl">
            Web Developer and Designer
          </h2>
        </Appear>
        <Appear
          variants={appearVariants}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="mt-8 max-w-3xl leading-relaxed md:text-xl/relaxed font-[350]">
            I&apos;m passionate about building aesthetically pleasing user
            interfaces. Currently a lead frontend developer and designer
            at&nbsp;
            <Link
              href="https://story.com"
              target="_blank"
              className="px-[4.5px] h-[1.625rem] bg-white/10 rounded-md  inline-flex items-center border dark:border-white/10 text-sm"
            >
              <Image
                className="mr-2 inline-flex w-fit h-4"
                src={StoryLogo}
                alt="Story Logo"
              />
              Story.com
            </Link>
            . Before joining Story, I ran a small web design and development
            agency called&nbsp;
            <Link
              href="https://aetherwebdesign.com"
              target="_blank"
              className="px-[4.5px] h-[1.625rem] bg-white/10 rounded-md  inline-flex items-center border dark:border-white/10 text-sm"
            >
              <AetherLogo className="mr-2 inline-flex w-fit h-4" />
              Aether
            </Link>
            .
          </p>
        </Appear>
        <Appear
          variants={appearVariants}
          transition={{ delay: 0.8, duration: 0.5 }}
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
  );
};

export default Hero;
