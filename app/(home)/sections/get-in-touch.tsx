"use client";

import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const GetInTouch = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="relative" id="get-in-touch">
      <div className="absolute inset-0 dark:bg-gradient-to-t from-[#303036] -z-10" />
      <Container className="py-10">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Want to get in touch?
          </h3>
          <p className="text-sm/relaxed md:text-base/relaxed mt-5 leading-relaxed">
            <span
              className={cn(
                isHovered && "opacity-40 duration-300 transition-opacity"
              )}
            >
              Drop me a line at&nbsp;
            </span>
            <span
              className={cn(
                "group inline-flex items-baseline w-fit cursor-pointer"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setIsCopied(false);
              }}
              onClick={async () => {
                navigator.clipboard.writeText("info@payamfakoorziba.com");
                setIsCopied(true);
              }}
            >
              <Copy
                className={cn(
                  "inline size-3 mr-1 scale-0 group-hover:scale-100 transition duration-300",
                  isCopied && "hidden"
                )}
              />
              {isCopied && (
                <Check className={cn("inline size-3 mr-1 text-green-500")} />
              )}
              <span className="-translate-x-4 group-hover:translate-x-0 transition duration-300">
                info@payamfakoorziba.com.
              </span>
            </span>
            <br />
            <span
              className={cn(
                isHovered && "opacity-40 duration-300 transition-opacity"
              )}
            >
              If you ever come to Toronto, let&apos;s meet up for coffee.
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
