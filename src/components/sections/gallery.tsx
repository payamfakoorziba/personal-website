"use client";

import { cn } from "@/lib/utils";
import ImageHoverCard from "../ui/image-hover-card";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Gallery = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative",
        "grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-5 grid-flow-col",
        "*:overflow-hidden *:rounded-[6px]",
        className
      )}
    >
      <ImageHoverCard
        image={"/gallery/mount-tamalpais.jpg"}
        description="Hiking at Mount Tamalpais, California."
        className="row-span-2 aspect-7/11"
      />
      <ImageHoverCard
        image={"/gallery/chess.jpg"}
        description="My most recent chess tournament at University of Toronto."
      />
      <ImageHoverCard
        image={"/gallery/studio.jpg"}
        description="My home studio for content creation."
      />
      <ImageHoverCard
        image={"/gallery/vegas.jpg"}
        className="row-span-2 order-2 md:order-0"
        description="Vegas trip for UFC 310!"
      />
      <ImageHoverCard
        image={"/gallery/gym.jpg"}
        className="row-span-1 md:row-span-2 order-1 md:order-0"
        description="Post workout mirror pic at Goldring Centre."
      />
      <ImageHoverCard
        image={"/gallery/first-jujitsu.jpg"}
        className="order-3 md:order-0"
        description="My first jujitsu competition. Already training for the next one!"
      />
    </div>
  );
};

const GalleryWithToggle = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("relative", className)}>
      <p
        className={cn("text-muted-foreground", isOpen && "invisible")}
        onClick={() => setIsOpen(true)}
      >
        Click{" "}
        <span className="text-muted-foreground cursor-pointer underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200">
          here
        </span>{" "}
        to see a glimpse of my life :&#41;
      </p>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.6,
              opacity: {
                delay: 0.5,
              },
            }}
            className="overflow-hidden"
          >
            <Gallery />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { GalleryWithToggle, Gallery };
