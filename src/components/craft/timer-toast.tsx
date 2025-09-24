"use client";

import { useTimer } from "@/contexts/timer-context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TimerDisplay } from "./kitchen-timer";
import { motion, AnimatePresence } from "motion/react";

const TimerToast = () => {
  const { timerState, timeLeft } = useTimer();
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log("TimerToast useEffect triggered:", {
      timerState,
      pathname,
      timestamp: new Date().toISOString(),
      condition: timerState === "active" && pathname !== "/craft/kitchen-timer",
    });
    setShow(timerState === "active" && pathname !== "/craft/kitchen-timer");
  }, [timerState, pathname]);

  // Add a mount/unmount effect to see if component is being remounted
  useEffect(() => {
    console.log("TimerToast mounted");
    return () => console.log("TimerToast unmounted");
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            className="bg-white dark:bg-neutral-900 p-10 rounded-xl shadow-lg scale-50 origin-bottom-right"
          >
            <TimerDisplay timeLeft={timeLeft} isFlashing={false} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimerToast;
