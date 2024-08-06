import { Container } from "@/components/container";
import { Spotlight } from "@/components/ui/spotlight";
import profile from "@/public/headshot.jpeg";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProfilePicture() {
  return (
    <div
      className="size-[60px] md:size-[80px] rounded-full grid place-content-center"
      style={{
        background:
          "conic-gradient(#DD00AF, #E002AC, #FF9F01, #FF9F01, #FFA100, #DD00AF)",
      }}
    >
      <div className="size-[56px] md:size-[76px] rounded-full bg-background grid place-content-center">
        <Image
          src={profile}
          alt="Profile picture"
          className="rounded-full size-[52px] md:size-[72px]"
        />
      </div>
    </div>
  );
}

function AetherLogo({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

const Hero = () => {
  return (
    <Container>
      <section className="py-10">
        <Spotlight className="-top-80 -left-80 -z-10" fill="white" />
        <ProfilePicture />
        <h1 className="mt-6 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I&apos;m Payam 👋🏻
        </h1>
        <h2 className="mt-3 text-foreground dark:bg-gradient-to-r from-white to-[#C6C6C6] bg-clip-text dark:text-transparent w-fit text-lg md:text-xl lg:text-2xl">
          Web Developer and Designer
        </h2>
        <p className="mt-8 max-w-2xl leading-relaxed md:text-xl opacity-85 font-[350]">
          I&apos;m a full stack developer from Toronto. I&apos;m passionate
          about building aesthetically pleasing user interfaces. Currently
          building&nbsp;
          <Link
            href="https://aetherwebdesign.com"
            className="px-[4.5px] h-[1.625rem] bg-white/10 rounded-md  inline-flex items-center border dark:border-white/10 text-sm"
          >
            <AetherLogo className="mr-2 inline-flex w-fit h-4" />
            Aether
          </Link>
          .
        </p>
        <div className="flex gap-6 mt-8 *:size-6 *:text-zinc-800 *:dark:text-zinc-400">
          <Instagram />
          <Linkedin />
          <Github />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
