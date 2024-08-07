"use client";

import profile from "@/public/headshot.jpeg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState } from "react";

function ProfilePicture() {
  const [hasOpenedResume, setHasOpenedResume] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="size-[60px] md:size-[80px] rounded-full grid place-content-center"
            style={{
              background: !hasOpenedResume
                ? "conic-gradient(#DD00AF, #E002AC, #FF9F01, #FF9F01, #FFA100, #DD00AF)"
                : "#737373",
            }}
            onClick={() => setHasOpenedResume(true)}
          >
            <div className="size-[56px] md:size-[76px] rounded-full bg-background grid place-content-center">
              <Image
                src={profile}
                alt="Profile picture"
                className="rounded-full size-[52px] md:size-[72px]"
              />
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>Click to view my resume</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ProfilePicture;
