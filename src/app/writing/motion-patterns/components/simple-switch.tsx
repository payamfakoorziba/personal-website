"use client";

import DemoCard from "@/components/ui/demo-card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";

function SimpleSwitchComponent({ animated = false }: { animated?: boolean }) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={cn(
        "p-1 w-14 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center",
        isOn ? "justify-end" : "justify-start"
      )}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className={cn("size-6 bg-neutral-800 dark:bg-neutral-200 rounded-full")}
        layout={animated}
        transition={{
          duration: 0.2,
        }}
      />
    </div>
  );
}

function SimpleSwitch({ animated = false }: { animated?: boolean }) {
  return (
    <DemoCard className="grid place-content-center">
      {(resetKey) => (
        <SimpleSwitchComponent key={resetKey} animated={animated} />
      )}
    </DemoCard>
  );
}

export default SimpleSwitch;
