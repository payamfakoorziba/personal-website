"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { craftComponents } from "@/data/craft-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CraftNavigationProps {
  className?: string;
}

export default function CraftNavigation({ className }: CraftNavigationProps) {
  const pathname = usePathname();

  // Find current component index
  const currentIndex = craftComponents.findIndex(
    (component) => component.link === pathname
  );

  console.log("pathname", pathname);

  // Get previous and next components
  const previousComponent =
    currentIndex > 0 ? craftComponents[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < craftComponents.length - 1
      ? craftComponents[currentIndex + 1]
      : null;

  // Don't render if current path is not found in craft components
  if (currentIndex === -1) {
    return null;
  }

  return (
    <div className={`flex justify-between items-center ${className || ""}`}>
      <div className="flex-1">
        {previousComponent ? (
          <Link href={previousComponent.link}>
            <button className="flex items-center gap-2 cursor-pointer">
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{previousComponent.title}</div>
              </div>
            </button>
          </Link>
        ) : (
          <div /> // Empty div to maintain layout
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextComponent ? (
          <Link href={nextComponent.link}>
            <button className="flex items-center gap-2 cursor-pointer">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{nextComponent.title}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
          </Link>
        ) : (
          <div /> // Empty div to maintain layout
        )}
      </div>
    </div>
  );
}
