"use client";

import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { Howl } from "howler";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const DEFAULT_TIME = 10;

const KitchenTimer = () => {
  const [timerState, setTimerState] = useState<"idle" | "active" | "finished">(
    "idle"
  );
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME); // 5 seconds
  const beepTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const beepSoundRef = useRef<Howl | null>(null);
  const buttonMouseDownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to play beep sound
  const playBeep = () => {
    const beepSound = beepSoundRef.current;
    beepSound?.play();
  };

  // Function to clear all beep timeouts
  const clearBeepTimeouts = () => {
    beepTimeoutsRef.current.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
    beepTimeoutsRef.current = [];
  };

  const playFinishedBeeps = () => {
    // First set of 4 beeps
    for (let i = 0; i < 4; i++) {
      const timeoutId = setTimeout(() => {
        playBeep();
      }, i * 150);
      beepTimeoutsRef.current.push(timeoutId);
    }

    // Pause for 1 second, then second set of 4 beeps
    const pauseTimeoutId = setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        const timeoutId = setTimeout(() => {
          playBeep();
        }, i * 150);
        beepTimeoutsRef.current.push(timeoutId);
      }
    }, 1500);
    beepTimeoutsRef.current.push(pauseTimeoutId);
  };

  const handleReset = useCallback(() => {
    clearBeepTimeouts();
    setTimerState("idle");
    setTimeLeft(0);
  }, []);

  const handlePlayPause = useCallback(() => {
    if (timeLeft === 0) return;
    playBeep();
    clearBeepTimeouts();
    if (timerState === "finished") {
      handleReset();
    } else {
      setTimerState(timerState === "active" ? "idle" : "active");
    }
  }, [timerState, timeLeft]);

  const handleIncrement = useCallback(() => {
    if (timerState !== "idle") return;
    console.log("handleIncrement");
    setTimeLeft((prevTimeLeft) => prevTimeLeft + 5);
  }, [timerState]);

  const handleStartIncrementing = useCallback(() => {
    handleIncrement();

    // Start incrementing after a short delay
    const timeoutId = setTimeout(() => {
      buttonMouseDownIntervalRef.current = setInterval(() => {
        handleIncrement();
      }, 100);
    }, 300);
    buttonMouseDownIntervalRef.current = timeoutId;
  }, [handleIncrement]);

  const handleStopIncrementing = useCallback(() => {
    if (buttonMouseDownIntervalRef.current) {
      clearInterval(buttonMouseDownIntervalRef.current);
      buttonMouseDownIntervalRef.current = null;
    }
  }, []);

  const handleDecrement = useCallback(() => {
    if (timerState !== "idle") return;
    setTimeLeft((prevTimeLeft) => {
      if (prevTimeLeft === 0) return prevTimeLeft;
      return Math.max(0, prevTimeLeft - 5);
    });
  }, [timerState]);

  const handleStartDecrementing = useCallback(() => {
    handleDecrement();

    // Start incrementing after a short delay
    const timeoutId = setTimeout(() => {
      buttonMouseDownIntervalRef.current = setInterval(() => {
        handleDecrement();
      }, 100);
    }, 300);
    buttonMouseDownIntervalRef.current = timeoutId;
  }, [handleDecrement]);

  const handleStopDecrementing = useCallback(() => {
    if (buttonMouseDownIntervalRef.current) {
      clearInterval(buttonMouseDownIntervalRef.current);
      buttonMouseDownIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Initialize the beep sound
    const beepSound = new Howl({
      src: ["/sfx/new-beep.mp3"],
      preload: true,
      volume: 1.0,
    });
    beepSoundRef.current = beepSound;

    // Clean up
    return () => {
      clearBeepTimeouts();
      if (beepSoundRef.current) {
        beepSoundRef.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerState !== "active") return;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerState("finished");
      playFinishedBeeps(); // Play the kitchen timer beep pattern
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState, timeLeft]);

  // Handle space key for play/pause
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlayPause();
      }
      // Press escape
      if (event.code === "Escape") {
        event.preventDefault();
        handleReset();
      }
      // Press =/+ (for increment)
      if (event.code === "Equal") {
        event.preventDefault();
        handleIncrement();
      }
      // Press -
      if (event.code === "Minus") {
        event.preventDefault();
        handleDecrement();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePlayPause, handleReset, handleIncrement, handleDecrement]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Main timer */}
      <div className="flex items-end gap-2">
        {/* Minutes */}
        <div className="flex relative">
          <SevenSegmentDisplay
            value={minutesTens as Digit}
            className="w-16 sm:w-20"
            isFlashing={timerState === "finished"}
          />
          <SevenSegmentDisplay
            value={minutesOnes as Digit}
            className="w-16 sm:w-20"
            isFlashing={timerState === "finished"}
          />

          <span className="absolute top-0 -translate-y-full right-2 font-semibold text-neutral-600">
            M
          </span>
        </div>
        {/* Seconds */}
        <div className="flex relative">
          <SevenSegmentDisplay
            value={secondsTens as Digit}
            className="w-10 sm:w-12"
            isFlashing={timerState === "finished"}
          />
          <SevenSegmentDisplay
            value={secondsOnes as Digit}
            className="w-10 sm:w-12"
            isFlashing={timerState === "finished"}
          />

          <span className="absolute top-0 -translate-y-full right-2 font-semibold text-neutral-600">
            S
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                onMouseDown={handleStartDecrementing}
                onMouseUp={handleStopDecrementing}
                onMouseLeave={handleStopDecrementing}
                className="bg-neutral-100 hover:bg-neutral-200"
                disabled={timerState !== "idle" || timeLeft === 0}
              >
                -5s
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-1.5 text-xs">
              <div className="inline-flex relative">
                Decrement 5s
                <span className="text-[8px] border border-neutral-500 px-[3px] py-[1.5px] rounded-sm ml-1">
                  -
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                onMouseDown={handlePlayPause}
                className="bg-neutral-100 hover:bg-neutral-200 [&_svg]:fill-neutral-600 [&_svg]:stroke-neutral-600"
                disabled={timeLeft === 0}
              >
                {timerState === "active" || timerState === "finished" ? (
                  <Pause />
                ) : (
                  <Play />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-1.5 text-xs">
              <div className="inline-flex relative">
                {timerState === "active" || timerState === "finished"
                  ? "Pause"
                  : "Play"}
                <span className="text-[8px] border border-neutral-500 px-[3px] py-[1.5px] rounded-sm ml-1">
                  space
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                onMouseDown={handleReset}
                className="bg-neutral-100 hover:bg-neutral-200 [&_svg]:stroke-neutral-600"
                disabled={timeLeft === 0 && timerState === "idle"}
              >
                <RotateCcw className="size-4 stroke-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-1.5 text-xs">
              <div className="inline-flex relative">
                Reset
                <span className="text-[8px] border border-neutral-500 px-[3px] py-[1.5px] rounded-sm ml-1">
                  esc
                </span>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                onMouseDown={handleStartIncrementing}
                onMouseUp={handleStopIncrementing}
                onMouseLeave={handleStopIncrementing}
                className="bg-neutral-100 hover:bg-neutral-200"
                disabled={timerState !== "idle"}
              >
                +5s
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-1.5 text-xs">
              <div className="inline-flex relative">Increment 5s</div>
              <span className="text-[8px] border border-neutral-500 px-[3px] py-[1.5px] rounded-sm ml-1">
                +
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Debug info */}
      {/* <div className="text-xs text-neutral-500 absolute bottom-2 left-2">
        {timerState} {timeLeft}
      </div> */}
    </div>
  );
};

