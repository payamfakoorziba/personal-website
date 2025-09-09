"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-2">Counter: {count}</h3>
      <div className="space-x-2">
        <Button onClick={() => setCount(count - 1)} variant="outline">
          Decrease
        </Button>
        <Button onClick={() => setCount(count + 1)} variant="default">
          Increase
        </Button>
        <Button onClick={() => setCount(0)} variant="destructive">
          Reset
        </Button>
      </div>
    </div>
  );
}
