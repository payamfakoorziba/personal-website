"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const TimerContext = createContext<{
  timerState: "idle" | "active" | "finished";
  timeLeft: number;
  setTimerState: React.Dispatch<
    React.SetStateAction<"idle" | "active" | "finished">
  >;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}>({
  timerState: "idle",
  setTimerState: () => {},
  timeLeft: 0,
  setTimeLeft: () => {},
});

const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerState, setTimerState] = useState<"idle" | "active" | "finished">(
    "idle"
  );
  const pathname = usePathname();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerState !== "active") return;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerState(pathname === "/craft/kitchen-timer" ? "finished" : "idle");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState, timeLeft, pathname]);

  return (
    <TimerContext.Provider
      value={{ timeLeft, setTimeLeft, timerState, setTimerState }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

export const useTimer = () => {
  return useContext(TimerContext);
};
