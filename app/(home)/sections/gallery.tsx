import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Jujitsu, Boys, Chess, Gym, Marco, Sunset } from "@/public/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <Container>
      <section
        className={cn(
          "py-10 relative",
          "grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-5 grid-flow-col",
          "*:overflow-hidden *:rounded-xl"
        )}
      >
        <div className="absolute -inset-4 sm:-inset-8 bg-grid-small-black/20 dark:bg-grid-small-white/20 -z-10">
          <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-background" />
          <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-background" />
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-background" />
          <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-background" />
        </div>
        <div className="relative shadow-md aspect-[7/10] row-span-2">
          <Image fill src={Chess} alt="Chess" className="object-cover" />
        </div>
        <div className="relative shadow-md">
          <Image fill src={Marco} alt="Marco" className="object-cover" />
        </div>
        <div className="relative shadow-md row-span-1">
          <Image fill src={Boys} alt="Boys" className="object-cover" />
        </div>
        <div className="relative shadow-md row-span-2 order-2 md:order-none">
          <Image fill src={Gym} alt="Gym" className="object-cover" />
        </div>
        <div className="relative shadow-md row-span-1 md:row-span-2 order-1 md:order-none">
          <Image fill src={Sunset} alt="Sunset" className="object-cover" />
        </div>
        <div className="relative shadow-md order-3 md:order-none">
          <Image fill src={Jujitsu} alt="Jujitsu" className="object-cover" />
        </div>
      </section>
    </Container>
  );
};

export default Gallery;
