"use client";

import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import navItems from "@/lib/navigation";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-none hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 shadow-md"
        >
          <Menu className="size-[1.2rem]" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-zinc-950/70 backdrop-blur-xs data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content
          className={cn(
            "fixed top-[80px] inset-x-2 px-4 py-2 bg-background shadow-xl rounded-lg z-20 focus:ring-0 focus:outline-hidden",
            // animations
            "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-[80px] data-[state=open]:duration-300",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:duration-200"
          )}
        >
          <div className="py-3 flex justify-between">
            <Dialog.Title className="text-sm text-muted-foreground">
              Navigation
            </Dialog.Title>
            <Dialog.Close>
              <X className="size-6 p-1 text-muted-foreground" />
            </Dialog.Close>
          </div>
          <div className="flex flex-col gap-y-2 divide-y">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "py-2",
                  !item.active &&
                    "cursor-default pointer-events-none opacity-80"
                )}
                onClick={(e) => {
                  setOpen(false);
                  if (item.href.includes("#")) {
                    e.preventDefault();
                    setTimeout(() => {
                      document
                        .getElementById(item.href.slice(2))
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }, 205);
                  }
                }}
              >
                {item.name}
                {!item.active && " (coming soon)"}
              </Link>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default HamburgerMenu;
