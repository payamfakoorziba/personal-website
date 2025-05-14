import Link from "next/link";
import { Container } from "./container";
import navItems from "@/lib/navigation";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="border-t-[0.5px] border-black/50 dark:border-white/50 py-6 dark:bg-stone-950 text-xs">
      <Container>
        <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between">
          <div className="flex items-center gap-x-10 text-foreground">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  !item.active &&
                    "cursor-default pointer-events-none opacity-80"
                )}
              >
                {item.name}
                {!item.active && " (coming soon)"}
              </Link>
            ))}
          </div>
          <p className="text-xs text-black/60 dark:text-white/60">
            ©{new Date().getFullYear()} Payam Technologies Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
