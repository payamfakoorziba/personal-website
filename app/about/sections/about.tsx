import { AetherLogo } from "@/app/(home)/sections/hero";
import Appear from "@/components/appear";
import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import StoryLogo from "@/public/story-logo.png";

const appearVariants = {
  hidden: { y: 10, opacity: 0, filter: "blur(4px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

const fideProfileLink = "https://ratings.fide.com/profile/2645254";

const AboutMe = () => {
  return (
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
          <h2 className="mt-3 md:mt-4 text-foreground w-fit text-lg md:text-xl lg:text-2xl">
            Thanks for stopping by!
          </h2>
        </Appear>
        <Appear
          variants={appearVariants}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
        >
          <p className="mt-8 max-w-3xl leading-relaxed md:text-lg font-[350]">
            I&apos;m a full stack developer with a passion for building
            aesthetically pleasing user interfaces. I&apos;m currently a lead
            frontend developer and designer at&nbsp;
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
            .
            <br />
            <br />
            Before joining Story, I ran&nbsp;
            <Link
              href="https://aetherwebdesign.com"
              target="_blank"
              className="px-[4.5px] h-[1.625rem] bg-white/10 rounded-md  inline-flex items-center border dark:border-white/10 text-sm"
            >
              <AetherLogo className="mr-2 inline-flex w-fit h-4" />
              Aether
            </Link>
            , a small web design and development agency, where I create
            high-performance, conversion-optimized websites for businesses.
            <br />
            <br />
            When I&apos;m not coding, I enjoy&nbsp;
            <Link className="underline" href={fideProfileLink} target="_blank">
              playing chess
            </Link>
            &nbsp;professionally and training jujitsu and boxing, which keep me
            inspired and creative. Below, you&apos;ll find a glimpse into my
            life beyond the keyboard.
          </p>
        </Appear>
      </section>
    </Container>
  );
};

export default AboutMe;
