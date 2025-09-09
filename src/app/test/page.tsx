"use client";

import DemoCard from "@/components/ui/demo-card";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const SimpleExpandableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-sm p-3.5 bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 w-full"
      >
        <span>Click me to expand!</span>
        <ChevronDown
          className={`transition-transform size-5 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="overflow-hidden flex flex-col gap-2 pt-4">
              <div className="w-1/3 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              <div className="w-1/2 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              <div className="w-1/4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TestPage = () => {
  return (
    <DemoCard>
      {(resetKey) => <SimpleExpandableContent key={resetKey} />}
    </DemoCard>
  );
};

export default TestPage;
