"use client";

import Link from "next/link";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";
import HamburgerMenu from "./hamburger-menu";
import navItems from "@/lib/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Logo() {
  return <div className="text-2xl font-medium select-none">Payam.</div>;
}

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="relative border-b-[0.5px] border-black/15 dark:border-white/15  top-0 z-10">
      <Container className="h-full relative">
        <div className="relative flex justify-between items-center h-full py-6">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-x-4">
            <HamburgerMenu />
            <ModeToggle />
          </div>
          {/* <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-[0.5px] bg-gradient-to-r from-transparent via-background to-transparent invert translate-y-[0.5px]" /> */}
        </div>
      </Container>
      <nav className="hidden md:flex items-center h-10 px-6 rounded-full gap-x-10 absolute top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 shadow-md z-20">
        {navItems.map((item) => (
          <TooltipProvider key={item.name}>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm",
                    "opacity-75 hover:opacity-100 transition-opacity h-full flex items-center relative",
                    pathname === item.href && "opacity-100",
                    !item.active && "cursor-default hover:opacity-75 opacity-70"
                  )}
                  onClick={(e) => {
                    if (!item.active) {
                      e.preventDefault();
                      return;
                    }
                    if (item.href.includes("#")) {
                      e.preventDefault();
                      document
                        .getElementById(item.href.slice(2))
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }
                  }}
                >
                  {item.name}
                  {pathname === item.href && item.active && (
                    <motion.div
                      className="absolute h-px bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-background/60 invert to-transparent"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </TooltipTrigger>
              {!item.active && <TooltipContent>Coming soon!</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </header>
  );
};

export default Header;
