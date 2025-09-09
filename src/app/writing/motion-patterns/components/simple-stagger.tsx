"use client";

import DemoCard from "@/components/ui/demo-card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function SimpleStaggerComponent({
  animateContainer = false,
}: {
  animateContainer?: boolean;
}) {
  const limeColors = [
    "bg-lime-800 dark:bg-lime-700",
    "bg-lime-700 dark:bg-lime-600",
    "bg-lime-600 dark:bg-lime-500",
    "bg-lime-500 dark:bg-lime-400",
    "bg-lime-400 dark:bg-lime-300",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: animateContainer ? "beforeChildren" : undefined,
      },
    },
  };

  const ballVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "flex gap-4",
        animateContainer &&
          "bg-neutral-200/50 dark:bg-neutral-800/50 p-4 rounded-xl"
      )}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          variants={ballVariants}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.1 * index, // Each ball is delayed by 0.1s * index
          }}
          className={cn("size-12 sm:size-20 rounded-full", limeColors[index])}
        />
      ))}
    </motion.div>
  );
}

function SimpleStagger({
  animateContainer = false,
}: {
  animateContainer?: boolean;
}) {
  return (
    <DemoCard className="grid place-content-center">
      {(resetKey) => (
        <SimpleStaggerComponent
          key={resetKey}
          animateContainer={animateContainer}
        />
      )}
    </DemoCard>
  );
}

export default SimpleStagger;
