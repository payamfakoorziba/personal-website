import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Jujitsu from "@/public/gallery/jujitsu.jpg";
import Boys from "@/public/gallery/boys.jpg";
import Chess from "@/public/gallery/chess.jpg";
import Gym from "@/public/gallery/gym.jpg";
import Marco from "@/public/gallery/marco.jpg";
import Sunset from "@/public/gallery/sunset.jpg";
import ImageHoverCard from "@/components/image-hover-card";
import Appear from "@/components/appear";

export { Jujitsu, Boys, Chess, Gym, Marco, Sunset };

const Gallery = () => {
  return (
    <Container className="py-10 lg:py-14">
      <Appear
        className={cn(
          "relative",
          "grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-5 grid-flow-col",
          "*:overflow-hidden *:rounded-xl"
        )}
        variants={{
          hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
          visible: { y: 0, opacity: 1, filter: "blur(0px)" },
        }}
        transition={{
          delay: 1,
          duration: 0.75,
        }}
      >
        <div className="absolute -inset-4 sm:-inset-8 bg-grid-small-black/15 dark:bg-grid-small-white/15 -z-20">
          <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-background" />
          <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-background" />
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-background" />
          <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-background" />
        </div>
        <ImageHoverCard
          image={Chess}
          alt="Chess"
          description="Final round of the Reading Week Open Chess Tournament 2023."
          className="row-span-2 aspect-[7/10]"
        />
        <ImageHoverCard
          image={Marco}
          description="My favourite professor, Marco Gualtieri, teaching MAT240."
          alt="Marco"
        />
        <ImageHoverCard
          image={Boys}
          alt="Boys"
          description="My friends and I at Robarts Library, 4'th floor."
        />
        <ImageHoverCard
          image={Gym}
          alt="Gym"
          className="row-span-2 order-2 md:order-none"
          description="Post workout mirror pic at Goldring Centre."
        />
        <ImageHoverCard
          image={Sunset}
          alt="Sunset"
          className="row-span-1 md:row-span-2 order-1 md:order-none"
          description="My workspace at my old apartment near the university."
        />
        <ImageHoverCard
          image={Jujitsu}
          alt="Jujitsu"
          className="order-3 md:order-none"
          description="My first jujitsu competition. Excited to compete again!"
        />
      </Appear>
    </Container>
  );
};

export default Gallery;
