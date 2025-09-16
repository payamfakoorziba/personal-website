"use client";

import DemoCard from "@/components/ui/demo-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const slides = [1, 2, 3, 4, 5];

const variants = {
  initial: (direction: 1 | -1 | undefined) => ({
    x: direction ? `${100 * direction}%` : "100%",
    opacity: 0,
  }),
  animate: { x: "0%", opacity: 1 },
  exit: (direction: 1 | -1 | undefined) => ({
    x: direction ? `${-100 * direction}%` : "-100%",
    opacity: 0,
  }),
};

function SimpleCarouselComponent({
  animated = false,
  directionAware = false,
}: {
  animated?: boolean;
  directionAware?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1 | undefined>(undefined);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (directionAware) setDirection(-1);
    if (animated) setIsAnimating(true);
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };
  const next = () => {
    if (directionAware) setDirection(1);
    if (animated) setIsAnimating(true);
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prev}
        className="size-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center disabled:opacity-50"
        disabled={isAnimating}
      >
        <ChevronLeft />
      </button>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            className="size-56 sm:size-80 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-2xl font-medium"
            variants={variants}
            initial={animated ? "initial" : undefined}
            animate={animated ? "animate" : undefined}
            exit={animated ? "exit" : undefined}
            custom={direction}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.5,
            }}
            onAnimationComplete={() => {
              if (animated) setIsAnimating(false);
            }}
            key={`slide-${index}`}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={next}
        className="size-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center disabled:opacity-50"
        disabled={isAnimating}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default function SimpleCarousel({
  animated = false,
  directionAware = false,
}: {
  animated?: boolean;
  directionAware?: boolean;
}) {
  return (
    <DemoCard>
      {(resetKey) => (
        <SimpleCarouselComponent
          key={resetKey}
          animated={animated}
          directionAware={directionAware}
        />
      )}
    </DemoCard>
  );
}