const SevenSegmentDisplay = ({
  value: controlledValue,
  className,
  isFlashing,
}: {
  value?: Digit;
  className?: string;
  isFlashing?: boolean;
}) => {
  const [value, setValue] = useState<Digit | undefined>(controlledValue);

  useEffect(() => {
    setValue(controlledValue);
  }, [controlledValue]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isFlashing) {
      interval = setInterval(() => {
        setValue(value === undefined ? 0 : undefined);
      }, 750);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFlashing, value]);

  // 7-segment display patterns for digits 0-9
  const SEGMENT_PATTERNS = {
    0: [true, true, true, true, true, true, false],
    1: [false, true, true, false, false, false, false],
    2: [true, true, false, true, true, false, true],
    3: [true, true, true, true, false, false, true],
    4: [false, true, true, false, false, true, true],
    5: [true, false, true, true, false, true, true],
    6: [true, false, true, true, true, true, true],
    7: [true, true, true, false, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
  };

  // If value is undefined, turn off all segments
  const segments =
    value !== undefined
      ? SEGMENT_PATTERNS[value]
      : [false, false, false, false, false, false, false];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 12 20"
      stroke="#FFF"
      strokeWidth=".25"
      className={cn(className)}
    >
      <polygon
        id="a"
        fill={segments[0] ? "#525252" : "#f5f5f5"}
        points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2"
      />
      <polygon
        id="b"
        fill={segments[1] ? "#525252" : "#f5f5f5"}
        points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2"
      />
      <polygon
        id="c"
        fill={segments[2] ? "#525252" : "#f5f5f5"}
        points="9, 9 10,10 10,16  9,17  8,16  8,10"
      />
      <polygon
        id="d"
        fill={segments[3] ? "#525252" : "#f5f5f5"}
        points="9,17  8,18  2,18  1,17  2,16  8,16"
      />
      <polygon
        id="e"
        fill={segments[4] ? "#525252" : "#f5f5f5"}
        points="1,17  0,16  0,10  1, 9  2,10  2,16"
      />
      <polygon
        id="f"
        fill={segments[5] ? "#525252" : "#f5f5f5"}
        points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8"
      />
      <polygon
        id="g"
        fill={segments[6] ? "#525252" : "#f5f5f5"}
        points="1, 9  2, 8  8, 8  9, 9  8,10  2,10"
      />
    </svg>
  );
};

export default KitchenTimer;
