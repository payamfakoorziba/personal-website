"use client";

import { useTimer } from "@/contexts/timer-context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TimerDisplay } from "./kitchen-timer";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const TimerToast = () => {
  const { timerState, timeLeft } = useTimer();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setShow(timerState === "active" && pathname !== "/craft/kitchen-timer");
  }, [timerState, pathname]);

  return (
    <div className="fixed bottom-4 right-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            className="bg-white dark:bg-neutral-900 p-10 rounded-2xl shadow-lg scale-50 origin-bottom-right relative"
            onClick={() => router.push("/craft/kitchen-timer")}
          >
            <TimerDisplay timeLeft={timeLeft} isFlashing={false} />
            <button
              className="absolute top-3 right-3 cursor-pointer text-neutral-500 hover:text-neutral-800 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimerToast;
