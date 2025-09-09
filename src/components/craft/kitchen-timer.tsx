"use client";

import { Pause, Play, Plus, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const KitchenTimer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeLeft]);

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
        <div className="flex h-fit relative">
          <SevenSegmentDisplay
            value={minutesTens as Digit}
            className="w-20 h-fit"
          />
          <SevenSegmentDisplay
            value={minutesOnes as Digit}
            className="w-20 h-fit"
          />

          <span className="absolute top-0 -translate-y-full right-2 font-semibold text-neutral-600">
            M
          </span>
        </div>
        {/* Seconds */}
        <div className="flex relative">
          <SevenSegmentDisplay
            value={secondsTens as Digit}
            className="w-12 h-fit"
          />
          <SevenSegmentDisplay
            value={secondsOnes as Digit}
            className="w-12 h-fit"
          />

          <span className="absolute top-0 -translate-y-full right-2 font-semibold text-neutral-600">
            S
          </span>
        </div>
      </div>

      {/* Buttons */}
      {/* Target ALL svgs inside the buttons and set the fill color to neutral-600 */}
      <div className="flex gap-2 [&_svg]:fill-neutral-600 [&_svg]:stroke-neutral-600">
        <Button variant="secondary" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause /> : <Play />}
        </Button>
      </div>
    </div>
  );
};

const SevenSegmentDisplay = ({
  value,
  className,
}: {
  value?: Digit;
  className?: string;
}) => {
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
      width="192"
      height="320"
      viewBox="-1 -1 12 20"
      stroke="#FFF"
      strokeWidth=".25"
      className={cn("w-full h-full [&_polygon]:transition-all", className)}
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
