import Link from "next/link";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "About", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Contact", href: "/" },
];

function Logo() {
  return <div className="text-2xl font-medium select-none">Payam.</div>;
}

const Header = () => {
  return (
    <header className="border-b-[0.5px] border-black/15 dark:border-white/15 py-6">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <ModeToggle />
        </div>
      </Container>
      <nav className="hidden md:flex items-center h-10 px-6 rounded-full gap-x-10 fixed top-6 left-1/2 -translate-x-1/2 dark:bg-zinc-800 shadow-md">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;