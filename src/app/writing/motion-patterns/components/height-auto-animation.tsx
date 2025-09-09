"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import DemoCard from "@/components/ui/demo-card";
import useMeasure from "react-use-measure";
import { Button } from "@/components/ui/button";

function HeightAutoAnimationComponent() {
  const [expanded, setExpanded] = useState(false);
  let [ref, bounds] = useMeasure();

  return (
    <>
      <div
        className="w-sm p-3.5 bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg relative"
        onClick={() => setExpanded(!expanded)}
      >
        <motion.div
          animate={{ height: bounds.height }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <div className="overflow-hidden flex flex-col gap-2">
              <div className="w-1/3 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              <div className="w-1/2 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              <div className="w-1/4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              {expanded && (
                <>
                  <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
                  <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <Button
        size="sm"
        className="relative"
        onClick={() => setExpanded(!expanded)}
      >
        Toggle content
      </Button>
    </>
  );
}

function HeightAutoAnimation() {
  return (
    <DemoCard className="flex flex-col items-center justify-center gap-2 min-h-[240px]">
      {(resetKey) => <HeightAutoAnimationComponent key={resetKey} />}
    </DemoCard>
  );
}

export default HeightAutoAnimation;
