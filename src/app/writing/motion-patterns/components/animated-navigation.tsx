"use client";

import DemoCard from "@/components/ui/demo-card";
import { motion } from "motion/react";
import { useState } from "react";

function AnimatedNavigationComponent() {
  const items = ["Home", "About", "Contact", "Services", "Products"];
  const [activeItem, setActiveItem] = useState<string | undefined>("Home");

  return (
    <div className="flex items-center justify-center gap-4">
      {items.map((item) => (
        <button
          key={item}
          onMouseOver={() => setActiveItem(item)}
          className="relative px-2 py-1 text-sm font-medium"
        >
          {activeItem === item && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-neutral-500/10 dark:bg-neutral-400/10 rounded-md"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.4,
              }}
            />
          )}
          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
  );
}

function AnimatedNavigation() {
  return (
    <DemoCard>
      {(resetKey) => <AnimatedNavigationComponent key={resetKey} />}
    </DemoCard>
  );
}

export default AnimatedNavigation;
