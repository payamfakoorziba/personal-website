"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  Transition,
} from "motion/react";
import useMeasure from "react-use-measure";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";

interface AnimatedDropdownProps<T extends string> {
  triggerClassName?: string;
  contentClassName?: string;
  values: readonly T[];
  defaultValue: T;
}

const defaultTransition: Transition = {
  duration: 0.3,
  type: "spring",
  bounce: 0.2,
};

const AnimatedDropdown = <T extends string>({
  triggerClassName,
  contentClassName,
  values,
  defaultValue = values[0],
}: AnimatedDropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  let [ref, bounds] = useMeasure();
  let [triggerRef, triggerBounds] = useMeasure();

  return (
    <MotionConfig transition={defaultTransition}>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            className={cn(
              "inline-flex mx-1 my-0.5 font-semibold w-fit relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-4 focus-visible:ring-offset-card transition-shadow rounded-xl",
              triggerClassName
            )}
            contentEditable={false}
            onClick={() => setOpen((pv) => !pv)}
          >
            <motion.div
              animate={{
                height:
                  triggerBounds.height > 0
                    ? bounds.height + triggerBounds.height
                    : undefined,
                width:
                  triggerBounds.width > 0
                    ? Math.max(bounds.width, triggerBounds.width)
                    : undefined,
              }}
              transition={{
                ...defaultTransition,
                duration: open ? defaultTransition.duration : 0,
              }}
              className={cn(
                "absolute inset-0 rounded-xl bg-lime-400",
                open && "z-10"
              )}
            />

            <motion.div
              className={cn("relative rounded-xl w-fit", open && "z-10")}
              ref={triggerRef}
            >
              <div className="flex items-center px-1.5 md:px-2.5 py-0.5 md:py-1.5 w-full">
                <span className="text-nowrap mr-3">{selected}</span>
                <motion.div
                  animate={{
                    rotate: open ? 180 : 0,
                    translateX: open
                      ? Math.max(bounds.width, triggerBounds.width) -
                        triggerBounds.width
                      : 0,
                  }}
                  transition={{
                    ...defaultTransition,
                    duration: open ? defaultTransition.duration : 0,
                  }}
                >
                  <ChevronDown className="size-4 md:size-6" />
                </motion.div>
              </div>
            </motion.div>
          </button>
        </Popover.Trigger>
        <AnimatePresence>
          {open && (
            <Popover.Portal>
              <Popover.Content align="start" asChild>
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    delay: 0.2,
                  }}
                  className={cn(
                    "font-semibold text-lg md:text-3xl overflow-hidden",
                    open && "z-10",
                    contentClassName
                  )}
                >
                  <div ref={ref} className="flex flex-col w-fit px-4 pb-4">
                    {values
                      .filter((item: string) => item !== selected)
                      .map((item: string) => (
                        <button
                          key={item}
                          onClick={() => {
                            setSelected(item as T);
                            setOpen(false);
                          }}
                          className={cn(
                            "opacity-50 cursor-pointer text-left hover:opacity-100 focus-visible:outline-none focus-visible:opacity-100 py-1"
                          )}
                        >
                          {item}
                        </button>
                      ))}
                  </div>
                </motion.div>
              </Popover.Content>
            </Popover.Portal>
          )}
        </AnimatePresence>
      </Popover.Root>
    </MotionConfig>
  );
};

export default AnimatedDropdown;
