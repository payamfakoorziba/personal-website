import Link from "next/link";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Contact", href: "/" },
];

const Footer = () => {
  return (
    <footer className="border-t-[0.5px] border-black/50 dark:border-white/50 py-6 dark:bg-stone-950 text-xs">
      <Container>
        <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between">
          <div className="flex items-center gap-x-10 text-foreground">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-black/60 dark:text-white/60">
            ©2024 Payam Technologies Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
