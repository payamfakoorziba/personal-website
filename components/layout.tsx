// "use client";

import Header from "@/components/header";
import Footer from "./footer";
import GetInTouch from "@/app/(home)/sections/get-in-touch";
// import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-85">
        <div className="flex w-full max-w-7xl lg:px-8 overflow-hidden">
          <div className="relative w-full border-[0.5px] border-black/15 dark:border-white/15">
            {/* <div
              // initial={{
              //   y: 0,
              //   opacity: 0,
              // }}
              // animate={{
              //   opacity: [0, 1, 0],
              //   y: "50vh",
              // }}
              // transition={{
              //   ease: "easeInOut",
              //   duration: 5,
              //   repeat: Infinity,
              //   repeatDelay: 5,
              // }}
              className="hidden lg:block absolute right-0 top-10 w-[0.5px] h-80 bg-gradient-to-b from-transparent via-background to-transparent invert translate-x-[0.5px]"
            /> */}
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col min-h-screen">
        <Header />
        <main className="flex-auto">{children}</main>
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}
