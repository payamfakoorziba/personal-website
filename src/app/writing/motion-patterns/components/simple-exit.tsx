"use client";

import DemoCard from "@/components/ui/demo-card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function SimpleExitComponent() {
  const [currentBall, setCurrentBall] = useState("lime");

  const handleToggleBall = () => {
    setCurrentBall((currentBall) => (currentBall === "lime" ? "teal" : "lime"));
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentBall} //Don't forget the key prop!
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0 }}
        className={cn(
          "size-20 rounded-full cursor-pointer flex items-center justify-center text-xs",
          currentBall === "lime"
            ? "bg-lime-500 text-lime-950"
            : "bg-teal-500 text-teal-950"
        )}
        onClick={handleToggleBall}
      >
        Click me!
      </motion.div>
    </AnimatePresence>
  );
}

function SimpleExit() {
  return (
    <DemoCard className="grid place-content-center">
      {(resetKey) => <SimpleExitComponent key={resetKey} />}
    </DemoCard>
  );
}

export default SimpleExit;
