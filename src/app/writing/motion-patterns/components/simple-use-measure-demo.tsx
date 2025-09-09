"use client";

import DemoCard from "@/components/ui/demo-card";
import useMeasure from "react-use-measure";

function SimpleUseMeasureDemoComponent() {
  let [ref, bounds] = useMeasure();

  return (
    <div
      ref={ref}
      className="resize overflow-auto w-96 min-w-40 h-20 min-h-10 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center"
    >
      <span className="text-sm font-medium">Drag to resize!</span>
      <div className="text-xs text-neutral-500 dark:text-neutral-400">
        {bounds.width} x {bounds.height} px
      </div>
    </div>
  );
}

function SimpleUseMeasureDemo() {
  return (
    <DemoCard className="grid place-content-center">
      {(resetKey) => <SimpleUseMeasureDemoComponent key={resetKey} />}
    </DemoCard>
  );
}

export default SimpleUseMeasureDemo;
