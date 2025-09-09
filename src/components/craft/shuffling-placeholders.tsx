"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PromptInput = ({
  className,
  placeholders,
}: {
  className: string;
  placeholders: string[];
}) => {
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (!value) {
      const timer = setInterval(() => {
        setPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [value, placeholders.length]);

  return (
    <div className={cn("relative", className)}>
      <input
        className="relative pl-6 pr-16 h-full w-full text-foreground focus:outline-none bg-secondary rounded-full placeholder:hidden"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />

      {!value && (
        <AnimatePresence initial={false}>
          <motion.p
            initial={
              placeholderIndex > 0
                ? { opacity: 0, y: 15, filter: "blur(4px)" }
                : false
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            style={{
              translateY: "-50%",
            }}
            className="absolute top-1/2 left-6 h-fit select-none pointer-events-none text-muted-foreground font-light"
            key={placeholderIndex}
          >
            {placeholders[placeholderIndex]}
          </motion.p>
        </AnimatePresence>
      )}

      <button>
        <span
          className={cn(
            "absolute inset-y-2 right-2 bg-neutral-300 rounded-full flex items-center justify-center aspect-square transition",
            !value ? "bg-neutral-500" : "bg-primary"
          )}
        >
          <ArrowRight className="text-white size-4 md:size-5" />
        </span>
      </button>
    </div>
  );
};

export default PromptInput;
