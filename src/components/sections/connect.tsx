"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ConnectSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="mt-[60px]">
      <h3 className="font-semibold">Connect</h3>
      <p className="text-sm/relaxed md:text-base/relaxed mt-5 leading-relaxed">
        <span
          className={cn(
            isHovered && "opacity-40 duration-300 transition-opacity"
          )}
        >
          You can reach me at&nbsp;
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
            navigator.clipboard.writeText("payamfakoor@gmail.com");
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
            <Check className={cn("inline size-3 mr-1 text-green-700")} />
          )}
          <span className="-translate-x-4 group-hover:translate-x-0 transition duration-300">
            payamfakoor@gmail.com.
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

      <div className="mt-8 flex flex-wrap gap-4">
        {[
          {
            label: "Instagram",
            href: "https://www.instagram.com/payamfkz/",
          },
          {
            label: "X (Twitter)",
            href: "https://x.com/payamfkz",
          },
          {
            label: "GitHub",
            href: "https://github.com/payamfakoorziba",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/payam-fakoorziba-b115071b3/",
          },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-muted hover:bg-neutral-200 transition-colors duration-300 flex items-center gap-2"
          >
            {item.label}
            <ArrowUpRight className="size-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}
