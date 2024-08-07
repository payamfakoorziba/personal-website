import Link from "next/link";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import HamburgerMenu from "./hamburger-menu";

const navItems = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Contact", href: "/" },
];

function Logo() {
  return <div className="text-2xl font-medium select-none">Payam.</div>;
}

const Header = () => {
  return (
    <header className="border-b-[0.5px] border-black/15 dark:border-white/15 py-6 top-0 z-10">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-x-4">
            <HamburgerMenu />
            <ModeToggle />
          </div>
        </div>
      </Container>
      <nav className="hidden md:flex items-center h-10 px-6 rounded-full gap-x-10 absolute top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 shadow-md z-20">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-sm">
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
