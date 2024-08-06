import Header from "@/components/header";
import Footer from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-85">
        <div className="flex w-full max-w-7xl lg:px-8 overflow-hidden 5">
          <div className="w-full border-[0.5px] border-black/15 dark:border-white/15" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
