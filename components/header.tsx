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

function Logo() {
  return <div className="text-2xl font-medium select-none">Payam.</div>;
}

const Header = () => {
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
          <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-[0.5px] bg-gradient-to-r from-transparent via-background to-transparent invert translate-y-[0.5px]" />
        </div>
      </Container>
      <nav className="hidden md:flex items-center h-10 px-6 rounded-full gap-x-10 absolute top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 shadow-md z-20">
        {navItems.map((item) => (
          <TooltipProvider key={item.name}>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn("text-sm", !item.active && "cursor-default")}
                >
                  {item.name}
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
