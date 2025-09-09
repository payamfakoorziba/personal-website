"use client";

import type React from "react";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    const codeElement = ref.current?.querySelector(`pre code`);
    if (codeElement) {
      const text = codeElement.textContent || "";
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cn("relative group w-full shrink-0 code-block", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity size-8 bg-white dark:bg-neutral-950"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <pre
        className="overflow-x-auto rounded-lg border p-4 bg-white dark:bg-neutral-950 text-sm"
        ref={ref}
      >
        {children}
      </pre>
    </div>
  );
}
