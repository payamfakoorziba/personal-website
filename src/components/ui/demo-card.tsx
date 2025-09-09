"use client";

import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";
import { useState } from "react";

const DemoCard = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode | ((resetKey: number) => React.ReactNode);
  className?: string;
  containerClassName?: string;
}) => {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((key) => key + 1);
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-950 border rounded-lg [background-size:10px_10px] [background-position:5px_5px] [background-clip:padding-box] p-4 min-h-[200px] overflow-hidden",
        "[background-image:linear-gradient(to_right,var(--color-neutral-100),transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100),transparent_1px)] dark:[background-image:linear-gradient(to_right,var(--color-neutral-900),transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900),transparent_1px)] relative grid place-content-center",
        containerClassName
      )}
    >
      <div className={className}>
        {typeof children === "function" ? children(resetKey) : children}
      </div>
      <button
        className={cn(
          "absolute top-2 right-2 size-8 grid place-content-center bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700 rounded-md p-1.5 group",
          "dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-300"
        )}
        onClick={handleReset}
      >
        <RotateCw className="size-4" />
      </button>
    </div>
  );
};

export default DemoCard;
